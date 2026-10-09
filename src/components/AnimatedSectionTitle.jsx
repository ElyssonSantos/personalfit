import React, { useState, useEffect, useRef, useMemo } from 'react';

/**
 * Extracts plain text string from React children (for char count & aria-label).
 */
const getPlainText = (children) => {
  let text = '';
  React.Children.forEach(children, (child) => {
    if (child == null || typeof child === 'boolean') return;
    if (typeof child === 'string' || typeof child === 'number') {
      text += String(child);
    } else if (React.isValidElement(child)) {
      if (child.type === 'br') {
        text += ' ';
      } else {
        text += getPlainText(child.props.children);
      }
    }
  });
  return text;
};

/**
 * Recursively renders React children up to targetCount characters.
 * `processedChars` is the number of text characters present in the tree BEFORE `node`.
 * Returns { element, charCount, cursorPlaced }
 */
const renderTree = (node, processedChars, targetCount, cursorElement, key = 'root') => {
  if (node == null || typeof node === 'boolean') {
    return { element: null, charCount: processedChars, cursorPlaced: false };
  }

  // Handle Arrays (like the root children array!)
  if (Array.isArray(node)) {
    let currentProcessed = processedChars;
    let cursorPlacedInChild = false;
    const renderedChildren = [];

    for (let i = 0; i < node.length; i++) {
      const child = node[i];
      const res = renderTree(child, currentProcessed, targetCount, cursorElement, `${key}-${i}`);
      currentProcessed = res.charCount;
      if (res.cursorPlaced) cursorPlacedInChild = true;
      if (res.element !== null) {
        renderedChildren.push(res.element);
      }
    }

    if (renderedChildren.length === 0) {
      return { element: null, charCount: currentProcessed, cursorPlaced: cursorPlacedInChild };
    }

    return { 
      element: <React.Fragment key={key}>{renderedChildren}</React.Fragment>, 
      charCount: currentProcessed, 
      cursorPlaced: cursorPlacedInChild 
    };
  }

  // Text or Number node
  if (typeof node === 'string' || typeof node === 'number') {
    const textStr = String(node);
    const textLen = textStr.length;
    const nodeStart = processedChars;
    const nodeEnd = processedChars + textLen;

    if (nodeStart >= targetCount) {
      return { element: null, charCount: nodeEnd, cursorPlaced: false };
    }

    const showLen = Math.min(textLen, targetCount - nodeStart);
    const visibleText = textStr.slice(0, showLen);
    const isCursorHere = (nodeStart + showLen === targetCount) && Boolean(cursorElement);

    const element = (
      <React.Fragment key={key}>
        {visibleText}
        {isCursorHere ? cursorElement : null}
      </React.Fragment>
    );

    return { element, charCount: nodeEnd, cursorPlaced: isCursorHere };
  }

  // React element
  if (React.isValidElement(node)) {
    if (node.type === 'br') {
      // Only render <br/> if targetCount >= processedChars (typing reached or passed this break)
      if (targetCount > 0 && targetCount >= processedChars) {
        return { element: <br key={key} />, charCount: processedChars, cursorPlaced: false };
      }
      return { element: null, charCount: processedChars, cursorPlaced: false };
    }

    let currentProcessed = processedChars;
    let cursorPlacedInChild = false;
    const childArray = React.Children.toArray(node.props.children);
    const renderedChildren = [];

    for (let i = 0; i < childArray.length; i++) {
      const child = childArray[i];
      const res = renderTree(child, currentProcessed, targetCount, cursorElement, `${key}-${i}`);
      currentProcessed = res.charCount;
      if (res.cursorPlaced) cursorPlacedInChild = true;
      if (res.element !== null) {
        renderedChildren.push(res.element);
      }
    }

    if (renderedChildren.length === 0) {
      return { element: null, charCount: currentProcessed, cursorPlaced: cursorPlacedInChild };
    }

    const element = React.cloneElement(node, { key }, renderedChildren);
    return { element, charCount: currentProcessed, cursorPlaced: cursorPlacedInChild };
  }

  return { element: null, charCount: processedChars, cursorPlaced: false };
};

const AnimatedSectionTitle = ({
  children,
  className = 'section-title',
  tag: Tag = 'h2',
  style,
  ...props
}) => {
  const elementRef = useRef(null);
  const plainText = useMemo(() => getPlainText(children), [children]);

  // Total character count excluding <br/>
  const totalLength = useMemo(() => {
    let count = 0;
    const countChars = (node) => {
      React.Children.forEach(node, (child) => {
        if (child == null || typeof child === 'boolean') return;
        if (typeof child === 'string' || typeof child === 'number') {
          count += String(child).length;
        } else if (React.isValidElement(child) && child.type !== 'br') {
          countChars(child.props.children);
        }
      });
    };
    countChars(children);
    return count;
  }, [children]);

  const [hasStarted, setHasStarted] = useState(false);
  const [visibleChars, setVisibleChars] = useState(0);
  const [cursorPhase, setCursorPhase] = useState('typing'); // 'typing' | 'blinking' | 'fading' | 'hidden'

  // IntersectionObserver + Viewport mount check
  useEffect(() => {
    if (hasStarted) return;

    const element = elementRef.current;
    if (!element) return;

    // Check if element is already in viewport on mount (e.g. Hero title on F5)
    const rect = element.getBoundingClientRect();
    const isInViewport = rect.top < (window.innerHeight || document.documentElement.clientHeight) && rect.bottom > 0;

    if (isInViewport) {
      setHasStarted(true);
      setVisibleChars(1); // Start immediately with 1st character!
      return;
    }

    if (!('IntersectionObserver' in window)) {
      setHasStarted(true);
      setVisibleChars(1);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          setVisibleChars(1); // Start immediately with 1st character!
          observer.disconnect();
        }
      },
      {
        threshold: 0.01,
        rootMargin: '0px 0px -10px 0px',
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [hasStarted]);

  // Typing effect loop (45ms per character)
  useEffect(() => {
    if (!hasStarted) return;

    if (visibleChars >= totalLength) {
      const timer = setTimeout(() => {
        setCursorPhase('blinking');
      }, 0);
      return () => clearTimeout(timer);
    }

    const speed = 45; // 45ms per char -> ~1.3s for 30 chars

    const timer = setTimeout(() => {
      setVisibleChars((current) => Math.min(totalLength, current + 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [hasStarted, visibleChars, totalLength]);

  // Cursor post-typing sequence (blinking 1.5s -> fading 0.4s -> hidden)
  useEffect(() => {
    if (cursorPhase === 'blinking') {
      const timer = setTimeout(() => {
        setCursorPhase('fading');
      }, 1500);
      return () => clearTimeout(timer);
    }

    if (cursorPhase === 'fading') {
      const timer = setTimeout(() => {
        setCursorPhase('hidden');
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [cursorPhase]);

  // Create cursor element if visible
  const cursorElement = cursorPhase !== 'hidden' ? (
    <span
      key="typewriter-cursor"
      className={`typewriter-cursor ${cursorPhase}`}
      aria-hidden="true"
    />
  ) : null;

  // Render tree sliced to visibleChars
  let renderedContent;
  let cursorPlaced = false;

  if (hasStarted && visibleChars >= totalLength && cursorPhase === 'hidden') {
    renderedContent = children;
    cursorPlaced = true;
  } else {
    const res = renderTree(children, 0, visibleChars, cursorElement, 'title-root');
    renderedContent = res.element;
    cursorPlaced = res.cursorPlaced;
  }

  return (
    <Tag
      ref={elementRef}
      className={className}
      style={style}
      aria-label={plainText}
      {...props}
    >
      <span aria-hidden="true">
        {renderedContent}
        {!cursorPlaced && cursorElement}
      </span>
    </Tag>
  );
};

export default AnimatedSectionTitle;

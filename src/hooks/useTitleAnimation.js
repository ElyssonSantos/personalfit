import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook to trigger typing/reveal animation on section titles when they scroll into view.
 */
export const useTitleAnimation = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      const heroTitles = document.querySelectorAll('.hero-title');
      heroTitles.forEach((title) => title.classList.add('in-view'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.1,
      }
    );

    const observeTitles = () => {
      const heroTitles = document.querySelectorAll('.hero-title');
      heroTitles.forEach((title) => {
        const rect = title.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          title.classList.add('in-view');
        } else {
          observer.observe(title);
        }
      });
    };

    const timeoutId = setTimeout(observeTitles, 50);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [pathname]);
};

export default useTitleAnimation;

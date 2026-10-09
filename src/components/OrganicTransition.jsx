import React from 'react';

const OrganicTransition = ({ 
  bgColor = 'transparent',
  fillColor = 'var(--bg-main)', 
  type = 'descendente',
  position = 'bottom',
  flipHorizontal = false 
}) => {
  
  const renderPath = () => {
    switch (type) {
      case 'ascendente':
        return <path fill={fillColor} d="M0,200 L1440,200 L1440,0 C1100,200 500,0 0,200 Z" />;
      case 'diagonal':
        return <path fill={fillColor} d="M0,200 L1440,200 L1440,50 C1000,200 400,0 0,150 Z" />;
      case 'descendente':
      default:
        return <path fill={fillColor} d="M0,200 L1440,200 L1440,150 C900,0 400,200 0,0 Z" />;
    }
  };

  const wrapperStyle = {
    position: 'relative',
    width: '100%',
    lineHeight: 0,
    overflow: 'hidden',
    backgroundColor: bgColor,
    transform: position === 'top' ? 'rotate(180deg)' : 'none'
  };
  
  if (flipHorizontal) {
    wrapperStyle.transform += ' scaleX(-1)';
  }

  return (
    <div className="organic-transition" style={wrapperStyle}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 200" 
        preserveAspectRatio="none"
        style={{
          display: 'block',
          width: '100%',
          height: 'clamp(60px, 8vw, 150px)', // Responsivo: maior no desktop, proporcional no mobile
        }}
      >
        {renderPath()}
      </svg>
    </div>
  );
};

export default OrganicTransition;

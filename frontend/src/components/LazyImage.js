import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const LazyImage = ({ 
  src, 
  alt, 
  placeholderSrc = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlOWVjZWYiLz48L3N2Zz4=',
  className = '', 
  width, 
  height, 
  style = {}, 
  ...props 
}) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  // Configurações de estilo com fallback
  const imageStyle = {
    transition: 'opacity 0.3s ease-in-out',
    opacity: isVisible ? 1 : 0,
    ...style
  };

  return (
    <div ref={ref} className="lazy-image-container" style={{ width, height, overflow: 'hidden' }}>
      <img
        src={isVisible ? src : placeholderSrc}
        alt={alt}
        className={className}
        style={imageStyle}
        loading="lazy"
        width={width}
        height={height}
        {...props}
      />
    </div>
  );
};

export default LazyImage;

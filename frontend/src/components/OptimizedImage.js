import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const OptimizedImage = ({
  src,
  alt,
  sizes = '100vw',
  className = '',
  style = {},
  width,
  height,
  blur = false,
  ...props
}) => {
  const [ref, isVisible] = useIntersectionObserver();

  // Cria diferentes tamanhos de imagem para diferentes dispositivos
  const generateSrcSet = (imageSrc) => {
    if (!imageSrc) return '';
    
    // Extrai a base do URL da imagem
    const lastDot = imageSrc.lastIndexOf('.');
    const base = imageSrc.substring(0, lastDot);
    const extension = imageSrc.substring(lastDot);
    
    // Retorna string de srcSet com várias resoluções
    // Apenas se a imagem vier de unsplash, senão retorna apenas a imagem original
    if (imageSrc.includes('unsplash.com')) {
      return `${base}${extension}?w=500&q=70 500w,
              ${base}${extension}?w=800&q=75 800w,
              ${base}${extension}?w=1200&q=80 1200w,
              ${base}${extension}?w=1920&q=85 1920w`;
    }
    
    return imageSrc;
  };
  
  const blurDataUrl = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNlOWVjZWYiLz48L3N2Zz4=';
  
  const imageStyle = {
    transition: 'filter 0.3s, opacity 0.3s',
    filter: isVisible ? 'blur(0)' : blur ? 'blur(10px)' : 'none',
    opacity: isVisible ? 1 : 0.5,
    width: width || '100%',
    height: height || 'auto',
    objectFit: 'cover',
    ...style
  };

  return (
    <div ref={ref} className={`optimized-image-container ${className}`} style={{ overflow: 'hidden' }}>
      {isVisible ? (
        <img
          src={src}
          srcSet={generateSrcSet(src)}
          sizes={sizes}
          alt={alt}
          loading="lazy"
          width={width}
          height={height}
          style={imageStyle}
          {...props}
        />
      ) : (
        <img
          src={blurDataUrl}
          alt={alt}
          style={{
            ...imageStyle,
            backgroundColor: '#e9ecef'
          }}
          width={width}
          height={height}
        />
      )}
    </div>
  );
};

export default OptimizedImage;

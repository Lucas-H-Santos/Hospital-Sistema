import React, { useState, useRef, useEffect } from 'react';

const LazyComponent = ({ children, placeholder = null, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '100px', // Pré-carrega um pouco antes do componente entrar na viewport
        threshold,
      }
    );
    
    observer.observe(containerRef.current);
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [threshold]);
  
  return (
    <div ref={containerRef} className="lazy-component">
      {isVisible ? children : placeholder}
    </div>
  );
};

export default LazyComponent;

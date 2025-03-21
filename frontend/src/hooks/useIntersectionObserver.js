import { useEffect, useState, useRef } from 'react';

/**
 * Hook para observar quando um elemento se torna visível na viewport
 *
 * @param {Object} options - Opções do IntersectionObserver
 * @param {number} options.threshold - Valor entre 0 e 1 indicando a porcentagem do elemento visível
 * @param {string} options.root - Elemento raiz a ser considerado como viewport
 * @param {string} options.rootMargin - Margem ao redor do elemento raiz
 * @returns {[React.RefObject, boolean]} Retorna um ref para ser ligado ao elemento e um state indicando se está visível
 */
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const observerRef = useRef(null);

  const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    ...options
  };

  useEffect(() => {
    // Se o elemento já foi visto antes, não reobserva
    if (isVisible) return;

    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        
        // Uma vez que o elemento é visível, não precisamos mais observá-lo
        if (elementRef.current) {
          observerRef.current.unobserve(elementRef.current);
        }
      }
    }, defaultOptions);

    if (elementRef.current) {
      observerRef.current.observe(elementRef.current);
    }

    return () => {
      if (observerRef.current && elementRef.current) {
        observerRef.current.unobserve(elementRef.current);
      }
    };
  }, [defaultOptions, isVisible]);

  return [elementRef, isVisible];
};

export default useIntersectionObserver;

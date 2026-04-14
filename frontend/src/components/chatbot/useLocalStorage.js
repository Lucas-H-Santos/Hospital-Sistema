import { useState, useEffect } from 'react';

// Hook personalizado para persistir o histórico do chat na sessão (não persistente entre abas/fechamentos)
// Usa sessionStorage em vez de localStorage para evitar persistência de dados de saúde (LGPD)
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;

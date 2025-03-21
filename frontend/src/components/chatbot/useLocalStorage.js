import { useState, useEffect } from 'react';

// Hook personalizado para persistir o histórico de chat no localStorage
const useLocalStorage = (key, initialValue) => {
  // Estado para armazenar o valor
  const [value, setValue] = useState(() => {
    try {
      // Obter do localStorage
      const item = window.localStorage.getItem(key);
      // Analisar o item armazenado ou retornar initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Atualizar localStorage quando o estado muda
  useEffect(() => {
    try {
      // Salvar state no localStorage
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;

import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Aqui estamos simulando a verificação de autenticação
  // Em um ambiente real, isso seria conectado ao Redux state
  const isAuthenticated = useSelector(state => state.auth?.isAuthenticated) || localStorage.getItem('token');
  
  useEffect(() => {
    // Se não estiver autenticado, redireciona para a página de login
    if (!isAuthenticated) {
      navigate('/login', { state: { from: location.pathname } });
    }
  }, [isAuthenticated, navigate, location]);
  
  // Se estiver autenticado, renderiza o componente filho
  // Se não estiver, o useEffect acima já cuidará do redirecionamento
  return isAuthenticated ? children : null;
};

export default PrivateRoute;

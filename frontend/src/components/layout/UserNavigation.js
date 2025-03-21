import React, { useState, useEffect } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser, FaCog, FaClipboardList, FaSignOutAlt } from 'react-icons/fa';

const UserNavigation = () => {
  const [user, setUser] = useState(null);
  
  // Carregar informações do usuário ao montar o componente
  useEffect(() => {
    const userInfo = localStorage.getItem('user');
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }, []);
  
  // Função para fazer logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // Recarregar a página para atualizar o estado
    window.location.href = '/';
  };
  
  // Se não houver usuário logado, não renderizar nada
  if (!user) {
    return null;
  }
  
  return (
    <NavDropdown 
      title={
        <span>
          <FaUser className="me-1" /> {user.name}
        </span>
      } 
      id="user-dropdown"
    >
      <NavDropdown.Item as={Link} to="/perfil">
        <FaUser className="me-2" /> Meu Perfil
      </NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/consultas">
        <FaClipboardList className="me-2" /> Minhas Consultas
      </NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/configuracoes">
        <FaCog className="me-2" /> Configurações
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item onClick={handleLogout}>
        <FaSignOutAlt className="me-2" /> Sair
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default UserNavigation;

import React from 'react';
import { Layout, Button } from 'antd';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const { Header: AntHeader } = Layout;

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <AntHeader style={{ padding: 0, background: '#fff' }}>
      <div style={{ float: 'right' }}>
        {user ? (
          <Button onClick={handleLogout} type="primary">Logout</Button>
        ) : (
          <Button type="primary" onClick={() => navigate('/login')}>Login</Button>
        )}
      </div>
    </AntHeader>
  );
};

export default Header;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('token'); // Проверка авторизации

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-left">
          <Link to="/" className="nav-link">Главная</Link>
        </div>
        <div className="nav-right">
          {isAuthenticated ? (
            <button onClick={handleLogout} className="nav-link logout-btn">
              Выйти
            </button>
          ) : (
            <>
              <Link to="/login" className="nav-link">Вход</Link>
              <Link to="/register" className="nav-link">Регистрация</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
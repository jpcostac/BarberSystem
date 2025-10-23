import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'; // Vamos criar este arquivo de CSS em seguida

function Header() {
  return (
    <header className="header-container">
        {/* Logo da Barbearia */}
        <div className="logo-area">
            <p className='site-titlle'>Sr Dimas</p>
        </div>

      {/* Menu de navegação */}  
      <nav className="nav-menu">
        <Link to="/" className="nav-item">Sobre nós</Link>
        <Link to="/contatos" className="nav-item">Contatos</Link>
      </nav>

        {/* Área de login */}
      <div className="login-area">
        <Link to="/login">
            <button className="login-button">Login</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
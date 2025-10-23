import React from 'react';
import './Footer.css'; // Importa o CSS específico do rodapé

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Informação do Copyright e Ano Atual */}
        <p className="footer-copyright">
          &copy; {currentYear} Sr Dimas. Todos os direitos reservados.
        </p>
        
        {/* Informação do Desenvolvedor */}
        <p className="footer-developer">
          Desenvolvido por jpcostac
        </p>
      </div>
    </footer>
  );
}

export default Footer;
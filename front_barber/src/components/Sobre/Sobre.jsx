import React from 'react';
import './Sobre.css'; // Estilos específicos do bloco "Sobre"

function Sobre() {
  return (
    <section className="sobre-container">
      <h2>Nossa História e Excelência</h2>
      
      <div className="sobre-content">
        <p>A Barbearia Sr Dimas iniciou suas atividades em 2017, com a missão de redefinir o conceito de barbearia na região.</p>
        
        <p className="mission-statement">
          ATENDEMOS COM EXCLUSIVIDADE & EXCELÊNCIA 📍
        </p>

        <div className="awards-section">
          <h3>Reconhecimento e Prêmios</h3>
          <ul>
            <li>Premiada 2x Ênfase Nacional 23 🏆</li>
            <li>Barbeiros do Brasil 25 🏆</li>
          </ul>
        </div>
      </div>

      <div className="location-section">
        <h3>Onde nos encontrar</h3>
        <p>
          Rua Brigadeiro Vilela 5 - Loja B, <br />
          Fortaleza, Brazil 60850-780
        </p>
      </div>
    </section>
  );
}

export default Sobre;
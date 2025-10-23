// src/App.jsx

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css' 

import HomePage from './pages/HomePage.jsx'
// Verifique o nome do arquivo, você importou 'ContactPage'
import ContactPage from './pages/ContactPage.jsx' // Use o nome exato da sua rota
import LoginPage from './pages/LoginPage.jsx'

// Simplifique a importação do roteador
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    // 1. O BrowserRouter deve envolver tudo
    <BrowserRouter>

      {/* 2. O HEADER deve estar aqui para aparecer em TODAS as páginas */}
      <Header /> 

      <main className='main-content'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contatos' element={<ContactPage />} /> {/* Corrija para ContactsPage se for o nome correto */}
          <Route path='/login' element={<LoginPage />} />
        
          <Route path='*' element={<h2>Página não encontrada</h2>} />
        </Routes>
      </main>

      {/* 3. O FOOTER deve estar aqui para aparecer em TODAS as páginas */}
      <Footer /> 
    </BrowserRouter>
  )
}

export default App
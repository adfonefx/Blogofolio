import React from 'react';
import './App.scss';
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import { ThemeProvider } from './ThemeContext'

function App() {
  return (
    // Обёртка приложения в ThemeProvider для предоставления контекста темы
    <ThemeProvider> 
            <Header/>
            <Main/>
            <Footer/>
    </ThemeProvider> 
  );
}

export default App;

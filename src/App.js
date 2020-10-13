import React from 'react';
import Header from './components/Header';
import './css/App.css';
import Section from './components/Section';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer'
import './css/fonts.css';

function App() {
  return (
    <div>
      <div className="logo_contanier"></div>
      <Header></Header>
      <Section></Section>
      <Portfolio></Portfolio>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;

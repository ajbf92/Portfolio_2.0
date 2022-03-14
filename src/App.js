import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <Nav></Nav>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </div>
  );
}

export default App;

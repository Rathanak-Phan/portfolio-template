import React from 'react';
import './App.css';
import Home from './page/Home';  // ✅ Correct import
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './page/About';  // ✅ Correct import
import Contact from './page/Contact';  // ✅ Correct import
import Footer from './components/Footer';
import SkillsandExpertise from './page/SkillsandExpertise';  // ✅ Correct import
import Porject from './page/Porject';  // ✅ Correct import


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skill" element={<SkillsandExpertise />} />
        <Route path='/project' element={<Porject />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      {/* <About /> */}
      {/* <Home /> */}
      {/* <About /> */}
    </BrowserRouter>
    
  );
}

export default App;

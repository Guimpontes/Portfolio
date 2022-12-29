import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';
import { ThemeProvider } from "styled-components"
import light from './styles/Theme/light';
import dark from './styles/Theme/dark';

import Header from './components/Header';
import Footer from './components/Footer';

import ButtonScrollTop from './components/ButtonScrollTop';

import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';


function App() {
  const [showButtonScroll, setShowButtonScroll] = useState(false);
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || light);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (Math.floor(window.scrollY) > 200) {
        setShowButtonScroll(true)
      } else {
        setShowButtonScroll(false)
      }
    })
  }, [])

  return (

    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <ButtonScrollTop showButtonScroll={showButtonScroll} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    </ThemeProvider>

  );
}

export default App;

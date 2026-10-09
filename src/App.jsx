import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ConteudosPage from './pages/ConteudosPage';
import { useTitleAnimation } from './hooks/useTitleAnimation';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const TitleAnimationObserver = () => {
  useTitleAnimation();
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <TitleAnimationObserver />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/conteudos" element={<ConteudosPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

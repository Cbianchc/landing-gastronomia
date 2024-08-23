import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import WelcomeSection from './components/WelcomeSection';
import ProductCatalog from './components/ProductCatalog';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Box } from '@mui/material';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Routes>
          <Route path="/" element={<WelcomeSection />} />
          <Route path="/catalogo" element={<ProductCatalog />} />
          <Route path="/contacto" element={<ContactSection />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;
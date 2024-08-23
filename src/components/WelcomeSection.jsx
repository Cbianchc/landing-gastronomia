import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import { Link as ScrollLink } from 'react-scroll'; 

import ProductCatalog from './ProductCatalog';
import ContactSection from './ContactSection';

import RestoImgHero from '../assets/restaurante2.jpg';

const WelcomeSection = () => {
  const fadeStyles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const parallaxStyles = useSpring({
    from: { transform: 'translateY(50px)', opacity: 0 },
    to: { transform: 'translateY(0px)', opacity: 1 },
    config: { tension: 180, friction: 12 },
  });

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          height: { xs: 'auto', md: '100vh' },
          backgroundImage: `url(${RestoImgHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff',
          padding: { xs: '50px 20px', md: '0' },
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Oscurece la imagen de fondo
            zIndex: 1,
          },
        }}
      >
        <animated.div style={{ ...fadeStyles, ...parallaxStyles, zIndex: 2 }}>
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' // Sombra al texto
            }}
          >
            ¡Bienvenidos a Mi Restaurante!
          </Typography>
          <Typography 
            variant="h5" 
            component="p" 
            sx={{ 
              marginTop: '20px',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' // Sombra al texto
            }}
          >
            Descubre nuestros deliciosos platos preparados con amor y pasión.
          </Typography>
          <ScrollLink to="catalogo" smooth duration={800}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                marginTop: '40px',
                padding: '10px 20px',
                fontSize: '16px',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              Ver Menu
            </Button>
          </ScrollLink>
        </animated.div>
      </Box>
      <Box id="catalogo">
        <ProductCatalog />
      </Box>
      <ContactSection />
    </>
  );
};

export default WelcomeSection;


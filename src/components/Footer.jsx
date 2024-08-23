import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '20px',
        marginTop: 'auto', // Esto empuja el footer para abajo
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Mi Restaurante. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;


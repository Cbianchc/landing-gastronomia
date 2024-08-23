import React from 'react';
import { Box, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import { Link as ScrollLink } from 'react-scroll'; 

const ContactSection = () => {
  const ubicacionResto = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26274.43805898423!2d-58.43845120000001!3d-34.5964544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1724367481307!5m2!1ses!2sar";

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
    <Box sx={{ padding: '50px 20px', backgroundColor: '#f9f9f9' }}>

      <animated.div style={{ ...fadeStyles, ...parallaxStyles }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 5 }}>
            ¡Contactanos!
          </Typography>
        </animated.div>
      <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'center' }}>

{/* Sección de Datos de Contacto */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Typography variant="h6" component="h3" sx={{ marginBottom: '20px', textAlign: 'center' }}>
              Datos de Contacto
            </Typography>
            <TextField label="Nombre" variant="outlined" fullWidth sx={{ marginBottom: '20px' }} />
            <TextField label="Correo Electrónico" variant="outlined" fullWidth sx={{ marginBottom: '20px' }} />
            <TextField label="Mensaje" variant="outlined" fullWidth multiline rows={4} sx={{ marginBottom: '20px' }} />
            <Button variant="contained" color="primary">Enviar Mensaje</Button>
          </Paper>
        </Grid>
        
{/* Sección "Dónde Estamos" */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Typography variant="h6" component="h3" sx={{ marginBottom: '20px', textAlign: 'center' }}>
              Dónde Estamos
            </Typography>
            <Box
              sx={{
                height: '300px', 
                width: '100%',
                borderRadius: '10px',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <iframe
                src={ubicacionResto}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Box>
            <Button variant="contained" color="primary">Reservar</Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;


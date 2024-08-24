import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardMedia, CardContent, Typography, Box, Chip } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';

import fallbackData from '../data/fallbackData.json';

const ProductCatalog = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true); 

  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.spoonacular.com/recipes/random', {
          params: {
            number: 10,
            apiKey: import.meta.env.VITE_API_KEY
          }
        });
        setProductos(response.data.recipes);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        // Usa los datos de respaldo cuando se terminan los request gratis de la api.
        setProductos(fallbackData);
      } finally {
        setLoading(false); 
      }
    };
    
    fetchData();
    console.log(productos)
  }, []);

  return (
    <Box sx={{ padding: '50px 20px' }}>
      <animated.div style={styles}>
        <Typography variant="h4" component="h2" sx={{ marginBottom: '30px', textAlign: 'center' }}>
          Nuestro Catálogo de Productos
        </Typography>
      </animated.div>
      {loading ? (
        <Typography variant="h6" component="p" sx={{ textAlign: 'center' }}>
          Cargando productos...
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {productos.map(product => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  transition: 'transform 0.2s', 
                  '&:hover': { transform: 'scale(1.05)' } 
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent 
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start'
                  }}
                >
                  <Typography 
                    variant="body" 
                    component="h3"
                    sx={{
                      height: '48px', 
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {product.title}
                  </Typography>

                  <Box sx={{ marginTop: '10px' }}>
                    {product.vegan && <Chip label="Vegan" color="primary" sx={{ marginRight: '5px' }} />}
                    {product.vegetarian && <Chip label="Vegetarian" color="success" />}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default ProductCatalog;

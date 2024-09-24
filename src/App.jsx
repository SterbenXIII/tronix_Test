import React, { useEffect, useState } from 'react';
import { Container, Grid2, Box, CircularProgress } from '@mui/material';
import Header from './components/Header';
import ServiceCard from './components/ServiceCard';
import { fetchServices } from './api/api';

function App() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getServices = async () => {
      try {
        const data = await fetchServices();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    getServices();
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingTop: '20px',
        backgroundColor: '#1c1b22',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <Header />

      {loading && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            zIndex: 1000,
          }}
        >
          <CircularProgress sx={{ color: '#fff' }} />
        </Box>
      )}

      <Box
        sx={{
          maxHeight: '700px',
          overflowY: 'auto',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Grid2 container spacing={4} justifyContent="center">
          {services.map(({ name, price, id }) => (
            <Grid2 xs={12} sm={6} md={4} key={id}>
              <ServiceCard name={name} price={price} />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Container>
  );
}

export default App;

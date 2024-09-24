import React, { useEffect, useState } from 'react';
import {
  Container,
  Grid2,
  Box,
  CircularProgress,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import Header from './components/Header';
import ServiceCard from './components/ServiceCard';
import { fetchServices } from './api/api';

function App() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [expandedId, setExpandedId] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetchServices();
      setServices(data);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getServices = async () => {
      await fetchData();
    };

    getServices();
  }, []);

  const filteredServices = services.filter((service) =>
    selectedCategory ? service.category === selectedCategory : true
  );

  const sortedServices = filteredServices.sort((a, b) => {
    const priceA = parseInt(a.price.replace(/\s+/g, '').replace('грн', ''));
    const priceB = parseInt(b.price.replace(/\s+/g, '').replace('грн', ''));

    if (sortOrder === 'asc') {
      return priceA - priceB;
    } else {
      return priceB - priceA;
    }
  });

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
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
          }}
        >
          <CircularProgress sx={{ color: '#fff' }} />
        </Box>
      )}

      <Box
        sx={{
          marginBottom: '20px',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <FormControl variant="outlined" sx={{ minWidth: 120 }}>
          <InputLabel>Категорія</InputLabel>
          <Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            label="Категорія"
          >
            <MenuItem value="">
              <em>Всі</em>
            </MenuItem>
            <MenuItem value="Фотографія">Фотографія</MenuItem>
            <MenuItem value="Відео">Відео</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" sx={{ minWidth: 120 }}>
          <InputLabel>Сортування</InputLabel>
          <Select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            label="Сортування"
          >
            <MenuItem value="asc">Від меншої до більшої</MenuItem>
            <MenuItem value="desc">Від більшої до меншої</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{
          maxHeight: '600px',
          overflowY: 'auto',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Grid2 container spacing={4} justifyContent="center">
          {sortedServices.map(({ id, name, description, price }) => (
            <Grid2 xs={12} sm={6} md={4} key={id}>
              <ServiceCard
                name={name}
                description={description}
                price={price}
                isExpanded={expandedId === id}
                onClick={() => setExpandedId(expandedId === id ? null : id)}
              />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Container>
  );
}

export default App;

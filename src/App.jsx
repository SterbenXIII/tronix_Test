import React, { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import Header from './components/Header';
import LoadingOverlay from './components/LoadingOverlay';
import FilterControls from './components/FilterControls';
import Search from './components/Search';
import ServiceList from './components/ServiceList';
import { fetchServices } from './api/api';

function App() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [expandedId, setExpandedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

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
    fetchData();
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : 'auto';
  }, [loading]);

  const filteredServices = services
    .filter((service) =>
      selectedCategory ? service.category === selectedCategory : true
    )
    .filter((service) =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const sortedServices = filteredServices.sort((a, b) => {
    const priceA = a.price.amount;
    const priceB = b.price.amount;

    return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
  });

  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingTop: '20px',
        backgroundColor: '#121626',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <Header />

      <LoadingOverlay loading={loading} />
      <FilterControls
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      >
        <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </FilterControls>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          marginBottom: '20px',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: '#fff',
            fontSize: { xs: '1rem', md: '1.5rem', lg: '1.75rem' },
          }}
        >
          {filteredServices.length}{' '}
          {filteredServices.length === 1 ? 'item' : 'items'} found
        </Typography>
      </Box>

      <Box
        sx={{
          maxHeight: '600px',
          overflowY: 'auto',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {sortedServices.length === 0 ? (
          <Typography variant="h6" sx={{ color: '#fff', minHeight: '600px' }}>
            Not Found
          </Typography>
        ) : (
          <ServiceList
            services={sortedServices}
            expandedId={expandedId}
            setExpandedId={setExpandedId}
          />
        )}
      </Box>
    </Container>
  );
}

export default App;

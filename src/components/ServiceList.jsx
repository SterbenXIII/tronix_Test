import React from 'react';
import { Grid2 } from '@mui/material';
import ServiceCard from './ServiceCard';

const ServiceList = ({ services, expandedId, setExpandedId }) => {
  return (
    <Grid2
      container
      spacing={4}
      justifyContent="center"
      sx={{ overflowY: 'auto', maxHeight: '600px' }} 
    >
      {services.map(({ id, name, description, price }) => (
        <Grid2 item xs={12} sm={6} md={4} key={id}>
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
  );
};

export default ServiceList;

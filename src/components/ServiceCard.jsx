import React from 'react';
import { Card, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

const ServiceCard = ({ name, price }) => {
  return (
    <Card
      sx={{
        backgroundColor: '#282636',
        color: '#fff',
        padding: '20px',
        height: '200px',
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', 
        alignItems: 'center',
        overflow: 'auto', 
      }}
    >
      <Typography
        variant="h6"
        sx={{ textAlign: 'center', marginBottom: '10px' }}
      >
        {name}
      </Typography>
      <Typography
        variant="h6"
        sx={{ color: deepOrange[400], fontWeight: 'bold', textAlign: 'center' }}
      >
        Ціна від {price}
      </Typography>
    </Card>
  );
};

export default ServiceCard;

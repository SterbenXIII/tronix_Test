import React from 'react';
import { Card, Typography, Collapse } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

const ServiceCard = ({ name, description, price, isExpanded, onClick }) => {
  const formattedPrice = `${price.symbol} ${price.amount}`;

  return (
    <Card
      onClick={onClick}
      sx={{
        backgroundColor: '#242C48',
        color: '#fff',
        padding: '20px',
        height: isExpanded ? 'auto' : '200px',
        minHeight: '200px',
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
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
        Price from {formattedPrice}
      </Typography>

      <Collapse in={isExpanded}>
        <Typography
          variant="body2"
          sx={{ marginTop: '10px', textAlign: 'center' }}
        >
          {description}
        </Typography>
      </Collapse>
    </Card>
  );
};

export default ServiceCard;

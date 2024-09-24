import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: '#121626', margin: '20px' }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Price list of our services
        </Typography>
      </Toolbar>
      <Typography
        variant="body1"
        sx={{
          padding: 2,
          textAlign: 'left',
          color: 'white',
          maxWidth: '600px',
        }}
      >
        We specialize in creating and implementing innovative digital solutions
        for your business. Our team of professionals helps companies of all
        sizes streamline processes, improve customer interactions, and expand
        opportunities with modern technology.
      </Typography>
    </AppBar>
  );
};

export default Header;

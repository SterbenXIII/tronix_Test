import React from 'react';
import { Box, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        marginBottom: '30px',
        color: '#fff',
      }}
    >
      <Typography variant="h3" gutterBottom>
        Ми займаємось розробкою наступних сайтів
      </Typography>
    </Box>
  );
};

export default Header;
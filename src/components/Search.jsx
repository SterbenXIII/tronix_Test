import React from 'react';
import { TextField } from '@mui/material';

const Search = ({ searchTerm, onSearchChange }) => {
  return (
    <TextField
      variant="outlined"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      sx={{ marginX: 2, width: '200px' }}
    />
  );
};

export default Search;

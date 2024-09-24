import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const FilterControls = ({
  selectedCategory,
  setSelectedCategory,
  sortOrder,
  setSortOrder,
  children,
}) => {
  return (
    <Box
      sx={{
        marginBottom: '20px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel>Category</InputLabel>
        <Select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          label="Category"
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value="Photography">Photography</MenuItem>
          <MenuItem value="Video">Video</MenuItem>
        </Select>
      </FormControl>

      {children}

      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel>Sorting</InputLabel>
        <Select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          label="Sorting"
        >
          <MenuItem value="asc">From Lowest to Highest</MenuItem>
          <MenuItem value="desc">From Highest to Lowest</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterControls;

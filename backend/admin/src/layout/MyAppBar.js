import * as React from 'react';
import { AppBar } from 'react-admin';
import { Box, Typography } from '@mui/material';

const MyAppBar = (props) => (
  <AppBar {...props} color="default">
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Box sx={{ width: 28, height: 28, borderRadius: 2, bgcolor: 'primary.main' }} />
      <Typography variant="h6">Ebook Admin</Typography>
    </Box>
    <Box flex={1} />
  </AppBar>
);

export default MyAppBar;



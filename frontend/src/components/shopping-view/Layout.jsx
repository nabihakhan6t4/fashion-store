import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Box } from '@mui/material';

const Layout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        overflow: 'hidden',
      }}
    >
      {/* Common Header */}
      <Header />

      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <Outlet />
      </main>
    </Box>
  );
};

export default Layout;

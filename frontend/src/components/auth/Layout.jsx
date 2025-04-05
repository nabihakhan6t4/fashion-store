

import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      {/* Left Side */}
      <Box
        sx={{
          display: { xs: 'none', lg: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
          width: '50%',
          paddingX: '12px',
        }}
      >
        <Box
          sx={{
            maxWidth: 'md',
            textAlign: 'center',
            color: 'text.primary',
            paddingY: 6,
          }}
        >
          <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
            Welcome to E-commerce shopping
          </Typography>
        </Box>
      </Box>

      {/* Right Side */}
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'background.default',
          paddingX: { xs: '16px', sm: '24px', lg: '32px' },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;



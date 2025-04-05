import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {/* Admin Sidebar */}
      <Sidebar />
      {/* Admin Header */}
      <Header />
      <main
        style={{
          flex: 1,
          display: "flex",
          backgroundColor: "rgba(169, 169, 169, 0.4)",
          padding: "16px",

          "@media (min-width: 768px)": {
            padding: "24px",
          },
        }}
      >
        <Outlet />
      </main>
    </Box>
  );
};

export default Layout;

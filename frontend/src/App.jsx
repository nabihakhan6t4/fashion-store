import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/auth/Layout";
import { Box } from "@mui/material";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import AdminLayout from "./components/admin-view/Layout";
import Dashboard from "./pages/admin-view/Dashboard";
import Products from "./pages/admin-view/Products";
import Orders from "./pages/admin-view/Orders";
import Features from "./pages/admin-view/Features";
import ShoppingLayout from "./components/shopping-view/Layout";
import PageNotFound from "./pages/not-found/Index";
import Home from "./pages/shopping-view/Home";
import Listing from "./pages/shopping-view/Listing";
import Checkout from "./pages/shopping-view/Checkout";
import Account from "./pages/shopping-view/Account";
import CheckAuth from "./components/common/CheckAuth";
import UnAuthPage from "./pages/unauth-page/Index";
function App() {
const isAuthenticated = true
 const user = {
  name : 'nabiha',
  role :'admin'
 }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        backgroundColor: "white",
      }}
    >
      <Routes>
        {/* Parent route with Layout as a wrapper */}
        <Route path="/auth" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <Layout/>
          </CheckAuth>
        }>
          <Route path="login" element={<Login />} />{" "}
          {/* Child route for login */}
          <Route path="register" element={<Register />} />{" "}
          {/* Child route for register */}
        </Route>
        <Route path="/admin" element={ 
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <AdminLayout/>
        </CheckAuth>
        }>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="features" element={<Features />} />
        </Route>
        <Route path="/shop" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <ShoppingLayout/>
        </CheckAuth>
        }>
          <Route path="home" element={<Home />} />
          <Route path="listing" element={<Listing />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="account" element={<Account />} />
        </Route>
     
        <Route path="/unauth-page" element={<UnAuthPage />} />
        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </Box>
  );
}

export default App;

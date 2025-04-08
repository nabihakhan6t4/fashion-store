import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Typography, Box, Button, Snackbar } from "@mui/material";
import Form from "../../components/common/Form";
import { loginFormControls } from "../../config"; // Ensure this is imported correctly
import { login } from "../../store/auth-slice";
import { useDispatch } from "react-redux";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData))
      .then((data) => {
        if (data?.payload?.success) {
          setSnackbarMessage("Login successful! Redirecting...");

          setOpenSnackbar(true);
          setTimeout(() => {
            navigate("/shop/home"); 
          }, 2000);
        } else {
          const errorMessage =
            data?.payload?.message || "Login failed! Please try again.";
          setSnackbarMessage(errorMessage);

          setOpenSnackbar(true);
        }
        console.log(data);
      })
      .catch((error) => {
        setSnackbarMessage("Something went wrong. Please try again.");
        setOpenSnackbar(true);
        console.error(error);
      });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4, textAlign: "center" }}>
      <Typography
        variant="h4"
        component="h1"
        fontWeight="bold"
        color="text.primary"
      >
        Login to Your Account
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        Don't have an account?
        <Button
          component={Link}
          to="/auth/register"
          variant="text"
          sx={{ textTransform: "none", ml: 1 }}
        >
          Sign Up
        </Button>
      </Typography>
      <Form
        formControls={loginFormControls}
        buttonText="Login"
        formData={formData}
        setFormData={setFormData}
        handleSubmit={onSubmit}
      />
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      />
    </Box>
  );
};

export default Login;

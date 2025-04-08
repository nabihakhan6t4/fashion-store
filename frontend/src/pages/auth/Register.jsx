import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Typography, Box, Button, Snackbar } from "@mui/material";
import Form from "../../components/common/Form";
import { registerFormControls } from "../../config";
import { useDispatch } from "react-redux";
import { register } from "../../store/auth-slice";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData))
      .then((data) => {
        if (data?.payload?.success) {
          setSnackbarMessage(
            "Registration successful! Redirecting to login..."
          );

          setOpenSnackbar(true);
          setTimeout(() => {
            navigate("/auth/login");
          }, 2000);
        } else {
          const errorMessage =
            data?.payload?.message || "Registration failed! Please try again.";
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
        Create a New Account
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        Already have an account?
        <Button
          component={Link}
          to="/auth/login"
          variant="text"
          sx={{ textTransform: "none", ml: 1 }}
        >
          Login
        </Button>
      </Typography>
      <Form
        formControls={registerFormControls}
        buttonText="Sign Up"
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

export default Register;

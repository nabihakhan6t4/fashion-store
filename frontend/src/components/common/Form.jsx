import React from "react";
import { TextField, Button, Box, Typography, Select, MenuItem } from "@mui/material";

const Form = ({ formControls, formData, setFormData, handleSubmit, title }) => {
  const renderInputByComponentType = (getControlItem) => {
    let element = null;

    switch (getControlItem.componentType) {
      case "input":
        element = (
          <TextField
            fullWidth
            margin="normal"
            label={getControlItem.label}
            placeholder={getControlItem.placeholder}
            type={getControlItem.type}
            name={getControlItem.name}
            value={formData[getControlItem.name] || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                [getControlItem.name]: e.target.value,
              })
            }
          />
        );
        break;

      case "textarea":
        element = (
          <TextField
            fullWidth
            margin="normal"
            label={getControlItem.label}
            placeholder={getControlItem.placeholder}
            name={getControlItem.name}
            multiline
            rows={4}
            value={formData[getControlItem.name] || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                [getControlItem.name]: e.target.value,
              })
            }
          />
        );
        break;

      case "select":
        element = (
          <Select
            fullWidth
            displayEmpty
            name={getControlItem.name}
            value={formData[getControlItem.name] || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                [getControlItem.name]: e.target.value,
              })
            }
          >
            <MenuItem value="" disabled>
              {getControlItem.placeholder}
            </MenuItem>
            {getControlItem.options?.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        );
        break;

      default:
        element = <div>Invalid Component Type</div>;
        break;
    }

    return element;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          maxWidth: 400,
          mx: "auto",
          mt: 4,
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" align="center" mb={2}>
          {title}
        </Typography>

        {/* Dynamically rendering form controls */}
        {formControls.map((control) => (
          <div key={control.name}>{renderInputByComponentType(control)}</div>
        ))}

        {/* Submit Button */}
        <Button
          type="submit"  // Important to set type as submit for form submission
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default Form;

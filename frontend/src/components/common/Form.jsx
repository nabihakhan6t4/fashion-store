import React from 'react'
import { TextField, Button, Box, Typography } from '@mui/material'

const Form = ({ formControls, formData, setFormData, handleSubmit, title }) => {
  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: 'auto',
        mt: 4,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" align="center" mb={2}>
        {title}
      </Typography>

      {formControls.map((control) => (
        <TextField
          key={control.name}
          label={control.label}
          placeholder={control.placeholder}
          type={control.type}
          fullWidth
          margin="normal"
          value={formData[control.name] || ''}
          onChange={(e) =>
            setFormData({ ...formData, [control.name]: e.target.value })
          }
        />
      ))}

      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit}
        sx={{ mt: 2 }}
      >
        Submit
      </Button>
    </Box>
  )
}

export default Form

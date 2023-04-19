import {
  Box,
  Button,
  Card,
  Container,
  FormGroup,
  TextField,
  useTheme,
} from '@mui/material'
import { Formik, useFormik } from 'formik'
import React from 'react'
import yup from 'yup'
const PurchaseForm = () => {
  // const validationSchema = yup.object({
  //   email: yup
  //     .string()
  //     .email('Enter a valid email')
  //     .required('Email is required'),
  //   password: yup
  //     .string()
  //     .min(8, 'Password should be of minimum 8 characters length')
  //     .required('Password is required'),
  // })

  const theme = useTheme()

  return (
    <Card sx={{ p: 2, height: '100%' }}>
      <Box
        id="form-info"
        method="POST"
        component="form"
        sx={{
          '& .MuiTextField-root': { p: 1 },
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
        action="https://formpost.app/devonbcoates@gmail.com"
      >
        <TextField
          variant="standard"
          size="small"
          fullWidth
          type="firstName"
          name="First Name"
          // onChange={handleChange}
          // onBlur={handleBlur}
          // value={values.firstName}
          label={'First Name'}
        />
        <TextField
          variant="standard"
          size="small"
          fullWidth
          type="lastName"
          name="Last Name"
          // onChange={handleChange}
          // onBlur={handleBlur}
          // value={values.lastName}
          label={'Last Name'}
        />
        <TextField
          variant="standard"
          size="small"
          fullWidth
          type="email"
          name="Email"
          label="Email"
          // onChange={handleChange}
          // onBlur={handleBlur}
          // value={values.email}
        />
        <TextField
          variant="standard"
          size="small"
          fullWidth
          type="number"
          name="Phone"
          label="Phone"
          // onChange={handleChange}
          // onBlur={handleBlur}
          // value={values.password}
        />

        <Box>
          {/* <TextField
              variant="standard"
              size='small'
            fullWidth
              type="street"
              name="street"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.street}
              label={'First Name'}
            /> */}
          <TextField
            variant="standard"
            size="small"
            fullWidth
            name="City"
            // onChange={handleChange}
            // onBlur={handleBlur}
            // value={values.city}
            label={'City'}
          />
          <TextField
            variant="standard"
            size="small"
            fullWidth
            name="Province"
            label="Province"
            // onChange={handleChange}
            // onBlur={handleBlur}
            // value={values.province}
          />

          {/* <TextField
              variant="standard"
              size='small'
            fullWidth
              type="number"
              name="phone"
              label="Phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            /> */}
          <TextField
            variant="standard"
            size="small"
            type="text"
            fullWidth
            multiline
            rows={2}
            name="Questions"
            label="Questions?"
            // onBlur={handleBlur}
            // value={values.questions}
          />
          <TextField
            variant="standard"
            size="small"
            type="text"
            fullWidth
            multiline
            rows={4}
            name="About"
            label="About you and your home"
            // onBlur={handleBlur}
            // value={values.about}
          />
        </Box>

        <input
          type="hidden"
          name="fp_subject"
          value="New Submission for a Kitten"
        ></input>
        <input type="hidden" name="fp_reply" value="true"></input>

        <input
          type="hidden"
          name="fp_reply_from"
          value="Azure sky ragdolls"
        ></input>
        <input
          type="hidden"
          name="fp_reply_message"
          value="Thank you for contacting us! We will be in touch with you soon."
        ></input>

        <Button
          type="submit"
          variant="contained"
          // disabled={isSubmitting}
          sx={{ color: '#fff', gridColumn: 'span 2', width: '100%', mt: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Card>
  )
}

export default PurchaseForm

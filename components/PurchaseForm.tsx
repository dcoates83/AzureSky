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
import * as Yup from 'yup'
const PurchaseForm = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Enter a valid email')
      .required('Email is required'),
    firstName: Yup.string().required('First Name is required'),
  })

  const theme = useTheme()
  const formik = useFormik({
    validateOnBlur: true,
    // validateOnChange: true,
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      street: '',
      city: '',
      province: '',
      questions: '',
      about: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  })
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
        // action="https://formpost.app/devonbcoates@gmail.com"
      >
        <TextField
          error={Boolean(formik.errors.firstName)}
          helperText={formik.errors.firstName}
          variant="standard"
          size="small"
          fullWidth
          name="First Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          label={'First Name'}
        />
        <TextField
          error={Boolean(formik.errors.lastName)}
          helperText={formik.errors.lastName}
          variant="standard"
          size="small"
          fullWidth
          type="lastName"
          name="Last Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          label={'Last Name'}
        />
        <TextField
          error={Boolean(formik.errors.email)}
          helperText={formik.errors.email}
          variant="standard"
          size="small"
          fullWidth
          type="email"
          name="Email"
          label="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <TextField
          error={Boolean(formik.errors.phone)}
          helperText={formik.errors.phone}
          variant="standard"
          size="small"
          fullWidth
          type="number"
          name="Phone"
          label="Phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />

        <Box>
          {/* <TextField
          error={Boolean(formik.errors.)}
          helperText={formik.errors.}
              variant="standard"
              size='small'
            fullWidth
              type="street"
              name="street"
              onChange={handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.street}
              label={'First Name'}
            /> */}
          <TextField
            error={Boolean(formik.errors.city)}
            helperText={formik.errors.city}
            variant="standard"
            size="small"
            fullWidth
            name="City"
            // onChange={handleChange}
            // onBlur={formik.handleBlur}
            value={formik.values.city}
            label={'City'}
          />
          <TextField
            error={Boolean(formik.errors.province)}
            helperText={formik.errors.province}
            variant="standard"
            size="small"
            fullWidth
            name="Province"
            label="Province"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.province}
          />

          {/* <TextField
          error={Boolean(formik.errors.)}
          helperText={formik.errors.}
              variant="standard"
              size='small'
            fullWidth
              type="number"
              name="phone"
              label="Phone"
              onChange={handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            /> */}
          <TextField
            error={Boolean(formik.errors.questions)}
            helperText={formik.errors.questions}
            variant="standard"
            size="small"
            type="text"
            fullWidth
            multiline
            rows={2}
            name="Questions"
            label="Questions?"
            onBlur={formik.handleBlur}
            value={formik.values.questions}
          />
          <TextField
            error={Boolean(formik.errors.about)}
            helperText={formik.errors.about}
            variant="standard"
            size="small"
            type="text"
            fullWidth
            multiline
            rows={4}
            name="About"
            label="About you and your home"
            onBlur={formik.handleBlur}
            value={formik.values.about}
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
          disabled={!formik.isValid}
          onClick={() => {
            formik.validateForm().then(() => formik.submitForm())
          }}
          sx={{ color: '#fff', gridColumn: 'span 2', width: '100%', mt: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Card>
  )
}

export default PurchaseForm

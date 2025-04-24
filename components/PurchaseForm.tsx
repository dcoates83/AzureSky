import { Box, Button, Card, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'

import * as Yup from 'yup'
const PurchaseForm = () => {
    
  const urlRegex = /https?:\/\/[^\s]+|www\.[^\s]+/i;
  const noLinks = (field: string) =>
    Yup.string()
      .test(
        'no-links',
        `${field} must not contain links`,
        value => !value || !urlRegex.test(value)
      )
      .required(`${field} is required`);

  
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Enter a valid email')
      .required('Email is required'),
    firstName: noLinks('First Name'),
    lastName: noLinks('Last Name'),
    phone: Yup.string()
      .matches(
        /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/,
        'Enter a valid phone number'
      )
      .required('Phone is required'),
    city: noLinks('City'),
    about: noLinks('About'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      street: '',
      city: '',
      about: '',
      _honey: undefined,
    },
    validationSchema: validationSchema,
    validateOnBlur: true,
  
    onSubmit: async (values) => {
  

    },
  })


  return (
    <Card sx={{ p: 2, mt: 1, height: '100%', position: 'relative' }}>
      <Box
        method="POST"
        component="form"
        sx={{
          '& .MuiTextField-root': { p: 1 },
          height: '100%',
          width: '85%',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          pb: 2,
        }}
        // action="https://formsubmit.co/devonbcoates@gmail.com"
        action="https://formsubmit.co/bmjbiz@icloud.com"
        // action="https://formsubmit.co/Meg@azureskyragdolls.com"
        // action="https://formsubmit.co/Meg@azureskyragdolls.com"
      >
        <input
          type="hidden"
          name="_autoresponse"
          value="Thanks! We will be in touch shortly"
        ></input>
        <input
          type="hidden"
          name="_next"
          value="https://www.azureskyragdolls.com/Purchasing#purchasing-form"
        ></input>
        <input type="hidden" name="_cc" 
        value="devonbcoates@gmail.com"
        // value="devonbcoates@gmail.com,bmjbiz@icloud.com"
        >
        </input>
        <input type="hidden" name="_template" value="table"></input>
        <input type="hidden" name="_subject" value={`New submission from ${formik.values.firstName} ${formik.values.lastName}!`}></input>
        <TextField type="text" name="_honey" 
        sx={{display:'none'}}
        ></TextField>
        <TextField
          error={Boolean(formik.errors.firstName)}
          helperText={formik.errors.firstName}
          variant="filled"
          size="small"
          fullWidth
          name="firstName"
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          label={'First Name'}
        />
        <TextField
          error={Boolean(formik.errors.lastName)}
          helperText={formik.errors.lastName}
          variant="filled"
          size="small"
          fullWidth
          type="text"
          name="lastName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          label={'Last Name'}
        />
        <TextField
          error={Boolean(formik.errors.email)}
          helperText={formik.errors.email}
          variant="filled"
          size="small"
          fullWidth
          type="email"
          name="email"
          label="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <TextField
          error={Boolean(formik.errors.phone)}
          helperText={formik.errors.phone}
          variant="filled"
          size="small"
          fullWidth
          type="tel"
          name="phone"
          label="Phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        <Box>
          <TextField
            error={Boolean(formik.errors.city)}
            helperText={formik.errors.city}
            variant="filled"
            size="small"
            fullWidth
            name="city"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
            label={'City'}
          />
          <TextField
            error={Boolean(formik.errors.about)}
            helperText={formik.errors.about}
            variant="filled"
            size="small"
            type="text"
            fullWidth
            multiline
            rows={4}
            name="about"
            label="About"
            placeholder="Tell us about yourself and why you want a kitten. Include any other information you think is important."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.about}
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          disabled={!formik.isValid || formik.isSubmitting}
          sx={{ color: '#fff', gridColumn: 'span 2', width: '100%', mt: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Card>
  )
}

export default PurchaseForm

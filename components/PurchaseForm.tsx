import {
  Box,
  Button,
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

  // const WithMaterialUI = () => {
  //   const formik = useFormik({
  //     initialValues: {
  //       email: 'foobar@example.com',
  //       password: 'foobar',
  //     },
  //     validationSchema: validationSchema ?? undefined,
  //     onSubmit: (values) => {
  //       alert(JSON.stringify(values, null, 2))
  //     },
  //   })
  const theme = useTheme()
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phone: '',
        street: '',
        city: '',
        province: '',
        about: '',
      }}
      // validate={}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      {({
        values,
        errors,

        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <Container maxWidth="sm" sx={{ mt: 5 }} disableGutters>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { p: 1 },
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridAutoFlow: 'row',
              // gridGap: '1rem',
              [theme.breakpoints.down('sm')]: {
                // gridAutoFlow: 'row',
                display: 'flex',
                flexDirection: 'column',
              },
            }}
            action="https://submit-form.com/AqUcFuf1"
          >
            <FormGroup>
              <TextField
                fullWidth
                type="firstName"
                name="First Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                label={'First Name'}
              />
              <TextField
                fullWidth
                type="lastName"
                name="Last Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                label={'Last Name'}
              />
              <TextField
                fullWidth
                type="email"
                name="Email"
                label="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />

              <TextField
                fullWidth
                type="number"
                name="Phone"
                label="Phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </FormGroup>
            <Box>
              {/* <TextField
            fullWidth
              type="street"
              name="street"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.street}
              label={'First Name'}
            /> */}
              <TextField
                fullWidth
                name="City"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
                label={'City'}
              />
              <TextField
                fullWidth
                name="Province"
                label="Province"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.province}
              />

              {/* <TextField
            fullWidth
              type="number"
              name="phone"
              label="Phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            /> */}
              <TextField
                type="text"
                fullWidth
                multiline
                rows={4}
                name="About"
                label="About you and your home"
                // placeholder="-What occupations do your household members hold?
                // &#10;
                // -Tell us about any children, and what ages they are?
                // &#10;
                // -Any other pets in your home?
                // &#10;
                // -Have you owned a cat/Ragdoll/purebred cat or pets before?
                // &#10;
                // -Who is the kitten for?
                // &#10;
                // -Who will be responsible for caring for the kitten?"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.about}
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              sx={{ color: '#fff', gridColumn: 'span 2' }}
            >
              Submit
            </Button>
          </Box>
        </Container>
      )}
    </Formik>
  )
}

export default PurchaseForm

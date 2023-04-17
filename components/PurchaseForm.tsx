import { TextField } from '@mui/material'
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
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
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
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <TextField
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <TextField
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  )
}

export default PurchaseForm

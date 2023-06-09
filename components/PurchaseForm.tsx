import { Box, Button, Card, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React, { useCallback, useState } from 'react'
import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from 'react-google-recaptcha-v3'
import * as Yup from 'yup'
const PurchaseForm = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Enter a valid email')
      .required('Email is required'),
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    phone: Yup.string().required('Phone is required'),
    // street: Yup.string().required('Street is required'),
    city: Yup.string().required('City is required'),
    province: Yup.string().required('Province is required'),
    questions: Yup.string(),
    about: Yup.string().required('About is required'),
  })

  const formik = useFormik({
    validateOnBlur: true,
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
    onSubmit: async (values) => {},
  })
  const [token, setToken] = useState()
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false)

  const onVerify = useCallback((token) => {
    setToken(token)
  }, [])
  // https://www.google.com/recaptcha/admin/site/643041816
  // https://www.npmjs.com/package/react-google-recaptcha-v3
  // 6LcYClQmAAAAALgDzpRvDvpY97NlPb17de-4aFhT
  // 6LdVlGUmAAAAACG3zAUE4o1HqP9-11z9dbUAidxN - vercel
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LdVlGUmAAAAACG3zAUE4o1HqP9-11z9dbUAidxN">
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
          action="https://formpost.app/azureskyragdolls@gmail.com"
        >
          <TextField
            error={Boolean(formik.errors.firstName)}
            helperText={formik.errors.firstName}
            variant="standard"
            size="small"
            fullWidth
            name="firstName"
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
            name="lastName"
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
            name="email"
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
              variant="standard"
              size="small"
              fullWidth
              name="city"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
              label={'City'}
            />
            <TextField
              error={Boolean(formik.errors.province)}
              helperText={formik.errors.province}
              variant="standard"
              size="small"
              fullWidth
              name="province"
              label="Province"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.province}
            />

            <TextField
              error={Boolean(formik.errors.questions)}
              helperText={formik.errors.questions}
              variant="standard"
              size="small"
              type="text"
              fullWidth
              multiline
              rows={2}
              name="questions"
              label="Questions?"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
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
              name="about"
              label="About you and your home"
              onChange={formik.handleChange}
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
            value="Azure Sky Ragdolls"
          ></input>
          <input
            type="hidden"
            name="fp_reply_message"
            value="Thank you for contacting us! We will be in touch with you soon. If you have any questions, please feel free to email us at azureskyragdolls@gmail.com"
          ></input>
          <GoogleReCaptcha
            onVerify={onVerify}
            refreshReCaptcha={refreshReCaptcha}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={!formik.isValid}
            onClick={() => {
              setRefreshReCaptcha((r) => !r)
            }}
            sx={{ color: '#fff', gridColumn: 'span 2', width: '100%', mt: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Card>
    </GoogleReCaptchaProvider>
  )
}

export default PurchaseForm

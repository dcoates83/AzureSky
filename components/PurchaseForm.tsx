import {
  Box,
  Button,
  Card,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'

import * as Yup from 'yup'
const JOTFORM_FORM_ID = '253177374686066'
const JOTFORM_SRC = `https://form.jotform.com/${JOTFORM_FORM_ID}?isIframeEmbed=1`
const PurchaseForm = () => {
  const [isReadyDialogOpen, setIsReadyDialogOpen] = React.useState(false)
  const [shouldLoadJotform, setShouldLoadJotform] = React.useState(false)
  const urlRegex = /https?:\/\/[^\s]+|www\.[^\s]+/i
  const noLinks = (field: string) =>
    Yup.string()
      .test(
        'no-links',
        `${field} must not contain links`,
        (value) => !value || !urlRegex.test(value)
      )
      .required(`${field} is required`)

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
  })

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      street: '',
      city: '',
      about: '',
      interested_In_Kitten_Or_OlderCat: null,
      add_Me_To_The_Wait_List: null,
      _honey: undefined,
    },
    validationSchema: validationSchema,
    validateOnBlur: true,

    onSubmit: async (values) => {},
  })

  const handleReadyToAdoptClick = () => {
    setShouldLoadJotform(true)
    setIsReadyDialogOpen(true)
  }

  const handleContactFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const nativeEvent = event.nativeEvent as SubmitEvent
    console.log(nativeEvent)
    if (!nativeEvent.isTrusted) {
      event.preventDefault()
      event.stopPropagation()
      return
    }

    formik.submitForm()
  }

  return (
    <Card sx={{ p: 2, mt: 1, height: '100%', position: 'relative' }}>
      <Box
        sx={{
          mb: 3,
          p: 2,
          borderRadius: 2,
          backgroundColor: 'rgba(34, 197, 94, 0.08)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
          Ready to adopt now?
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          If you are hoping to adopt right away, please click the button below
          and fill out the following form!
        </Typography>
        <Button
          variant="contained"
          color="success"
          onClick={handleReadyToAdoptClick}
          sx={{ maxWidth: 225 }}
        >
          I&apos;m ready to adopt now
        </Button>
      </Box>
      <Box
        method="POST"
        component="form"
        noValidate
        onSubmit={handleContactFormSubmit}
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
        // action="https://formsubmit.co/bmjbiz@icloud.com"
        action="https://formsubmit.co/Meg@azureskyragdolls.com"
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
        <input
          type="hidden"
          name="_cc"
          value="devonbcoates@gmail.com"
          // value="devonbcoates@gmail.com,bmjbiz@icloud.com"
        ></input>
        <input type="hidden" name="_template" value="table"></input>
        <input
          type="hidden"
          name="_subject"
          value={`New submission from ${formik.values.firstName} ${formik.values.lastName}!`}
        ></input>
        <TextField
          type="text"
          name="_honey"
          sx={{ display: 'none' }}
        ></TextField>
        <TextField
          error={Boolean(formik.errors.firstName)}
          helperText={formik.errors.firstName}
          variant="filled"
          size="small"
          fullWidth
          name="firstName"
          type="text"
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
        <FormControlLabel
          name="add_Me_To_The_Wait_List"
          control={<Checkbox />}
          label="Please contact me to be added to the wait list for upcoming litters"
        />
        <FormControlLabel
          name="interested_In_Kitten_Or_OlderCat"
          control={<Checkbox />}
          label="I am interested in an older kitten or retired breeder."
        />

        <Button
          type="submit"
          variant="contained"
          disabled={!formik.isValid || formik.isSubmitting}
          sx={{
            color: '#fff',
            gridColumn: 'span 2',
            width: '100%',
            maxWidth: 225,
            margin: '0 auto',
          }}
        >
          Submit
        </Button>
      </Box>
      <Dialog
        open={isReadyDialogOpen}
        onClose={() => setIsReadyDialogOpen(false)}
        aria-labelledby="ready-to-adopt-dialog-title"
        fullWidth
        fullScreen
        maxWidth="md"
      >
        <DialogActions>
          <Button onClick={() => setIsReadyDialogOpen(false)}>Close</Button>
        </DialogActions>
        <DialogContent sx={{ p: 0, overflow: 'hidden' }}>
          <Box
            sx={{
              width: '100%',
              minHeight: { xs: 560, md: 900 },
              height: '100%',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {shouldLoadJotform ? (
              <Box
                component="iframe"
                id={`JotFormIFrame-${JOTFORM_FORM_ID}`}
                title="Azure Sky Ragdolls Adoption Application"
                src={JOTFORM_SRC}
                width="100%"
                loading="eager"
                sx={{
                  border: 0,
                  height: '100%',
                }}
                allow="geolocation; microphone; camera"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <Typography variant="body2" sx={{ mt: 2 }}>
                Loading the adoption application&hellip;
              </Typography>
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </Card>
  )
}

export default PurchaseForm

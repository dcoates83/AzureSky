import {
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
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
    message: noLinks('Message'),
  })

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      city: '',
      message: '',
    },
    validationSchema,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit: async () => {},
  })

  const handleReadyToAdoptClick = () => {
    setShouldLoadJotform(true)
    setIsReadyDialogOpen(true)
  }

  const handleQuestionFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    const nativeEvent = event.nativeEvent as SubmitEvent
    if (!nativeEvent.isTrusted) {
      event.stopPropagation()
      return
    }

    const form = event.currentTarget

    formik.setTouched(
      {
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        city: true,
        message: true,
      },
      false
    )

    const errors = await formik.validateForm()
    if (Object.keys(errors).length > 0) {
      return
    }

    formik.setSubmitting(true)
    HTMLFormElement.prototype.submit.call(form)
  }

  return (
    <Box
      id="purchasing-form"
      sx={{
        mt: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          maxWidth: 760,
          mx: 'auto',
          px: { xs: 1, sm: 2 },
        }}
      >
        <Typography component="h2" variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Curious about an Azure Sky Ragdoll?
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Choose the option that best fits where you are in the process.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1.05fr 0.95fr' },
          gap: 3,
          alignItems: 'stretch',
        }}
      >
        <Card
          sx={{
            p: { xs: 2.5, sm: 3 },
            borderRadius: 2,
            backgroundColor: 'rgba(34, 197, 94, 0.1)',
            border: '1px solid rgba(34, 197, 94, 0.35)',
            boxShadow: '0 12px 30px rgba(15, 118, 110, 0.14)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 3,
          }}
        >
          <Box>
            <Typography
              component="h3"
              variant="h5"
              sx={{ fontWeight: 700, mb: 1 }}
            >
              I&apos;m Interested to Adopt
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Join the waitlist, apply for an available kitten, or let us know
              you would like to be considered for a future Azure Sky Ragdoll.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is the right place for adoption, waitlist, kitten
              availability, older kitten, and retired breeder requests.
            </Typography>
          </Box>

          <Button
            variant="contained"
            color="success"
            size="large"
            onClick={handleReadyToAdoptClick}
            sx={{
              alignSelf: { xs: 'stretch', sm: 'flex-start' },
              color: '#fff',
              fontWeight: 700,
              px: 3,
            }}
          >
            Start Adoption Application
          </Button>
        </Card>

        <Card
          sx={{
            p: { xs: 2.5, sm: 3 },
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
            boxShadow: '0 6px 18px rgba(15, 23, 42, 0.08)',
          }}
        >
          <Typography
            component="h3"
            variant="h5"
            sx={{ fontWeight: 700, mb: 1 }}
          >
            I Have a Question
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Ask a general question before applying.
          </Typography>

          <Box
            sx={{
              mb: 2,
              p: 1.5,
              borderRadius: 2,
              backgroundColor: 'rgba(2, 132, 199, 0.08)',
              border: '1px solid rgba(2, 132, 199, 0.18)',
            }}
          >
            <Typography variant="body2" color="text.secondary">
              For adoption, waitlist, kitten availability, older kitten, or
              retired breeder requests, please use the adoption application.
            </Typography>
          </Box>

          <Box
            method="POST"
            component="form"
            noValidate
            onSubmit={handleQuestionFormSubmit}
            action="https://formsubmit.co/Meg@azureskyragdolls.com"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <input
              type="hidden"
              name="_autoresponse"
              value="Thanks for your question! We will be in touch shortly."
            />
            <input
              type="hidden"
              name="_next"
              value="https://www.azureskyragdolls.com/Purchasing#purchasing-form"
            />
            <input type="hidden" name="_cc" value="devonbcoates@gmail.com" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_subject"
              value={`General question from ${formik.values.firstName} ${formik.values.lastName} - Azure Sky Ragdolls`}
            />
            <input
              type="hidden"
              name="form_type"
              value="General question - not an adoption application"
            />
            <input
              type="text"
              name="_honey"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: 2,
              }}
            >
              <TextField
                error={Boolean(
                  formik.touched.firstName && formik.errors.firstName
                )}
                helperText={formik.touched.firstName && formik.errors.firstName}
                variant="filled"
                size="small"
                fullWidth
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                label="First Name"
              />
              <TextField
                error={Boolean(
                  formik.touched.lastName && formik.errors.lastName
                )}
                helperText={formik.touched.lastName && formik.errors.lastName}
                variant="filled"
                size="small"
                fullWidth
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                label="Last Name"
              />
            </Box>

            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
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

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: 2,
              }}
            >
              <TextField
                error={Boolean(formik.touched.phone && formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
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
              <TextField
                error={Boolean(formik.touched.city && formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
                variant="filled"
                size="small"
                fullWidth
                name="city"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
                label="City"
              />
            </Box>

            <TextField
              error={Boolean(formik.touched.message && formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
              variant="filled"
              size="small"
              fullWidth
              multiline
              rows={4}
              name="message"
              label="Question"
              placeholder="Ask your general question here."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />

            <Typography variant="caption" color="text.secondary">
              General questions go here. Adoption and waitlist requests should
              use the adoption application above so you do not have to submit
              the same information twice.
            </Typography>

            <Button
              type="submit"
              variant="outlined"
              disabled={!formik.isValid || formik.isSubmitting}
              sx={{
                alignSelf: { xs: 'stretch', sm: 'flex-start' },
                px: 3,
                fontWeight: 700,
              }}
            >
              Ask a Question
            </Button>
          </Box>
        </Card>
      </Box>

      <Dialog
        open={isReadyDialogOpen}
        onClose={() => setIsReadyDialogOpen(false)}
        aria-labelledby="ready-to-adopt-dialog-title"
        fullWidth
        fullScreen
        maxWidth="md"
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            // p: 2,
          }}
        >
          {' '}
          <DialogTitle id="ready-to-adopt-dialog-title">
            Azure Sky Ragdolls Adoption Application
          </DialogTitle>
          <DialogActions>
            <Button onClick={() => setIsReadyDialogOpen(false)}>Close</Button>
          </DialogActions>
        </Box>
        <DialogContent sx={{ p: 0, overflow: 'hidden', flex: 1 }}>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              minHeight: { xs: 560, md: 900 },
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
              <Typography variant="body2" sx={{ mt: 2, px: 2 }}>
                Loading the adoption application&hellip;
              </Typography>
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  )
}

export default PurchaseForm

import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded'
import { Box, Button, Container, Typography } from '@mui/material'
import { PortableText } from '@portabletext/react'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import CMSSection from '../components/CMSSection'
import FaqQuestion from '../components/FaqQuestion'
import PurchaseForm from '../components/PurchaseForm'
import Seo from '../components/Seo'
import { client } from '../lib/sanity.client'
import siteMetadata from '../lib/seoConfig'

type PortableContent = any

interface PurchasingPage {
  title_purchasingAgreement?: string
  content_purchasingAgreement?: PortableContent
  title_purchasingComesWith?: string
  list_purchasingComesWith?: string[]
  content_purchasingComesWith?: PortableContent
  title_purchasingGoingHome?: string
  content_purchasingGoingHome?: PortableContent
  title_AdoptionForm?: string
  content_AdoptionForm?: PortableContent
}

interface FaqQuestionDocument {
  _id?: string
  title_faqs?: string
  content_faqs?: string
}

interface PurchasingProps {
  purchasing: PurchasingPage | null
  faqQuestions: FaqQuestionDocument[]
}

const PROCESS_STEPS = [
  {
    title: 'Read the details',
    description:
      'Review the agreement, what your kitten comes with, and what to expect when they go home.',
  },
  {
    title: 'Apply to adopt',
    description:
      'Use the adoption application for waitlist, availability, kitten, older kitten, or retired breeder requests.',
  },
  {
    title: 'We follow up',
    description:
      'After reviewing your application, we will contact you with next steps and timing.',
  },
] as const

const sanitizeAnswer = (value?: string) =>
  value
    ? value
        .replace(/<[^>]*>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
    : ''

export const getStaticProps: GetStaticProps<PurchasingProps> = async () => {
  const [purchasing, faqQuestions] = await Promise.all([
    client.fetch<PurchasingPage | null>(`*[_type == "purchasing"][0]`),
    client.fetch<FaqQuestionDocument[]>(
      `*[_type == "faqType"] | order(_createdAt asc)`
    ),
  ])

  return {
    props: {
      purchasing,
      faqQuestions: faqQuestions ?? [],
    },
    revalidate: 180,
  }
}

const Purchasing = ({ purchasing, faqQuestions }: PurchasingProps) => {
  const {
    title_purchasingAgreement = 'Purchasing Agreement',
    content_purchasingAgreement,
    title_purchasingComesWith = 'What Your Kitten Comes With',
    list_purchasingComesWith = [],
    content_purchasingComesWith,
    title_purchasingGoingHome = 'Going Home',
    content_purchasingGoingHome,
    title_AdoptionForm = 'Adoption Application',
    content_AdoptionForm,
  } = purchasing ?? {}

  return (
    <>
      <Seo
        title="Purchasing"
        description="Review our adoption agreement, see what every Azure Sky Ragdolls kitten includes, and submit the adoption form to reserve your spot on the wait list."
        keywords={[
          'ragdoll adoption process',
          'ragdoll kitten deposit',
          'azure sky ragdolls waitlist',
        ]}
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Azure Sky Ragdolls Purchasing',
            description:
              'Adoption agreement, inclusions, going-home preparation tips, and contact options for Azure Sky Ragdolls kittens.',
            url: `${siteMetadata.siteUrl}/Purchasing`,
          },
          ...(faqQuestions?.length
            ? [
                {
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: faqQuestions.map((q) => ({
                    '@type': 'Question',
                    name: q.title_faqs,
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: sanitizeAnswer(q.content_faqs),
                    },
                  })),
                },
              ]
            : []),
        ]}
      />

      <Box
        component="section"
        sx={{
          py: { xs: 4, md: 6 },
          backgroundColor: 'rgba(14, 165, 233, 0.06)',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1.2fr 0.8fr' },
              gap: { xs: 3, md: 5 },
              alignItems: 'center',
            }}
          >
            <Box>
              <Typography
                component="h1"
                variant="h3"
                sx={{ fontWeight: 700, mb: 1.5 }}
              >
                Purchasing an Azure Sky Ragdoll
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 720, mb: 3 }}
              >
                Review the adoption process, see what is included with each
                kitten, and apply when you are ready to be considered.
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2,
                }}
              >
                <Button
                  component={Link}
                  href="#purchasing-form"
                  variant="contained"
                  size="large"
                >
                  Start Adoption Application
                </Button>
                <Button
                  component={Link}
                  href="#faq"
                  variant="outlined"
                  size="large"
                >
                  Read FAQ
                </Button>
              </Box>
            </Box>

            <Box
              sx={{
                p: { xs: 2, sm: 2.5 },
                borderRadius: 2,
                backgroundColor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: '0 8px 24px rgba(15, 23, 42, 0.08)',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                Adoption requests go through the application.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                If you want to join the waitlist, ask about kitten availability,
                or be considered for an older kitten or retired breeder, use the
                adoption application instead of the general question form.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 2,
            mb: { xs: 4, md: 6 },
          }}
        >
          {PROCESS_STEPS.map((step, index) => (
            <Box
              key={step.title}
              sx={{
                p: 2.5,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                backgroundColor: 'background.paper',
              }}
            >
              <Typography
                variant="overline"
                color="primary"
                sx={{ fontWeight: 700 }}
              >
                Step {index + 1}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                {step.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {step.description}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box
          component="section"
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '0.95fr 1.05fr' },
            gap: { xs: 4, lg: 6 },
            alignItems: 'start',
            mb: { xs: 4, md: 6 },
          }}
        >
          <Box>
            {content_purchasingAgreement ? (
              <CMSSection
                containerSx={{ mt: 0 }}
                title={title_purchasingAgreement}
                content={content_purchasingAgreement}
              />
            ) : (
              <Typography color="text.secondary">
                Purchasing agreement details are being updated.
              </Typography>
            )}
          </Box>

          <Box
            sx={{
              p: { xs: 2, sm: 3 },
              borderRadius: 2,
              backgroundColor: 'rgba(34, 197, 94, 0.08)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
            }}
          >
            <Typography
              component="h2"
              variant="h4"
              sx={{ fontWeight: 700, mb: 2 }}
            >
              {title_purchasingComesWith}
            </Typography>

            {list_purchasingComesWith.length > 0 ? (
              <Box
                component="ul"
                sx={{
                  listStyle: 'none',
                  m: 0,
                  p: 0,
                  display: 'grid',
                  gap: 1.5,
                }}
              >
                {list_purchasingComesWith.map((item, index) => (
                  <Box
                    component="li"
                    key={`${item}-${index}`}
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: 'auto 1fr',
                      gap: 1.25,
                      alignItems: 'start',
                    }}
                  >
                    <CheckCircleOutlineRoundedIcon
                      color="success"
                      sx={{ mt: 0.25 }}
                    />
                    <Typography>{item}</Typography>
                  </Box>
                ))}
              </Box>
            ) : null}

            {content_purchasingComesWith ? (
              <Box sx={{ mt: list_purchasingComesWith.length ? 2 : 0 }}>
                <PortableText value={content_purchasingComesWith} />
              </Box>
            ) : null}
          </Box>
        </Box>

        {content_purchasingGoingHome ? (
          <Box component="section" sx={{ mb: { xs: 4, md: 6 } }}>
            <CMSSection
              title={title_purchasingGoingHome}
              content={content_purchasingGoingHome}
            />
          </Box>
        ) : null}

        <Box
          component="section"
          id="purchasing-form"
          sx={{
            scrollMarginTop: { xs: 80, md: 96 },
            py: { xs: 4, md: 6 },
            borderTop: '1px solid',
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Box sx={{ maxWidth: 840, mx: 'auto', mb: 3, textAlign: 'center' }}>
            <Typography
              component="h2"
              variant="h4"
              sx={{ fontWeight: 700, mb: 1 }}
            >
              {title_AdoptionForm}
            </Typography>
            {content_AdoptionForm ? (
              <Box sx={{ color: 'text.secondary' }}>
                <PortableText value={content_AdoptionForm} />
              </Box>
            ) : (
              <Typography color="text.secondary">
                Use the application below when you are ready to adopt or join
                the waitlist.
              </Typography>
            )}
          </Box>

          <PurchaseForm />

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 3, textAlign: 'center' }}
          >
            Having trouble with the form? Email us directly at{' '}
            <Box component="span" fontWeight={700}>
              meg@azureskyragdolls.com
            </Box>
            .
          </Typography>
        </Box>

        <Box
          component="section"
          id="faq"
          sx={{
            scrollMarginTop: { xs: 80, md: 96 },
            pt: { xs: 4, md: 6 },
          }}
        >
          <Box sx={{ mb: 3 }}>
            <Typography
              component="h2"
              variant="h4"
              sx={{ fontWeight: 700, mb: 1 }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography color="text.secondary">
              If it is not on the list, send a general question through the form
              above.
            </Typography>
          </Box>

          {faqQuestions.length > 0 ? (
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 2,
                alignItems: 'start',
              }}
            >
              {faqQuestions.map((question, index) => (
                <FaqQuestion
                  key={question._id ?? `${question.title_faqs}-${index}`}
                  id={`faq-${question._id ?? index}`}
                  question={question.title_faqs ?? 'Question'}
                  answer={question.content_faqs ?? ''}
                />
              ))}
            </Box>
          ) : (
            <Typography color="text.secondary">
              FAQ answers are being updated.
            </Typography>
          )}
        </Box>
      </Container>
    </>
  )
}

export default Purchasing

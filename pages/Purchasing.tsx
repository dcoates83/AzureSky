import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded'
import MoveDownIcon from '@mui/icons-material/MoveDown'
import { Box, Button, Container, Typography, useTheme } from '@mui/material'
import { PortableText } from '@portabletext/react'
import { GetStaticProps, PreviewData } from 'next'
import Image from 'next/image'

import { useRouter } from 'next/router'
import { JSXElementConstructor, Key, ReactElement, ReactFragment } from 'react'
import uuid from 'react-uuid'
import { Balancer } from 'react-wrap-balancer'
import { Query, client } from '.'

import CMSSection from '../components/CMSSection'
import FaqQuestion from '../components/FaqQuestion'
import PurchaseForm from '../components/PurchaseForm'
import SectionSubHeader from '../components/SectionSubHeader'
import Seo from '../components/Seo'
import siteMetadata from '../lib/seoConfig'

export const getStaticProps: GetStaticProps<any, Query, PreviewData> = async (
  ctx
) => {
  const { preview = false, previewData = {} } = ctx

  const purchasing = await client.fetch(`*[_type == "purchasing"]`)
  const faqQuestions = await client.fetch(`*[_type == "faqType"]`)

  return {
    props: {
      purchasing,
      faqQuestions,
    },
    revalidate: 180,
  }
}
const Purchasing = ({ purchasing, faqQuestions }) => {
  const theme = useTheme()
  const copy = [...purchasing]
  const {
    title_purchasingAgreement,
    content_purchasingAgreement,
    title_purchasingComesWith,
    list_purchasingComesWith,
    content_purchasingComesWith,
    title_purchasingGoingHome,
    content_purchasingGoingHome,
    title_AdoptionForm,
    content_AdoptionForm,
  } = copy.pop()

  const router = useRouter()
  const sanitizeAnswer = (value?: string) =>
    value
      ? value
          .replace(/<[^>]*>/g, ' ')
          .replace(/\s+/g, ' ')
          .trim()
      : ''
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
                  mainEntity: faqQuestions.map(
                    (q: { title_faqs: string; content_faqs: string }) => ({
                      '@type': 'Question',
                      name: q.title_faqs,
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: sanitizeAnswer(q.content_faqs),
                      },
                    })
                  ),
                },
              ]
            : []),
        ]}
      />
      <Container maxWidth="md" sx={{ mb: 1 }}>
        <CMSSection
          link={
            <>
              <Button
                variant="text"
                size="large"
                sx={{
                  mt: -2,
                  pl: 0,
                  textTransform: 'capitalize',
                }}
                onClick={() => router.push(`/Purchasing#purchasing-form`)}
              >
                <MoveDownIcon sx={{ mr: 2 }} /> Jump to adoption form
              </Button>
            </>
          }
          title={title_purchasingAgreement}
          content={content_purchasingAgreement}
        />

        <Box sx={{ mt: 2 }}>
          <Typography variant={'h4'}>{title_purchasingComesWith}</Typography>

          <Box sx={{ color: 'text.primary', mt: 2 }}>
            {list_purchasingComesWith?.map((item: any) => {
              return (
                <Box
                  key={uuid()}
                  sx={{ display: 'flex', m: 1, alignItems: 'center' }}
                >
                  <CheckCircleOutlineRoundedIcon
                    color="primary"
                    sx={{ mr: 1, ml: 2 }}
                  />
                  <Balancer>
                    <Typography>{item}</Typography>
                  </Balancer>
                </Box>
              )
            })}
            {<PortableText value={content_purchasingComesWith} />}
          </Box>
        </Box>
        <CMSSection
          title={title_purchasingGoingHome}
          content={content_purchasingGoingHome}
        />
        <SectionSubHeader text="We make sure your kitten is well socialized" />
        <Box
          id="purchasing-form"
          sx={{
            position: 'absolute',
            height: 64,
            marginTop: -8,
            visibility: 'hidden',
          }}
        ></Box>
        <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
          Having trouble with the form? Email us directly at{' '}
          <Box component="span" fontWeight={600}>
            meg@azureskyragdolls.com
          </Box>
        </Typography>
        <Box
          sx={{
            mt: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            [theme.breakpoints.down('sm')]: {
              display: 'flex',
              flexDirection: 'column',
            },
          }}
        >
          <Box>
            <CMSSection
              containerSx={{ m: 0 }}
              titleSx={{ m: 0, pb: 1 }}
              title={title_AdoptionForm}
              content={content_AdoptionForm}
              titleChildren={<PurchaseForm />}
            />
          </Box>
        </Box>

        <section id="faq">
          <Box className="faq-subheader" sx={{ mt: 4 }}>
            <h2 className="questions">
              Questions? Check out our FAQ&apos;s about Ragdolls below!
            </h2>
            <Typography className="questions-contact" sx={{ m: 2, ml: 0 }}>
              If its not on the list, feel free to email us!
            </Typography>
          </Box>
          <div className="top">
            <Box
              sx={{
                display: 'grid',
                wordBreak: 'break-word',
                justifyItems: 'center',
                alignItems: 'center',
                gridTemplateColumns: '1fr 1fr',

                gap: 2,
                [theme.breakpoints.down('md')]: {
                  gridTemplateColumns: '1fr',
                  gridAutoFlow: 'row',
                },
              }}
            >
              {faqQuestions.map(
                (q: {
                  title: Key
                  title_faqs: string
                  content_faqs: string
                  answer: any
                }) => (
                  <Box
                    key={uuid()}
                    sx={{
                      width: '100%',
                      [theme.breakpoints.down('md')]: {
                        gridTemplateColumns: '1fr',
                        gridAutoFlow: 'row',
                      },
                    }}
                  >
                    <FaqQuestion
                      question={q.title_faqs}
                      answer={q.content_faqs}
                      key={uuid()}
                    />
                  </Box>
                )
              )}
            </Box>
          </div>
        </section>
      </Container>
    </>
  )
}

export default Purchasing

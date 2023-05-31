import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded'
import { Box, Button, Container, Typography, useTheme } from '@mui/material'
import { PortableText } from '@portabletext/react'
import { GetStaticProps, PreviewData } from 'next'
import Image from 'next/image'

import MoveDownIcon from '@mui/icons-material/MoveDown'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { JSXElementConstructor, Key, ReactElement, ReactFragment } from 'react'
import uuid from 'react-uuid'
import { Balancer } from 'react-wrap-balancer'
import { Query, client } from '.'
import aasia from '../assets/aasia-kitten.jpg'
import catTower from '../assets/cat-cattower.jpg'
import deposit from '../assets/kittens-deposit.jpg'
import kittensInBasket from '../assets/kittensInBasket.png'
import CMSSection from '../components/CMSSection'
import FaqQuestion from '../components/FaqQuestion'
import ImageContainer from '../components/ImageContainer'
import PurchaseForm from '../components/PurchaseForm'
import SectionSubHeader from '../components/SectionSubHeader'
import { title } from '../lib/demo.data'
import Logo from '../public/Logo'
export const getStaticProps: GetStaticProps<any, Query, PreviewData> = async (
  ctx
) => {
  const { preview = false, previewData = {} } = ctx

  const purchasing = await client.fetch(`*[_type == "purchasing"]`)
  const faqQuestions = await client.fetch(`*[_type == "faqType"]`)
  // const faqQuestions = await client.fetch(`*[_type == "faqType"]`) // new content here
  return {
    props: {
      purchasing,
      faqQuestions,
      // token: previewData?.token ?? null,
    },
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
  return (
    <>
      <Head>
        <title>Azure Sky - Purchasing</title>
        <meta
          name="description"
          content="Explore our Purchasing page to learn more about buying a Ragdoll kitten. Read the purchasing agreement to understand the terms and conditions. Discover what comes with your purchase, including essential items and services, such as vaccinations, micro chipping, and a health guarantee. Find out what you need to do when your kitten is ready to go home, including preparation and care tips. Fill out the adoption form to initiate the purchasing process. Browse through our FAQ section to find answers to common questions. If you have any other inquiries, feel free to contact us via email. Make an informed decision and bring home a wonderful Ragdoll kitten today!"
        />
      </Head>
      <Container maxWidth="md" sx={{ mb: 1 }}>
        <CMSSection
          link={
            <>
              <Button
                variant="text"
                size="large"
                sx={{
                  pl: 0,
                  textTransform: 'capitalize',
                }}
                onClick={() => router.push(`/Purchasing#purchasing-form`)}
              >
                <MoveDownIcon sx={{ mr: 2 }}></MoveDownIcon> Jump to adoption
                form
              </Button>
            </>
          }
          title={title_purchasingAgreement}
          content={content_purchasingAgreement}
        />

        <Box sx={{ mt: 2 }}>
          <Typography variant={'h4'} sx={{}}>
            {title_purchasingComesWith}
          </Typography>

          <Box sx={{ color: 'text.primary', mt: 2 }}>
            {list_purchasingComesWith?.map(
              (
                item:
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | ReactFragment
                  | Key
              ) => {
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
              }
            )}
            {<PortableText value={content_purchasingComesWith} />}
          </Box>
        </Box>
        <CMSSection
          title={title_purchasingGoingHome}
          content={content_purchasingGoingHome}
        />
        <SectionSubHeader text="We make sure your kitten is well socialized" />
        <Box
          sx={{
            mt: 5,
            display: 'grid',
            gridAutoFlow: 'column',
            gridTemplateColumns: '1fr 1fr',
            alignItems: 'start',
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
            />
          </Box>
          <PurchaseForm />
        </Box>

        <section id="faq">
          <Box className="faq-subheader" sx={{ mt: 4 }}>
            <h2 className="questions">
              Questions? Check out our FAQ&apos;s about Ragdolls below!
            </h2>
            <h5 className="questions-contact">
              If its not on the list, feel free to{' '}
              <a href="mailto:azureskyragdolls@gmail.com"> email</a> us!
            </h5>
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

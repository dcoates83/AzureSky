import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded'
import { Box, Container, Typography, useTheme } from '@mui/material'
import { PortableText } from '@portabletext/react'
import { GetStaticProps, PreviewData } from 'next'
import Image from 'next/image'

import { JSXElementConstructor, Key, ReactElement, ReactFragment } from 'react'
import uuid from 'react-uuid'
import { Query, client } from '.'
import aasia from '../assets/aasia-kitten.jpg'
import catTower from '../assets/cat-cattower.jpg'
import deposit from '../assets/kittens-deposit.jpg'
import kittensInBasket from '../assets/kittensInBasket.png'
import CMSSection from '../components/CMSSection'
import FaqQuestion from '../components/FaqQuestion'
import ImageContainer from '../components/ImageContainer'
import PurchaseForm from '../components/PurchaseForm'
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
  return (
    <>
      {/* <MetaTags
        title="Purchasing"
        description="Before buying your Ragdolls kitten, get an idea of whether or not you can afford a cat for ... Purr-chase Prices – How Much Do Ragdolls Cost?"
      /> */}
      <Container maxWidth="md" sx={{ mb: 1 }}>
        <CMSSection
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
                  <Box key={uuid()} sx={{ display: 'flex', m: 1 }}>
                    <CheckCircleOutlineRoundedIcon
                      color="primary"
                      sx={{ mr: 1, ml: 2 }}
                    />
                    <Typography>{item}</Typography>
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
        <Box
          sx={{
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
              title={title_AdoptionForm}
              content={content_AdoptionForm}
            />
          </Box>
          <PurchaseForm />
        </Box>

        <section id="faq">
          <div className="faq-subheader">
            <h2 className="questions">
              Questions? Check out our FAQ&apos;s below!
            </h2>
            <h5 className="questions-contact">
              If its not on the list, feel free to{' '}
              <a href="mailto:azureskyragdolls@gmail.com"> email</a> us!
            </h5>
          </div>
          <div className="top">
            <Box
              sx={{
                display: 'grid',
                // wordBreak: 'keep-all',
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
                    key={q.title}
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
                      key={q.answer + q.answer}
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

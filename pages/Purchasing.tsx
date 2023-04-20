import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded'
import { Box, Container, Typography, useTheme } from '@mui/material'
import { PortableText } from '@portabletext/react'
import { GetStaticProps, PreviewData } from 'next'
import Image from 'next/image'

import { client, Query } from '.'
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
  return (
    <>
      {/* <MetaTags
        title="Purchasing"
        description="Before buying your Ragdolls kitten, get an idea of whether or not you can afford a cat for ... Purr-chase Prices – How Much Do Ragdolls Cost?"
      /> */}
      <Container maxWidth="md" sx={{ mb: 1 }}>
        <CMSSection
          title={purchasing[0].title_purchasingAgreement}
          content={purchasing[0].content_purchasingAgreement}
        />

        <Box sx={{ mt: 2 }}>
          <Typography variant={'h4'} sx={{}}>
            {/* <Typography variant={'h4'} sx={{ color: 'primary.main' }}> */}
            {purchasing[0].title_purchasingComesWith}
          </Typography>

          <Box sx={{ color: 'text.primary', mt: 2 }}>
            {purchasing[0]?.list_purchasingComesWith?.map((item) => {
              return (
                <Box key={item} sx={{ display: 'flex', m: 1 }}>
                  <CheckCircleOutlineRoundedIcon
                    color="primary"
                    sx={{ mr: 1, ml: 2 }}
                  />
                  <Typography>{item}</Typography>
                </Box>
              )
            })}
            {<PortableText value={purchasing[0].content_purchasingComesWith} />}
          </Box>
        </Box>
        <CMSSection
          title={purchasing[0].title_purchasingGoingHome}
          content={purchasing[0].content_purchasingGoingHome}
        />
        <Box
          sx={{
            display: 'grid',
            gridAutoFlow: 'column',
            gridTemplateColumns: '1fr 1fr',
            alignItems: 'start',
            gap: 2,
            [theme.breakpoints.down('sm')]: {
              // gridAutoFlow: 'row',
              display: 'flex',
              flexDirection: 'column',
            },
          }}
        >
          <Box>
            <CMSSection
              title={purchasing[0].title_AdoptionForm}
              content={purchasing[0].content_AdoptionForm}
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
              {faqQuestions.map((q) => (
                <Box key={q.title} sx={{ width: '100%' }}>
                  <FaqQuestion
                    question={q.title_faqs}
                    answer={q.content_faqs}
                    key={q.answer + q.answer}
                  />
                </Box>
              ))}
            </Box>
          </div>
        </section>
      </Container>
    </>
  )
}

export default Purchasing

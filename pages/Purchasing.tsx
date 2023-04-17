import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded'
import { Box, Container, Typography } from '@mui/material'
import { PortableText } from '@portabletext/react'
import { GetStaticProps, PreviewData } from 'next'
import Image from 'next/image'

import { client, Query } from '.'
import aasia from '../assets/aasia-kitten.jpg'
import catTower from '../assets/cat-cattower.jpg'
import deposit from '../assets/kittens-deposit.jpg'
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
  return (
    <>
      {/* <MetaTags
        title="Purchasing"
        description="Before buying your Ragdolls kitten, get an idea of whether or not you can afford a cat for ... Purr-chase Prices – How Much Do Ragdolls Cost?"
      /> */}
      <Container maxWidth="md">
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
        <CMSSection
          title={purchasing[0].title_AdoptionForm}
          content={purchasing[0].content_AdoptionForm}
        />

        <section id="form-info">
          <div className="form-container">
            <PurchaseForm />
            {/* <form action="https://submit-form.com/AqUcFuf1" method="" id="form">
              <label htmlFor="firstName">Full Name</label>
              <div className="input-grid">
                <input
                  type="hidden"
                  name="_feedback.success.title"
                  value="Thanks for your interest in out kittens, we will be in touch as soon as we can!"
                />
                <input
                  required
                  type="text"
                  name="First Name"
                  id="firstName"
                  placeholder="First"
                />
                <input
                  required
                  type="text"
                  name="Last Name"
                  id="lastName"
                  placeholder="Last"
                />
              </div>
              <div className="input-grid">
                <label htmlFor="phone">Phone</label>
                <label htmlFor="email">Email</label>
                <input required type="phone" name="phone" id="phone" />
                <input required type="email" name="Email" id="email" />
              </div>
              <label htmlFor="address">Address</label>
              <div className="input-grid">
                <input
                  type="street"
                  name="address"
                  required
                  id="street"
                  placeholder="Street"
                />
                <input
                  type="city"
                  name="address"
                  required
                  id="city"
                  placeholder="City"
                />
                <input
                  type="province"
                  name="address"
                  required
                  id="province"
                  placeholder="Province"
                />
                <input
                  type="postal"
                  name="address"
                  required
                  id="postal"
                  placeholder="Postal code"
                />
              </div>
              <div className="input-grid">
                <div className="email-help">
                  We will <span className="underline">never</span> share your
                  information with anyone else.
                </div>
                <div className="email-help">
                  We need verifiable info to prove that you are a person, and
                  not a cat mill.
                </div>
              </div>
              <label className="family" htmlFor="family">
                Tell us about you, your family, and your home.
              </label>

              <textarea
                required
                name="About us"
                id="family"
                cols={30}
                rows={6}
                placeholder="-What occupations do your household members hold?&#10;-Tell us about any children, and what ages they are?&#10;-Any other pets in your home?&#10;-Have you owned a cat/Ragdoll/purebred cat or pets before?&#10;-Who is the kitten for?&#10;-Who will be responsible for caring for the kitten?"
              ></textarea>
              <button type="submit">Submit</button>
            </form> */}
          </div>
        </section>

        <section id="faq">
          <div className="faq-subheader">
            <h2 className="questions">
              QUESTIONS AROUND AN AZURE SKY RAGDOLL KITTEN?
            </h2>
            <h5 className="questions-contact">
              If its not on the list, feel free to email us!
            </h5>
          </div>
          <div className="top">
            <h1 className="faq-header">FAQ</h1>
            <ImageContainer>
              {faqQuestions.map((q) => (
                <FaqQuestion
                  question={q.title_faqs}
                  answer={q.content_faqs}
                  key={q.answer + q.answer}
                />
              ))}
            </ImageContainer>
          </div>
        </section>
      </Container>
    </>
  )
}

export default Purchasing

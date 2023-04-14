import { Box, Container } from '@mui/material'
import { GetStaticProps, PreviewData } from 'next'
import Image from 'next/image'

import { client, Query } from '.'
import aasia from '../assets/aasia-bed.jpg'
import ailyaMom from '../assets/Ailya mom.jpg'
import amethyst from '../assets/Amethyst.jpg'
import athena from '../assets/athena-catbed.jpg'
import buckwheat from '../assets/buckwheat.jpg'
import chocolate from '../assets/chocolate.jpg'
import daddyWarbucks from '../assets/Daddy warbucks.jpg'
import dandelion from '../assets/dandilion.jpg'
import flamePoint from '../assets/Flame-point-Ragdoll-cat.jpg'
import fugianna from '../assets/fugianna.jpg'
import grumpyCat from '../assets/grumpycat.jpg'
import historyLanding from '../assets/history-landing.jpg'
import josephine from '../assets/josephine.jpg'
import appearance from '../assets/r-apperance.jpg'
import eyesGreen from '../assets/r-eyes-green.jpg'
import eyes from '../assets/r-eyes.jpg'
import leash from '../assets/r-leash.jpg'
import sapphire from '../assets/sapphire-with-kitten.jpg'
import seal from '../assets/Seal-Tortie-Ragdoll-cat-from-Kansas-Ragdolls-bred-by-Leanna-at-House-of-Steward-Ragdolls-625x469.jpg'
import solid from '../assets/solid.jpg'
import tzar from '../assets/tzar-box.jpg'
import CMSSection from '../components/CMSSection'
import ImageCircle from '../components/ImageCircle'
import ImageComponent from '../components/ImageComponent'
import ImageContainer from '../components/ImageContainer'

export const getStaticProps: GetStaticProps<any, Query, PreviewData> = async (
  ctx
) => {
  const { preview = false, previewData = {} } = ctx

  const aboutPage = await client.fetch(`*[_type == "aboutPage"]`)
  return {
    props: {
      aboutPage,
      token: previewData?.token ?? null,
    },
  }
}
const AboutPage = ({ aboutPage }) => {
  return (
    <>
      {/* <MetaTags
        title="Home"
        description="
  Ragdolls are known worldwide for their affectionate nature, beautiful appearance, and
  intelligence. Stunning eyes, soft luxurious fur and a variety of coat colors and marking’s hallmark the Ragdoll of today, making them extremely popular."
      /> */}
      <section id="about" className="section">
        <Container maxWidth="xl" sx={{ position: 'relative', height: 500 }}>
          <Image
            src={historyLanding}
            fill
            style={{
              top: '8px',
              objectFit: 'cover',
              objectPosition: 'top',
              borderRadius: '8px',
            }}
            alt=""
            className="history-landing"
          />
        </Container>
        <Container maxWidth="md">
          <CMSSection
            title={aboutPage[0]?.title_AboutRagdolls}
            content={aboutPage[0]?.content_AboutRagdolls}
          />
          <CMSSection
            title={aboutPage[0]?.title_RagdollHistory}
            content={aboutPage[0]?.content_RagdollHistory}
          />
          <ImageContainer className="ragdoll-history-img">
            <Image src={fugianna} alt="fugianna cat" className="history-img" />
            <Image
              src={daddyWarbucks}
              alt="daddy warbucks cat"
              className="history-img"
            />
            <Image
              src={buckwheat}
              alt="buckwheat cat"
              className="history-img"
            />
          </ImageContainer>
          <CMSSection
            title={aboutPage[0]?.title_GrumpyCat}
            content={aboutPage[0]?.content_GrumpyCat}
          />{' '}
          <Image
            src={grumpyCat}
            height={300}
            alt="grumpy cat"
            className="heading-img"
          />
          <CMSSection
            title={aboutPage[0]?.title_AppearanceRagdolls}
            content={aboutPage[0]?.content_AppearanceRagdolls}
          />
          <CMSSection
            title={aboutPage[0]?.title_ColorPatterns}
            content={aboutPage[0]?.content_ColorPatterns}
          />
          <ImageContainer>
            {aboutPage[0]?.content_ColorPointsImages?.map((image) => (
              <ImageCircle key={image} image={image} />
            ))}
          </ImageContainer>
          <CMSSection
            title={aboutPage[0]?.title_ColorVariations}
            content={aboutPage[0]?.content_ColorVariations}
          />
          <ImageContainer>
            {aboutPage[0]?.content_ColorVariationsImages?.map((image) => (
              <ImageCircle key={image} image={image} />
            ))}
          </ImageContainer>
          <CMSSection
            title={aboutPage[0]?.title_Minks}
            content={aboutPage[0]?.content_MinksDescription}
          />
          <ImageContainer>
            {aboutPage[0]?.content_MinksImages?.map((image) => (
              <ImageCircle key={image} image={image} />
            ))}
          </ImageContainer>
          <CMSSection
            title={aboutPage[0]?.title_BeCareful}
            content={aboutPage[0]?.content_BeCareful}
          />
        </Container>
      </section>
    </>
  )
}

export default AboutPage

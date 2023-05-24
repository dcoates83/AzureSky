import { Box, Container, useTheme } from '@mui/material'
import { GetStaticProps, PreviewData } from 'next'
import Image from 'next/image'

import uuid from 'react-uuid'
import { client, Query } from '.'
import buckwheat from '../assets/buckwheat.jpg'
import daddyWarbucks from '../assets/Daddy warbucks.jpg'
import fugianna from '../assets/fugianna.jpg'
import grumpyCat from '../assets/grumpycat.jpg'
import historyLanding from '../assets/history-landing.jpg'
import CMSSection from '../components/CMSSection'
import ImageCircle from '../components/ImageCircle'
import ImageContainer from '../components/ImageContainer'
interface AboutPage {
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  title_AboutRagdolls: string
  content_AboutRagdolls: string
  title_AppearanceRagdolls: string
  content_AppearanceRagdolls: AppearanceRagdoll[]
  title_ColorPatterns: string
  title_ColorPoints: string
  content_ColorPointsImages: ColorPointsImage[]
  title_ColorVariations: string
  content_ColorVariationsImages: ColorVariationsImage[]
  title_Minks: string
}

interface ColorPointsImage {
  color: string
  _type: string
  description: string
  _key: string
  asset: AssetReference
}

interface ColorVariationsImage {
  _type: string
  name: string
  description: string
  _key: string
  asset: AssetReference
}

interface AssetReference {
  _ref: string
  _type: string
}

interface AppearanceRagdoll {
  style: string
  _key: string
  markDefs: any[]
  children: AppearanceRagdollChild[]
  _type: string
}

interface AppearanceRagdollChild {
  _type: string
  marks: any[]
  text: string
  _key: string
}
export const getStaticProps: GetStaticProps<any, Query, PreviewData> = async (
  ctx
) => {
  const { preview = false, previewData = {} } = ctx

  const aboutPage: AboutPage[] = await client.fetch(`*[_type == "aboutPage"]`)
  return {
    props: {
      aboutPage,
      // token: previewData?.token ?? null,
    },
  }
}
// const AboutPage = ({ aboutPage }) => {
const AboutPage = ({ aboutPage }: { aboutPage: AboutPage[] }) => {
  const theme = useTheme()
  const copy = [...aboutPage]
  const { title_AboutRagdolls, content_AboutRagdolls } = copy.pop()
  return (
    <>
      {/* <MetaTags
        title="Home"
        description="
  Ragdolls are known worldwide for their affectionate nature, beautiful appearance, and
  intelligence. Stunning eyes, soft luxurious fur and a variety of coat colors and marking’s hallmark the Ragdoll of today, making them extremely popular."
      /> */}
      <section id="about" className="section">
        {/* <Container maxWidth="xl" sx={{ position: 'relative', height: 500 }}>
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
        </Container> */}
        <Container maxWidth="md">
          <CMSSection
            title={title_AboutRagdolls}
            content={content_AboutRagdolls}
          />
          <CMSSection
            title={aboutPage[1]?.title_RagdollHistory}
            content={aboutPage[1]?.content_RagdollHistory}
          />
          <ImageContainer>
            <Image
              width={250}
              height={250}
              src={fugianna}
              alt="fugianna cat"
              className="history-img"
              style={{
                borderRadius: 8,
                objectFit: 'cover',
                paddingLeft: 1,
                overflow: 'hidden',
              }}
            />
            <Image
              width={250}
              height={250}
              src={daddyWarbucks}
              alt="daddy warbucks cat"
              className="history-img"
              style={{ borderRadius: 8 }}
            />
            <Image
              width={250}
              height={250}
              style={{ borderRadius: 8 }}
              src={buckwheat}
              alt="buckwheat cat"
              className="history-img"
            />
          </ImageContainer>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              [theme.breakpoints.down('md')]: {
                flexDirection: 'column',
              },
            }}
          >
            <CMSSection
              title={aboutPage[1]?.title_GrumpyCat}
              content={aboutPage[1]?.content_GrumpyCat}
            />{' '}
            <Image
              src={grumpyCat}
              style={{ borderRadius: 8, marginLeft: '1em' }}
              height={300}
              alt="grumpy cat"
              className="heading-img"
            />
          </Box>
          <CMSSection
            title={aboutPage[1]?.title_AppearanceRagdolls}
            content={aboutPage[1]?.content_AppearanceRagdolls}
          />
          <CMSSection
            title={aboutPage[1]?.title_ColorPatterns}
            content={aboutPage[1]?.content_ColorPatterns}
          />
          <CMSSection
            title={aboutPage[1].title_ColorPoints}
            content={aboutPage[1].content_ColorPoints}
          />
        </Container>

        <Container maxWidth="lg">
          <ImageContainer>
            {aboutPage[1]?.content_ColorPointsImages?.map((image) => (
              <ImageCircle key={uuid()} image={image} />
            ))}
          </ImageContainer>
          <Container maxWidth="md">
            <CMSSection
              title={aboutPage[1]?.title_ColorVariations}
              content={aboutPage[1]?.content_ColorVariations}
            />
          </Container>
          <ImageContainer>
            {aboutPage[1]?.content_ColorVariationsImages?.map((image) => (
              <ImageCircle key={uuid()} image={image} />
            ))}
          </ImageContainer>
          <Container maxWidth="md">
            <CMSSection
              title={aboutPage[1]?.title_Minks}
              content={aboutPage[1]?.content_MinksDescription}
            />
          </Container>
          <ImageContainer>
            {aboutPage[1]?.content_MinksImages?.map((image) => (
              <ImageCircle key={uuid()} image={image} />
            ))}
          </ImageContainer>
          <Container maxWidth="md">
            <CMSSection
              title={aboutPage[1]?.title_BeCareful}
              content={aboutPage[1]?.content_BeCareful}
            />
          </Container>
        </Container>
      </section>
    </>
  )
}

export default AboutPage

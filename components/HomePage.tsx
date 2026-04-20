import { Box, Button, Container, Typography } from '@mui/material'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import Link from 'next/link'
import React from 'react'

import CMSSection from './CMSSection'
import ImageComponent from './ImageComponent'
import ImageContainer from './ImageContainer'
import { HeroLanding } from './LandingPage/HeroLanding'
import SectionSubHeader from './SectionSubHeader'
import Seo from './Seo'
import siteMetadata, { kamloopsAdoptionKeywords } from '../lib/seoConfig'

type HomeImage = SanityImageSource & {
  _key?: string
  asset?: {
    _ref?: string
  }
  gender?: string
  name?: string
}

export interface HomePageData {
  title_KingsQueens?: string
  content_KingsQueens?: any
  content_KingsQueensImages?: HomeImage[]
  title_AboutUs?: string
  content_AboutUs?: any
  title_Assistants?: string
  content_Assistants?: any
  content_ImageAssistants?: HomeImage[]
}

interface HomePageProps {
  homePage?: HomePageData | null
}

const getImageKey = (image: HomeImage, index: number, prefix: string) =>
  image?._key ?? image?.asset?._ref ?? `${prefix}-${image?.name ?? index}`

export default function HomePage({ homePage }: HomePageProps) {
  const {
    title_KingsQueens = 'Our Kings and Queens',
    content_KingsQueens,
    content_KingsQueensImages = [],
    title_AboutUs = 'About Us',
    content_AboutUs,
    title_Assistants = 'Our Assistants',
    content_Assistants,
    content_ImageAssistants = [],
  } = homePage ?? {}

  const homeDescription =
    'TICA-registered Azure Sky Ragdolls raises health-tested kittens in Arizona. Meet our kings, queens, and assistants while learning about the care each kitten receives.'
  const homeStructuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Azure Sky Ragdolls Home',
      description: homeDescription,
      url: siteMetadata.siteUrl,
    },
  ]

  return (
    <>
      <Seo
        title="Home"
        description={homeDescription}
        keywords={[
          'ragdoll kittens Arizona',
          'tica registered ragdoll breeder',
          'family raised ragdoll cats',
          ...kamloopsAdoptionKeywords,
        ]}
        structuredData={homeStructuredData}
      />

      <HeroLanding />

      <Container
        maxWidth="md"
        sx={{
          py: { xs: 3, md: 4 },
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" component="p" sx={{ mb: 2 }}>
          Raised with care, health testing, and lifelong breeder support.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'center',
          }}
        >
          <Button
            component={Link}
            href="/Purchasing#purchasing-form"
            variant="contained"
            color="primary"
            size="large"
          >
            Apply to Adopt
          </Button>
          <Button
            component={Link}
            href="/NewLitters"
            variant="outlined"
            color="primary"
            size="large"
          >
            View Upcoming Litters
          </Button>
        </Box>
      </Container>

      <Container maxWidth="md">
        {content_KingsQueens ? (
          <CMSSection title={title_KingsQueens} content={content_KingsQueens} />
        ) : (
          <Typography color="text.secondary" sx={{ my: 3 }}>
            Our kings and queens information is being updated.
          </Typography>
        )}
      </Container>

      {content_KingsQueensImages.length > 0 ? (
        <Container maxWidth="lg">
          <ImageContainer>
            {content_KingsQueensImages.map((image, index) => (
              <Box
                key={getImageKey(image, index, 'kings-queens')}
                sx={{
                  m: 1,
                  textAlign: 'center',
                }}
              >
                <ImageComponent
                  image={image}
                  alt={image?.name ?? 'Azure Sky Ragdoll breeding cat'}
                />
                {image?.name ? (
                  <Typography
                    variant="h5"
                    sx={{
                      color: image?.gender ? 'secondary.main' : 'primary.main',
                      m: 1,
                    }}
                  >
                    {image.name}
                  </Typography>
                ) : null}
              </Box>
            ))}
          </ImageContainer>
        </Container>
      ) : null}

      <Container maxWidth="md">
        {content_AboutUs ? (
          <CMSSection title={title_AboutUs} content={content_AboutUs} />
        ) : null}

        <SectionSubHeader text="All of our cats live with us as part of our family" />

        {content_Assistants ? (
          <CMSSection title={title_Assistants} content={content_Assistants} />
        ) : null}

        {content_ImageAssistants.length > 0 ? (
          <ImageContainer>
            {content_ImageAssistants.map((image, index) => (
              <ImageComponent
                key={getImageKey(image, index, 'assistants')}
                image={image}
                alt={image?.name ?? 'Azure Sky Ragdolls family assistant'}
              />
            ))}
          </ImageContainer>
        ) : null}
      </Container>

      <Container
        maxWidth="md"
        sx={{
          py: { xs: 4, md: 5 },
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          Ready for the next step?
        </Typography>
        <Button
          component={Link}
          href="/Purchasing#purchasing-form"
          variant="contained"
          color="primary"
          size="large"
        >
          Start the Adoption Process
        </Button>
      </Container>
    </>
  )
}

import { Box, Button, Container, Typography } from '@mui/material'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import buckwheat from '../assets/buckwheat.jpg'
import daddyWarbucks from '../assets/Daddy warbucks.jpg'
import fugianna from '../assets/fugianna.jpg'
import grumpyCat from '../assets/grumpycat.jpg'
import historyLanding from '../assets/history-landing.jpg'
import CMSSection from '../components/CMSSection'
import ImageCircle from '../components/ImageCircle'
import ImageContainer from '../components/ImageContainer'
import { client } from '../lib/sanity.client'
import Seo from '../components/Seo'
import siteMetadata from '../lib/seoConfig'

type PortableContent = any

interface AboutImage {
  _key?: string
  _type?: string
  asset?: {
    _ref?: string
    _type?: string
  }
  color?: string
  name?: string
  description?: string
}

interface AboutPageData {
  title_AboutRagdolls?: string
  content_AboutRagdolls?: PortableContent
  title_AppearanceRagdolls?: string
  content_AppearanceRagdolls?: PortableContent
  title_ColorPatterns?: string
  content_ColorPatterns?: PortableContent
  title_ColorPoints?: string
  content_ColorPoints?: PortableContent
  content_ColorPointsImages?: AboutImage[]
  title_ColorVariations?: string
  content_ColorVariations?: PortableContent
  content_ColorVariationsImages?: AboutImage[]
  title_RagdollHistory?: string
  content_RagdollHistory?: PortableContent
  title_GrumpyCat?: string
  content_GrumpyCat?: PortableContent
  title_Minks?: string
  content_MinksDescription?: PortableContent
  content_MinksImages?: AboutImage[]
  title_BeCareful?: string
  content_BeCareful?: PortableContent
}

interface AboutPageProps {
  aboutPage: AboutPageData | null
}

const historyCats = [
  { src: fugianna, alt: 'Fugianna Ragdoll cat' },
  { src: daddyWarbucks, alt: 'Daddy Warbucks Ragdoll cat' },
  { src: buckwheat, alt: 'Buckwheat Ragdoll cat' },
] as const

const quickLinks = [
  { href: '#history', label: 'History' },
  { href: '#appearance', label: 'Appearance' },
  { href: '#colors', label: 'Colors' },
  { href: '#minks', label: 'Minks' },
  { href: '#careful', label: 'Buyer Tips' },
] as const

const getImageKey = (image: AboutImage, index: number, prefix: string) =>
  image?._key ??
  image?.asset?._ref ??
  `${prefix}-${image?.name ?? image?.color ?? index}`

const hasContent = (content: PortableContent) =>
  Array.isArray(content) ? content.length > 0 : Boolean(content)

const GallerySection = ({
  images,
  prefix,
}: {
  images?: AboutImage[]
  prefix: string
}) =>
  images?.length ? (
    <ImageContainer>
      {images.map((image, index) => (
        <ImageCircle key={getImageKey(image, index, prefix)} image={image} />
      ))}
    </ImageContainer>
  ) : null

export const getStaticProps: GetStaticProps<AboutPageProps> = async () => {
  const aboutPage = await client.fetch<AboutPageData | null>(`
    *[_type == "aboutPage"][0]{
      title_AboutRagdolls,
      content_AboutRagdolls,
      title_RagdollHistory,
      content_RagdollHistory,
      title_GrumpyCat,
      content_GrumpyCat,
      title_AppearanceRagdolls,
      content_AppearanceRagdolls,
      title_ColorPatterns,
      content_ColorPatterns,
      title_ColorPoints,
      content_ColorPoints,
      content_ColorPointsImages,
      title_ColorVariations,
      content_ColorVariations,
      content_ColorVariationsImages,
      title_Minks,
      content_MinksDescription,
      content_MinksImages,
      title_BeCareful,
      content_BeCareful
    }
  `)

  return {
    props: {
      aboutPage,
    },
    revalidate: 180,
  }
}

const AboutPage = ({ aboutPage }: AboutPageProps) => {
  const {
    title_AboutRagdolls = 'About Ragdolls',
    content_AboutRagdolls,
    title_RagdollHistory = 'Ragdoll History',
    content_RagdollHistory,
    title_GrumpyCat = 'The Grumpy Cat Connection',
    content_GrumpyCat,
    title_AppearanceRagdolls = 'Ragdoll Appearance',
    content_AppearanceRagdolls,
    title_ColorPatterns = 'Color Patterns',
    content_ColorPatterns,
    title_ColorPoints = 'Color Points',
    content_ColorPoints,
    content_ColorPointsImages = [],
    title_ColorVariations = 'White Variations',
    content_ColorVariations,
    content_ColorVariationsImages = [],
    title_Minks = 'Minks',
    content_MinksDescription,
    content_MinksImages = [],
    title_BeCareful = 'Be Careful',
    content_BeCareful,
  } = aboutPage ?? {}

  return (
    <>
      <Seo
        title="About Ragdoll Cats"
        description="Learn about the Ragdoll breed from Azure Sky Ragdolls - exploring history, color patterns, coat variations, and the traits that make these kittens affectionate family pets."
        keywords={[
          'ragdoll cat history',
          'ragdoll colors and patterns',
          'mink ragdoll guide',
        ]}
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About Ragdoll Cats',
            description:
              'Comprehensive overview of Ragdoll cat history, appearance, color patterns, colorpoints, and mink variations published by Azure Sky Ragdolls.',
            url: `${siteMetadata.siteUrl}/About`,
            about: [
              { '@type': 'Thing', name: 'Ragdoll cat history' },
              { '@type': 'Thing', name: 'Ragdoll color patterns' },
              { '@type': 'Thing', name: 'Mink Ragdolls' },
            ],
          },
        ]}
      />

      <Box component="section" id="about" sx={{ pb: { xs: 4, md: 6 } }}>
        <Box
          sx={{
            position: 'relative',
            minHeight: { xs: 420, md: 520 },
            display: 'flex',
            alignItems: 'flex-end',
            overflow: 'hidden',
            color: '#fff',
          }}
        >
          <Image
            src={historyLanding}
            alt="Azure Sky Ragdoll cat"
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: '58% 28%',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg, rgba(15, 23, 42, 0.72) 0%, rgba(15, 23, 42, 0.42) 38%, rgba(15, 23, 42, 0.12) 74%, rgba(15, 23, 42, 0.04) 100%)',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(180deg, rgba(15, 23, 42, 0.08) 0%, rgba(15, 23, 42, 0.34) 100%)',
            }}
          />
          <Container
            maxWidth="lg"
            sx={{
              position: 'relative',
              py: { xs: 4, md: 6 },
              display: 'flex',
              alignItems: 'flex-end',
              minHeight: { xs: 420, md: 520 },
            }}
          >
            <Box sx={{ maxWidth: 720 }}>
              <Typography
                component="h1"
                variant="h3"
                sx={{ fontWeight: 700, mb: 1 }}
              >
                About Ragdoll Cats
              </Typography>
              <Typography variant="h6">
                Learn about the breed&apos;s history, appearance, colors, and
                the traits that make Ragdolls such affectionate family
                companions.
              </Typography>
            </Box>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: { xs: 3, md: 4 } }}>
          <Box
            aria-label="About page sections"
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1.5,
              justifyContent: 'center',
            }}
          >
            {quickLinks.map((link) => (
              <Button
                key={link.href}
                component={Link}
                href={link.href}
                variant="outlined"
                size="small"
              >
                {link.label}
              </Button>
            ))}
          </Box>
        </Container>

        <Container maxWidth="md">
          {hasContent(content_AboutRagdolls) ? (
            <CMSSection
              title={title_AboutRagdolls}
              content={content_AboutRagdolls}
              headerVariant="h3"
            />
          ) : (
            <Typography color="text.secondary" sx={{ my: 3 }}>
              Ragdoll breed information is being updated.
            </Typography>
          )}
        </Container>

        <Box
          component="section"
          id="history"
          sx={{
            scrollMarginTop: { xs: 80, md: 96 },
            py: { xs: 4, md: 6 },
            backgroundColor: 'rgba(14, 165, 233, 0.06)',
          }}
        >
          <Container maxWidth="md">
            {hasContent(content_RagdollHistory) ? (
              <CMSSection
                title={title_RagdollHistory}
                content={content_RagdollHistory}
                headerVariant="h3"
                containerSx={{ mt: 0 }}
              />
            ) : null}
          </Container>

          <Container maxWidth="lg">
            <ImageContainer>
              {historyCats.map((image) => (
                <Image
                  key={image.alt}
                  width={250}
                  height={250}
                  src={image.src}
                  alt={image.alt}
                  style={{
                    borderRadius: 8,
                    objectFit: 'cover',
                    overflow: 'hidden',
                  }}
                />
              ))}
            </ImageContainer>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 280px' },
              gap: { xs: 3, md: 4 },
              alignItems: 'center',
            }}
          >
            {hasContent(content_GrumpyCat) ? (
              <CMSSection
                title={title_GrumpyCat}
                content={content_GrumpyCat}
                headerVariant="h3"
                containerSx={{ mt: 0, mb: 0 }}
              />
            ) : null}
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                src={grumpyCat}
                width={280}
                height={280}
                style={{
                  borderRadius: 8,
                  objectFit: 'cover',
                }}
                alt="Grumpy Cat"
              />
            </Box>
          </Box>
        </Container>

        <Box
          component="section"
          id="appearance"
          sx={{
            scrollMarginTop: { xs: 80, md: 96 },
            py: { xs: 4, md: 6 },
            borderTop: '1px solid',
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Container maxWidth="md">
            {hasContent(content_AppearanceRagdolls) ? (
              <CMSSection
                title={title_AppearanceRagdolls}
                content={content_AppearanceRagdolls}
                headerVariant="h3"
                containerSx={{ mt: 0 }}
              />
            ) : null}
            {hasContent(content_ColorPatterns) ? (
              <CMSSection
                title={title_ColorPatterns}
                content={content_ColorPatterns}
              />
            ) : null}
          </Container>
        </Box>

        <Box
          component="section"
          id="colors"
          sx={{
            scrollMarginTop: { xs: 80, md: 96 },
            py: { xs: 4, md: 6 },
          }}
        >
          <Container maxWidth="md">
            {hasContent(content_ColorPoints) ? (
              <CMSSection
                title={title_ColorPoints}
                content={content_ColorPoints}
                headerVariant="h3"
                containerSx={{ mt: 0 }}
              />
            ) : null}
          </Container>
          <Container maxWidth="lg">
            <GallerySection
              images={content_ColorPointsImages}
              prefix="color-points"
            />
          </Container>

          <Container maxWidth="md">
            {hasContent(content_ColorVariations) ? (
              <CMSSection
                title={title_ColorVariations}
                content={content_ColorVariations}
                headerVariant="h3"
              />
            ) : null}
          </Container>
          <Container maxWidth="lg">
            <GallerySection
              images={content_ColorVariationsImages}
              prefix="color-variations"
            />
          </Container>
        </Box>

        <Box
          component="section"
          id="minks"
          sx={{
            scrollMarginTop: { xs: 80, md: 96 },
            py: { xs: 4, md: 6 },
            backgroundColor: 'rgba(34, 197, 94, 0.06)',
          }}
        >
          <Container maxWidth="md">
            {hasContent(content_MinksDescription) ? (
              <CMSSection
                title={title_Minks}
                content={content_MinksDescription}
                headerVariant="h3"
                containerSx={{ mt: 0 }}
              />
            ) : null}
          </Container>
          <Container maxWidth="lg">
            <GallerySection images={content_MinksImages} prefix="minks" />
          </Container>
        </Box>

        <Box
          component="section"
          id="careful"
          sx={{
            scrollMarginTop: { xs: 80, md: 96 },
            py: { xs: 4, md: 6 },
          }}
        >
          <Container maxWidth="md">
            {hasContent(content_BeCareful) ? (
              <CMSSection
                title={title_BeCareful}
                content={content_BeCareful}
                headerVariant="h3"
                containerSx={{ mt: 0 }}
              />
            ) : null}
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default AboutPage

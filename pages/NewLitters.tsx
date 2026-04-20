import { Box, Button, Container, Typography } from '@mui/material'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import CMSSection from '../components/CMSSection'
import { client } from '../lib/sanity.client'
import Seo from '../components/Seo'
import siteMetadata from '../lib/seoConfig'

type PortableContent = any

interface NewLittersPageData {
  title_newLitters?: string
  content_newLitters?: PortableContent
}

interface NewLittersProps {
  newLitters: NewLittersPageData | null
}

const pageDescription =
  'Track upcoming Azure Sky Ragdolls litters, see expected colors and timelines, and apply to be considered for available kittens or the waitlist.'

const processCards = [
  {
    title: 'Dates are estimates',
    description:
      'Expected timing can shift because every pairing, pregnancy, and kitten develops on its own schedule.',
  },
  {
    title: 'Availability changes',
    description:
      'Reservation counts may change as applications are reviewed and families confirm their plans.',
  },
  {
    title: 'Apply when interested',
    description:
      'Use the adoption application for availability, waitlist, older kitten, or retired breeder requests.',
  },
] as const

export const getStaticProps: GetStaticProps<NewLittersProps> = async () => {
  const newLitters = await client.fetch<NewLittersPageData | null>(
    `*[_type == "newLitters"][0]{
      title_newLitters,
      content_newLitters
    }`
  )

  return {
    props: {
      newLitters,
    },
    revalidate: 180,
  }
}

const NewLitters = ({ newLitters }: NewLittersProps) => {
  const { title_newLitters = 'Upcoming Litters', content_newLitters } =
    newLitters ?? {}

  return (
    <>
      <Seo
        title="New Litters"
        description={pageDescription}
        keywords={[
          'upcoming ragdoll litters',
          'ragdoll kittens availability',
          'reserve ragdoll kitten',
        ]}
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Upcoming Ragdoll Litters',
            url: `${siteMetadata.siteUrl}/NewLitters`,
            description:
              'Projected litter dates, color possibilities, and reservation counts for Azure Sky Ragdolls.',
          },
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
              gridTemplateColumns: { xs: '1fr', md: '1.15fr 0.85fr' },
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
                {title_newLitters}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 720, mb: 3 }}
              >
                {pageDescription}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Button
                  component={Link}
                  href="/Purchasing#purchasing-form"
                  variant="contained"
                  size="large"
                >
                  Apply to Adopt
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
                Interested in a kitten?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Please submit the adoption application for kitten availability
                or waitlist requests. That keeps the process clear and avoids
                asking you for the same information twice.
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
          {processCards.map((card) => (
            <Box
              key={card.title}
              sx={{
                p: 2.5,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                backgroundColor: 'background.paper',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </Box>
          ))}
        </Box>

        {content_newLitters ? (
          <Box component="section" id="upcoming" sx={{ mb: { xs: 4, md: 6 } }}>
            <Container maxWidth="md" disableGutters>
              <CMSSection
                title={title_newLitters}
                content={content_newLitters}
                headerVariant="h3"
                containerSx={{ mt: 0 }}
              />
            </Container>
          </Box>
        ) : null}

        <Box
          sx={{
            mt: { xs: 4, md: 6 },
            p: { xs: 2.5, sm: 3 },
            borderRadius: 2,
            backgroundColor: 'rgba(34, 197, 94, 0.08)',
            border: '1px solid rgba(34, 197, 94, 0.2)',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: 700, mb: 1 }}
          >
            Interested in being considered?
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ maxWidth: 680, mx: 'auto', mb: 2 }}
          >
            Please use the adoption application for availability, waitlist, and
            upcoming litter requests.
          </Typography>
          <Button
            component={Link}
            href="/Purchasing#purchasing-form"
            variant="contained"
            size="large"
          >
            Start Adoption Application
          </Button>
        </Box>
      </Container>
    </>
  )
}

export default NewLitters

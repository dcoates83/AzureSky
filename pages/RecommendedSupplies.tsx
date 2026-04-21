import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded'
import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Typography,
} from '@mui/material'
import { PortableText } from '@portabletext/react'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Seo from '../components/Seo'
import { client } from '../lib/sanity.client'
import siteMetadata from '../lib/seoConfig'

type PortableContent = any

type ProductImage = SanityImageSource & {
  alt?: string
  asset?: {
    _ref?: string
  }
}

interface RecommendedSuppliesPageData {
  title?: string
  intro?: PortableContent
  disclosure?: string
}

interface RecommendedProduct {
  _id: string
  amazonAffiliateUrl: string
  bestFor?: string
  buttonLabel?: string
  category: string
  featured?: boolean
  image?: ProductImage
  shortDescription: string
  title: string
  whyRecommended?: string
}

interface RecommendedSuppliesProps {
  page: RecommendedSuppliesPageData | null
  products: RecommendedProduct[]
}

const fallbackDisclosure =
  'As an Amazon Associate I earn from qualifying purchases.'

const pageDescription =
  'Shop Azure Sky Ragdolls recommended kitten and cat supplies, including grooming tools, litter setup, carriers, toys, and starter kit essentials.'

const builder = imageUrlBuilder(client)

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const getImageUrl = (image?: ProductImage) =>
  image ? builder.image(image).width(760).auto('format').url() : ''

const groupProductsByCategory = (products: RecommendedProduct[]) =>
  products.reduce<Record<string, RecommendedProduct[]>>((groups, product) => {
    const category = product.category || 'Recommended Supplies'

    return {
      ...groups,
      [category]: [...(groups[category] ?? []), product],
    }
  }, {})

const ProductCard = ({ product }: { product: RecommendedProduct }) => {
  const imageUrl = getImageUrl(product.image)

  return (
    <Card
      id={slugify(product.title)}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: '0 8px 24px rgba(15, 23, 42, 0.08)',
        overflow: 'hidden',
        maxWidth: { sm: 340 },
        width: '100%',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          aspectRatio: '4 / 3',
          backgroundColor: '#fff',
          borderBottom: '1px solid',
          borderColor: 'divider',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        {imageUrl ? (
          <Box sx={{ position: 'absolute', inset: { xs: 12, sm: 16 } }}>
            <Image
              src={imageUrl}
              alt={product.image?.alt ?? product.title}
              fill
              sizes="(max-width: 600px) 100vw, 340px"
              style={{ objectFit: 'contain' }}
            />
          </Box>
        ) : (
          <LocalMallRoundedIcon sx={{ fontSize: 56, color: 'primary.main' }} />
        )}
      </Box>

      <CardContent sx={{ flex: 1, p: { xs: 2, sm: 2.25 } }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 1.5 }}>
          <Chip label={product.category} size="small" />
          {product.featured ? (
            <Chip label="Breeder pick" color="primary" size="small" />
          ) : null}
        </Box>

        <Typography
          component="h3"
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 1,
            fontSize: { xs: '1.05rem', sm: '1.12rem' },
            lineHeight: 1.28,
          }}
        >
          {product.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 1.75, lineHeight: 1.55 }}
        >
          {product.shortDescription}
        </Typography>

        {product.bestFor ? (
          <Box sx={{ display: 'flex', gap: 1, mb: 1.5 }}>
            <CheckCircleRoundedIcon color="success" fontSize="small" />
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: 700 }}>
                Best for:
              </Box>{' '}
              {product.bestFor}
            </Typography>
          </Box>
        ) : null}

        {product.whyRecommended ? (
          <Typography variant="body2" color="text.secondary" lineHeight={1.55}>
            {product.whyRecommended}
          </Typography>
        ) : null}
      </CardContent>

      <CardActions sx={{ px: 2.25, pb: 2.25, pt: 0, display: 'block' }}>
        <Button
          href={product.amazonAffiliateUrl}
          target="_blank"
          rel="sponsored noopener noreferrer"
          variant="contained"
          size="medium"
          fullWidth
          endIcon={<OpenInNewRoundedIcon />}
        >
          {product.buttonLabel || 'View on Amazon'}
        </Button>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ display: 'block', mt: 1, textAlign: 'center' }}
        >
          Paid Amazon affiliate link
        </Typography>
      </CardActions>
    </Card>
  )
}

export const getStaticProps: GetStaticProps<
  RecommendedSuppliesProps
> = async () => {
  const [page, products] = await Promise.all([
    client.fetch<RecommendedSuppliesPageData | null>(
      `*[_type == "recommendedSuppliesPage"][0]{
        title,
        intro,
        disclosure
      }`
    ),
    client.fetch<RecommendedProduct[]>(
      `*[_type == "recommendedProduct" && active != false]
      | order(featured desc, category asc, sortOrder asc, title asc){
        _id,
        title,
        category,
        image,
        shortDescription,
        whyRecommended,
        bestFor,
        amazonAffiliateUrl,
        buttonLabel,
        featured
      }`
    ),
  ])

  return {
    props: {
      page,
      products,
    },
    revalidate: 180,
  }
}

const RecommendedSupplies = ({ page, products }: RecommendedSuppliesProps) => {
  const title = page?.title || 'Recommended Supplies'
  const disclosure = page?.disclosure || fallbackDisclosure
  const groupedProducts = React.useMemo(
    () => groupProductsByCategory(products),
    [products]
  )
  const categories = Object.keys(groupedProducts)

  return (
    <>
      <Seo
        title="Recommended Supplies"
        description={pageDescription}
        keywords={[
          'ragdoll kitten supplies',
          'recommended cat supplies',
          'kitten starter kit',
          'ragdoll grooming supplies',
        ]}
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Recommended Supplies for Ragdoll Families',
            url: `${siteMetadata.siteUrl}/RecommendedSupplies`,
            description: pageDescription,
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
              gridTemplateColumns: { xs: '1fr', md: '1.2fr 0.8fr' },
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
                {title}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 760, mb: 3 }}
              >
                Supplies we commonly recommend for new Ragdoll families, from
                kitten setup basics to grooming, travel, litter, and enrichment.
              </Typography>

              {categories.length ? (
                <Box
                  aria-label="Supply categories"
                  sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}
                >
                  {categories.map((category) => (
                    <Button
                      key={category}
                      component={Link}
                      href={`#${slugify(category)}`}
                      variant="outlined"
                      size="small"
                    >
                      {category}
                    </Button>
                  ))}
                </Box>
              ) : null}
            </Box>

            <Card
              sx={{
                p: { xs: 2, sm: 2.5 },
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: '0 8px 24px rgba(15, 23, 42, 0.08)',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                Affiliate disclosure
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {disclosure}
              </Typography>
            </Card>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        {page?.intro ? (
          <Box
            sx={{
              maxWidth: 860,
              mb: { xs: 4, md: 5 },
              color: 'text.primary',
            }}
          >
            <PortableText value={page.intro} />
          </Box>
        ) : null}

        <Alert severity="info" sx={{ mb: { xs: 4, md: 5 } }}>
          Product prices, availability, and details can change on Amazon. Please
          review the Amazon listing before purchasing.
        </Alert>

        {categories.length ? (
          categories.map((category) => (
            <Box
              key={category}
              component="section"
              id={slugify(category)}
              sx={{ mb: { xs: 5, md: 7 }, scrollMarginTop: 96 }}
            >
              <Typography
                component="h2"
                variant="h4"
                sx={{ fontWeight: 700, mb: 2 }}
              >
                {category}
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: 'minmax(0, 1fr)',
                    sm: 'repeat(auto-fit, minmax(260px, 340px))',
                  },
                  gap: { xs: 2.5, md: 3 },
                  alignItems: 'stretch',
                  justifyContent: { xs: 'stretch', sm: 'center' },
                }}
              >
                {groupedProducts[category].map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </Box>
            </Box>
          ))
        ) : (
          <Box
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
              textAlign: 'center',
              backgroundColor: 'background.paper',
            }}
          >
            <Typography component="h2" variant="h5" sx={{ fontWeight: 700 }}>
              Recommended products are being updated.
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1 }}>
              Check back soon for Azure Sky Ragdolls supply recommendations.
            </Typography>
          </Box>
        )}
      </Container>
    </>
  )
}

export default RecommendedSupplies

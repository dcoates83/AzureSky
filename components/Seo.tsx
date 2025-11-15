import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

import siteMetadata from '../lib/seoConfig'

type JsonLd = Record<string, any>

type SeoProps = {
  title?: string
  description?: string
  image?: string
  type?: string
  noIndex?: boolean
  url?: string
  keywords?: string[]
  structuredData?: JsonLd[]
  children?: React.ReactNode
}

const Seo = ({
  title,
  description,
  image,
  type = 'website',
  noIndex = false,
  url,
  keywords = [],
  structuredData = [],
  children,
}: SeoProps) => {
  const router = useRouter()
  const pathFromRouter =
    router?.asPath && router.asPath !== '/'
      ? router.asPath
      : router?.pathname ?? '/'
  const cleanPath = (url || pathFromRouter || '/').split('#')[0].split('?')[0]
  const canonical = `${siteMetadata.siteUrl}${cleanPath === '/' ? '' : cleanPath}`

  const metaTitle = title
    ? `${title} | ${siteMetadata.siteName}`
    : siteMetadata.title
  const metaDescription = description ?? siteMetadata.description
  const metaImage = image
    ? image.startsWith('http')
      ? image
      : `${siteMetadata.siteUrl}${image}`
    : `${siteMetadata.siteUrl}${siteMetadata.socialImage}`

  const metaKeywords = Array.from(
    new Set([...siteMetadata.keywords, ...keywords])
  ).join(', ')
  const robots = noIndex ? 'noindex,nofollow' : 'index,follow'

  const defaultStructuredData: JsonLd[] = [
    {
      '@context': 'https://schema.org',
      '@type': siteMetadata.organizationType,
      name: siteMetadata.siteName,
      url: siteMetadata.siteUrl,
      email: siteMetadata.contactEmail,
      logo: `${siteMetadata.siteUrl}${siteMetadata.socialImage}`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteMetadata.siteName,
      url: siteMetadata.siteUrl,
    },
  ]

  const jsonLdPayload = [...defaultStructuredData, ...structuredData]

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={siteMetadata.siteName} />
      <meta name="robots" content={robots} />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="format-detection" content="telephone=no" />

      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content={siteMetadata.siteName} />
      <meta property="og:locale" content={siteMetadata.locale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {jsonLdPayload.map((schema, index) => (
        <script
          key={`jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {children}
    </Head>
  )
}

export default Seo

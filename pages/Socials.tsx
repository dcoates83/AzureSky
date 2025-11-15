import { Container } from '@mui/material'
import { GetStaticProps, PreviewData } from 'next'

import Script from 'next/script'
import { Query } from 'pages'
import Seo from '../components/Seo'
import siteMetadata from '../lib/seoConfig'

type InstagramPost = {
  id: string
  caption: string
  media_url: string
  permalink: string
  timestamp: string
}
export const getStaticProps: GetStaticProps<
  any,
  Query,
  PreviewData
> = async () => {
  return {
    props: {},
    revalidate: 180,
  }
}
const Socials = () => {
  return (
    <>
      <Seo
        title="Socials"
        description="Browse the latest Azure Sky Ragdolls Instagram, Facebook, and TikTok posts to follow new kittens, litter announcements, and cattery life."
        keywords={[
          'ragdoll breeder instagram',
          'azure sky ragdolls facebook',
          'ragdoll kittens tiktok',
        ]}
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Azure Sky Ragdolls Socials',
            description:
              'Central hub for Azure Sky Ragdolls social media feeds including Instagram, Facebook, and TikTok updates.',
            url: `${siteMetadata.siteUrl}/Socials`,
          },
        ]}
      />
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="worker"
      />
      <Container id="socials" maxWidth="md">
        {/* <!-- Elfsight Instagram Feed | Untitled Instagram Feed --> */}
        {/* <!-- Elfsight Facebook Feed | Untitled Facebook Feed --> */}
        {/* 
        <div
          className="elfsight-app-914e4f2b-0815-4ca9-958e-4d704e96429b"
          data-elfsight-app-lazy
        ></div> */}

        <div
          className="elfsight-app-66ba7413-b498-4fb9-95f1-383d32859e0a"
          data-elfsight-app-lazy
        ></div>
        {/* <!-- Elfsight TikTok Feed | Untitled TikTok Feed --> */}

        <div
          className="elfsight-app-cf2afa3f-9ea3-43db-9783-e7854c90f076"
          data-elfsight-app-lazy
        ></div>
      </Container>
    </>
  )
}

export default Socials

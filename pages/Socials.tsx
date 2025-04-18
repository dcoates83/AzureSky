import { Container } from '@mui/material'
import { GetStaticProps, PreviewData } from 'next'

import Head from 'next/head'
import Script from 'next/script'
import { Query } from 'pages'

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
      <Head>
        <title>Azure Sky - Socials</title>
        <meta
          name="description"
          content="Explore our socials page to stay up-to-date with the latest Ragdoll kittens."
        />

      </Head>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="afterInteractive"
      />
      <Container id="socials" maxWidth="md">
        {/* <!-- Elfsight Instagram Feed | Untitled Instagram Feed --> */}
        {/* <!-- Elfsight Facebook Feed | Untitled Facebook Feed --> */}

        <div
          className="elfsight-app-914e4f2b-0815-4ca9-958e-4d704e96429b"
          data-elfsight-app-lazy
        ></div>

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

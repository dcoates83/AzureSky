import { Container, Divider, Typography } from '@mui/material'
import CMSSection from 'components/CMSSection'
import { GetStaticProps, PreviewData } from 'next'

import Head from 'next/head'
import { client, Query } from 'pages'
import { useEffect, useState } from 'react'

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
        <title>Azure Sky - New Litters</title>
        <meta
          name="description"
          content="Explore our socials page to stay up-to-date with the latest Ragdoll kittens."
        />
      </Head>
      <Container id="socials" maxWidth="md">
        {/* <!-- Elfsight Instagram Feed | Untitled Instagram Feed --> */}
        <script
          src="https://static.elfsight.com/platform/platform.js"
          async
        ></script>
        <div
          class="elfsight-app-66ba7413-b498-4fb9-95f1-383d32859e0a"
          data-elfsight-app-lazy
        ></div>
        {/* <!-- Elfsight TikTok Feed | Untitled TikTok Feed --> */}
        <script
          src="https://static.elfsight.com/platform/platform.js"
          async
        ></script>
        <div
          class="elfsight-app-cf2afa3f-9ea3-43db-9783-e7854c90f076"
          data-elfsight-app-lazy
        ></div>
    
      </Container>
    </>
  )
}

export default Socials

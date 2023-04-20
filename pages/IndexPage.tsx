import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import HeroPost from 'components/HeroPost'
import IndexPageHead from 'components/IndexPageHead'
import Layout from 'components/Layout/Layout'
import MoreStories from 'components/MoreStories'
import IntroTemplate from 'intro-template'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps, PreviewData } from 'next'

import { client, Query } from '.'
import LandingPage from '../components/LandingPage/LandingPage'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
  homePage: any
}
export const getStaticProps: GetStaticProps<any, Query, PreviewData> = async (
  ctx
) => {
  const { preview = false, previewData = {} } = ctx

  const homePage = await client.fetch(`*[_type == "homePage"]`)
  return {
    props: {
      homePage,
      // token: previewData?.token ?? null,
    },
  }
}
export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings, homePage } = props

  return (
    <>
      <IndexPageHead settings={settings} />
      <Container>
        <LandingPage aboutSection={homePage} />
      </Container>
    </>
  )
}

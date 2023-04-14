import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import HeroPost from 'components/HeroPost'
import IndexPageHead from 'components/IndexPageHead'
import Layout from 'components/Layout/Layout'
import MoreStories from 'components/MoreStories'
import IntroTemplate from 'intro-template'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'

import LandingPage from './LandingPage/LandingPage'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
  pages: any
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings, pages } = props

  return (
    <>
      <IndexPageHead settings={settings} />
      <Container>
        <LandingPage aboutSection={pages} />
      </Container>
    </>
  )
}

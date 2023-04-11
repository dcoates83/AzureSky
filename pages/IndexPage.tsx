import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import HeroPost from 'components/HeroPost'
import IndexPageHead from 'components/IndexPageHead'
import Layout from 'components/Layout/BlogLayout'
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
  const [heroPost, ...morePosts] = posts || []
  const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
      <IndexPageHead settings={settings} />

      <Layout preview={preview} loading={loading}>
        <Container>
          <LandingPage aboutSection={pages} />
          {/* <BlogHeader title={title} description={description} level={1} />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
        </Container>
        {/* <IntroTemplate /> */}
      </Layout>
    </>
  )
}

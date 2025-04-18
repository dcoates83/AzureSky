import { getAllPosts, getSettings } from 'lib/sanity.client'
import { Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { createClient } from 'next-sanity'
import IndexPage from 'pages/IndexPage'

interface PageProps {
  posts: Post[]
  settings: Settings
  preview: boolean
  token: string | null
  homePage: any
}

export interface Query {
  [key: string]: string
}

export interface PreviewData {
  token?: string
}

export const client = createClient({
  // projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  // dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  // apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  // useCdn: process.env.NEXT_PUBLIC_SANITY_USE_CDN === 'true',
  projectId: 'wx24r2h9',
  dataset: 'production',
  apiVersion: '2022-11-15',
  useCdn: false,
})
export default function Page(props: PageProps) {
  const { posts, settings, preview, token, homePage } = props

  return <IndexPage posts={posts} settings={settings} homePage={homePage} />
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {} } = ctx

  const [settings, posts = []] = await Promise.all([
    getSettings(),
    getAllPosts(),
  ])
  const homePage = await client.fetch(`*[_type == "homePage"]`)
  return {
    props: {
      homePage,
      posts,
      settings,
      preview,
      token: previewData.token ?? null,
    },
    revalidate: 180,
  }
}

import { client } from 'lib/sanity.client'
import { GetStaticProps } from 'next'
import HomePage, { HomePageData } from 'components/HomePage'

interface PageProps {
  homePage: HomePageData | null
}

export default function Page(props: PageProps) {
  const { homePage } = props

  return <HomePage homePage={homePage} />
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const homePage = await client.fetch<HomePageData | null>(
    `*[_type == "homePage"][0]`
  )
  return {
    props: {
      homePage,
    },
    revalidate: 180,
  }
}

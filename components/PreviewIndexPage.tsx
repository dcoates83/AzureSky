import { usePreview } from 'lib/sanity.preview'
import {
  indexQuery,
  type Post,
  type Settings,
  settingsQuery,
} from 'lib/sanity.queries'
import IndexPage from 'pages/IndexPage'

import { client } from '../pages'

export default function PreviewIndexPage({ token }: { token: null | string }) {
  const posts: Post[] = usePreview(token, indexQuery) || []
  const settings: Settings = usePreview(token, settingsQuery) || {}
  // const settings: Settings = usePreview(token, settingsQuery) || {}
  // const homePage = await client.fetch(`*[_type == "homePage"]`)

  return (
    <></>
    // <IndexPage preview posts={posts} settings={settings} homePage={homePage} />
  )
}

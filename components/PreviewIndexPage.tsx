import { usePreview } from 'lib/sanity.preview'
import {
  indexQuery,
  settingsQuery,
  type Post,
  type Settings,
} from 'lib/sanity.queries'
import IndexPage from 'pages/IndexPage'

export default function PreviewIndexPage({ token }: { token: null | string }) {
  const posts: Post[] = usePreview(token, indexQuery) || []
  const settings: Settings = usePreview(token, settingsQuery) || {}

  return <IndexPage preview posts={posts} settings={settings} />
}

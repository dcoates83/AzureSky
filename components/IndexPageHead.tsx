import { toPlainText } from '@portabletext/react'
import Seo from 'components/Seo'
import * as demo from 'lib/demo.data'
import { Settings } from 'lib/sanity.queries'

export interface IndexPageHeadProps {
  settings: Settings
}

export default function IndexPageHead({ settings }: IndexPageHeadProps) {
  const {
    title = demo.title,
    description = demo.description,
    ogImage = {},
  } = settings
  const ogImageTitle = ogImage?.title || demo.ogImageTitle
  const descriptionText = toPlainText(description)
  const ogImageUrl = `${
    process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''
  }/api/og?${new URLSearchParams({ title: ogImageTitle })}`

  return (
    <Seo
      title={title}
      description={descriptionText}
      image={ogImageUrl}
      structuredData={[
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: title,
          description: descriptionText,
        },
      ]}
    />
  )
}

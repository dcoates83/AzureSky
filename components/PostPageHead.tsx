import Seo from 'components/Seo'
import * as demo from 'lib/demo.data'
import { urlForImage } from 'lib/sanity.image'
import { Post, Settings } from 'lib/sanity.queries'
import siteMetadata from 'lib/seoConfig'

export interface PostPageHeadProps {
  settings: Settings
  post: Post
}

export default function PostPageHead({ settings, post }: PostPageHeadProps) {
  const blogTitle = settings.title ?? demo.title
  const description = post.excerpt ?? demo.description
  const ogImageUrl = post.coverImage?.asset?._ref
    ? urlForImage(post.coverImage).width(1200).height(627).fit('crop').url()
    : undefined
  const relativeUrl = post.slug?.current
    ? `/posts/${post.slug.current}`
    : undefined

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title ?? blogTitle,
      description,
      datePublished: post.date,
      author: post.author?.name
        ? {
            '@type': 'Person',
            name: post.author.name,
          }
        : undefined,
      image: ogImageUrl ? [ogImageUrl] : undefined,
      mainEntityOfPage: relativeUrl
        ? `${siteMetadata.siteUrl}${relativeUrl}`
        : siteMetadata.siteUrl,
    },
  ]

  return (
    <Seo
      title={post.title ?? blogTitle}
      description={description}
      image={ogImageUrl}
      type="article"
      url={relativeUrl}
      structuredData={structuredData}
    />
  )
}

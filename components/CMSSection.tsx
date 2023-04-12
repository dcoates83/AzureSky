import { Box, Theme, Typography, useTheme } from '@mui/material'
import { PortableText } from '@portabletext/react'
import { getImageDimensions } from '@sanity/asset-utils'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import React from 'react'

import { client } from '../pages'
interface CMSSectionProps {
  title: string
  content: any
}

const headerSx = {
  // fontSize: '1.75rem',
  margin: '1em 0',
  textAlign: 'left',
  // fontWeight: '600',
  color: 'primary.light',
}
const ImageComponent = (image) => {
  const { width, height } = getImageDimensions(image.value)
  const builder = imageUrlBuilder(client)
  function urlFor(source) {
    return builder.image(source)
  }
  const theme = useTheme()
  return (
    <Box
      sx={{
        height: 'inherit',
        position: 'relative',
      }}
    >
      <Image
        src={urlFor(image).image(image.value).auto('format').url()}
        alt={image.value.alt || ' '}
        loading="lazy"
        width={width}
        height={height}
        style={{
          // Display alongside text if image appears inside a block text span
          display: image.isInline ? 'inline-block' : 'block',
          borderRadius: theme.shape.borderRadius,
          // Avoid jumping around with aspect-ratio CSS property
          // aspectRatio: width / height,
        }}
      />
    </Box>
  )
}

const CMSSection = (props: CMSSectionProps) => {
  const { title, content } = props

  const components = {
    types: {
      image: ImageComponent,
      // Any other custom types you have in your content
      // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
    },
  }

  return (
    <>
      <Typography variant="h4" sx={headerSx}>
        {title}
      </Typography>

      <Box sx={{ color: 'text.primary' }}>
        {<PortableText value={content} components={components} />}
      </Box>
    </>
  )
}

export default CMSSection

import { Box, Theme, useTheme } from '@mui/material'
import { getImageDimensions } from '@sanity/asset-utils'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import React from 'react'
import { SvgBlob } from 'react-svg-blob'

import { client } from '../pages'

const ImageComponent = ({ image, width, height }) => {
  // const { width, height } = getImageDimensions(image)
  const builder = imageUrlBuilder(client)
  function urlFor(source) {
    return builder.image(source)
  }
  const theme = useTheme()
  return (
    <Image
      src={urlFor(image).image(image).auto('format').url()}
      alt={image.alt || ' '}
      loading="lazy"
      width={height || 300}
      height={width || 300}
      style={{
        // display: image.isInline ? 'inline-block' : 'block',
        aspectRatio: width / height,
        objectFit: 'cover',
        margin: '0 auto',
        borderRadius: '100%',
        border: `2px solid ${theme.palette.grey[500]}`,
        // boxShadow: 1,
      }}
    />
  )
}

export default ImageComponent

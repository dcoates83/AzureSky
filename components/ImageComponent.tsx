import { useTheme } from '@mui/material'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import React from 'react'

import { client } from '../pages'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

interface ImageComponentProps {
  image: SanityImageSource
  width?: number
  height?: number
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  image,
  width,
  height,
}) => {
  // const { width, height } = getImageDimensions(image)
  const builder = imageUrlBuilder(client)
  function urlFor(source: SanityImageSource) {
    return builder.image(source)
  }
  const theme = useTheme()
  return (
    <Image
      src={urlFor(image).image(image).auto('format').url()}
      alt={' '}
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

import { useTheme } from '@mui/material'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import Image from 'next/image'
import React from 'react'

import { client } from '../lib/sanity.client'

interface ImageComponentProps {
  image: SanityImageSource
  alt?: string
  width?: number
  height?: number
}

const builder = imageUrlBuilder(client)

const ImageComponent: React.FC<ImageComponentProps> = ({
  alt = '',
  image,
  width,
  height,
}) => {
  function urlFor(source: SanityImageSource) {
    return builder.image(source)
  }

  const theme = useTheme()
  if (!image) return null

  const imageWidth = width ?? 300
  const imageHeight = height ?? 300
  const imageUrl = urlFor(image)?.image(image)?.auto('format')?.url()

  if (!imageUrl) return null

  return (
    <Image
      src={imageUrl}
      alt={alt}
      loading="lazy"
      width={imageWidth}
      height={imageHeight}
      style={{
        aspectRatio: `${imageWidth} / ${imageHeight}`,
        objectFit: 'cover',
        margin: '0 auto',
        borderRadius: '100%',
        border: `2px solid ${theme.palette.grey[500]}`,
      }}
    />
  )
}

export default ImageComponent

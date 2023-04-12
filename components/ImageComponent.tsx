import { Box, Theme, useTheme } from '@mui/material'
import { getImageDimensions } from '@sanity/asset-utils'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import React from 'react'
import { SvgBlob } from 'react-svg-blob'

import { client } from '../pages'

const ImageComponent = ({ image }) => {
  const { width, height } = getImageDimensions(image)
  const builder = imageUrlBuilder(client)
  function urlFor(source) {
    return builder.image(source)
  }
  const theme = useTheme()

  return (
    <Box
      sx={{
        height: '500px',
        width: '500px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Image
        src={urlFor(image).image(image).auto('format').url()}
        alt={image.alt || ' '}
        loading="lazy"
        width={300}
        height={300}
        style={{
          display: image.isInline ? 'inline-block' : 'block',
          aspectRatio: width / height,
          objectFit: 'cover',
          margin: '0 auto',
          borderRadius: '100%',
          border: `5px solid ${theme.palette.primary.light}`,
        }}
      />

      {/* <SvgBlob
        variant="image"
        image={urlFor(image).image(image).auto('format').url()}
        // image={urlFor(image).image(image.value).auto('format').url()}
        style={{ objectFit: 'contain' }}
        shapeProps={{ edges: 5 }}
      /> */}
    </Box>
  )
}

export default ImageComponent

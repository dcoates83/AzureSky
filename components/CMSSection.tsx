import {
  Box,
  Container,
  SxProps,
  Theme,
  Typography,
  useTheme,
} from '@mui/material'
import { PortableText } from '@portabletext/react'
import { getImageDimensions } from '@sanity/asset-utils'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import React from 'react'
import { SvgBlob } from 'react-svg-blob'

import { Balancer } from 'react-wrap-balancer'
import { client } from '../pages'
interface CMSSectionProps {
  title: string
  content: any
  titleSx?: SxProps<Theme>
  headerVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  contentSx?: SxProps<Theme>
  containerSx?: SxProps<Theme>
  link?: React.ReactNode
}

const headerSx = {
  // fontSize: '1.75rem',
  margin: '1em 0',
  textAlign: 'left',
  textWrap: 'balance',
  // fontWeight: '600',
  // color: 'primary.light',
}

// Maybe generate this from a random blob generator?
// https://www.npmjs.com/package/unique-blob
const ImageComponent = (image) => {
  const { width, height } = getImageDimensions(image.value)
  const builder = imageUrlBuilder(client)
  function urlFor(source) {
    return builder.image(source)
  }
  const theme = useTheme()

  return (
    <Box sx={{ height: '500px', width: '500px', display: 'flex' }}>
      {/* <Image
        src={urlFor(image).image(image.value).auto('format').url()}
        alt={image.value.alt || ' '}
        loading="lazy"
        width={width}
        height={height}
        style={{
          display: image.isInline ? 'inline-block' : 'block',
          borderRadius: theme.shape.borderRadius,
          // Avoid jumping around with aspect-ratio CSS property
          // aspectRatio: width / height,
        }}
      /> */}
      <SvgBlob
        variant="image"
        image={urlFor(image).image(image.value).auto('format').url()}
        shapeProps={{ edges: 5 }}
      />
    </Box>
  )
}

const CMSSection = (props: CMSSectionProps) => {
  const {
    containerSx,
    content,
    contentSx,
    headerVariant,
    link,
    title,
    titleSx,
  } = props

  const components = {
    types: {
      image: ImageComponent,
    },
  }

  return (
    <>
      <Container
        disableGutters
        sx={[
          { mt: 2, mb: 2 },
          ...(Array.isArray(containerSx) ? containerSx : [containerSx]),
        ]}
      >
        <Balancer>
          <Typography variant={headerVariant || 'h4'} sx={titleSx || headerSx}>
            {title ?? title}
          </Typography>
        </Balancer>

        {link}
        <Box
          sx={[
            { color: 'text.primary' },
            ...(Array.isArray(contentSx) ? contentSx : [contentSx]),
          ]}
        >
          {<PortableText value={content} components={components} />}
        </Box>
      </Container>
    </>
  )
}

export default CMSSection

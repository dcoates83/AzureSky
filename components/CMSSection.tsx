import { Box, Container, SxProps, Theme, Typography } from '@mui/material'
import { PortableText } from '@portabletext/react'
import imageUrlBuilder from '@sanity/image-url'
import React from 'react'
import { SvgBlob } from 'react-svg-blob'

import { client } from '../lib/sanity.client'
interface CMSSectionProps {
  title: string
  content: any
  titleSx?: SxProps<Theme>
  headerVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  contentSx?: SxProps<Theme>
  containerSx?: SxProps<Theme>
  link?: React.ReactNode
  titleChildren?: React.ReactNode
}

const headerSx = {
  margin: '1em 0',
  textAlign: 'left',
  textWrap: 'balance',
}

const builder = imageUrlBuilder(client)

const ImageComponent = (image) => {
  function urlFor(source) {
    return builder.image(source)
  }

  return (
    <Box sx={{ height: '500px', width: '500px', display: 'flex' }}>
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
    titleChildren,
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
        <Typography variant={headerVariant || 'h4'} sx={titleSx || headerSx}>
          {title ?? title}
        </Typography>
        {titleChildren}
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

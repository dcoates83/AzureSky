import { Box, Typography } from '@mui/material'
import React from 'react'

import ImageComponent from './ImageComponent'

interface ImageCircleProps {
  image: {
    color?: string
    description?: string
    name?: string
  }
}

const ImageCircle = ({ image }: ImageCircleProps) => {
  const title = image?.name ?? image?.color ?? 'Ragdoll example'

  return (
    <Box
      sx={{
        m: 1,
        textAlign: 'center',
        width: 300,
        minHeight: 420,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1.5,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: 'primary.main',
          fontWeight: 700,
        }}
      >
        {title}
      </Typography>
      <ImageComponent image={image} alt={`${title} Ragdoll example`} />
      {image?.description ? (
        <Typography color="text.secondary">{image.description}</Typography>
      ) : null}
    </Box>
  )
}

export default ImageCircle

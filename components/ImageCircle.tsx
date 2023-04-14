import { Box, Typography } from '@mui/material'
import React from 'react'

import ImageComponent from './ImageComponent'

const ImageCircle = ({ image }) => {
  return (
    <Box
      sx={{
        m: 1,
        textAlign: 'center',
      }}
    >
      {' '}
      <Typography
        variant="h5"
        sx={{
          m: 1,
          color: 'primary.main',
        }}
      >
        {image?.name ?? image?.color}
      </Typography>
      <ImageComponent image={image} />
      <Typography
        sx={{
          p: 1,
        }}
      >
        {image?.description}
      </Typography>
    </Box>
  )
}

export default ImageCircle

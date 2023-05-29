import { Box, Typography } from '@mui/material'
import React from 'react'

import ImageComponent from './ImageComponent'

const ImageCircle = ({ image }) => {
  return (
    <Box
      sx={{
        m: 1,
        textAlign: 'center',
        width: '300px',
        height: '500px',
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
      <ImageComponent image={image} width={undefined} height={undefined} />
      <Typography
        sx={{
          p: 0,
        }}
      >
        {image?.description}
      </Typography>
    </Box>
  )
}

export default ImageCircle

import { Box, Container } from '@mui/material'
import React from 'react'

interface ImageContainerProps {
  children: React.ReactNode
}

const ImageContainer = (props: ImageContainerProps) => {
  const { children } = props
  return (
    <Box
      sx={{
        display: 'flex',
        justifyItems: 'center',
        alignItems: 'center',
        gap: '1em',
        flexWrap: 'wrap',
        justifyContent: 'center',
        mt: 2,
        mb: 2,
      }}
    >
      {children}
    </Box>
  )
}

export default ImageContainer

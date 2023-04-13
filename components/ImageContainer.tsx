import { Box } from '@mui/material'
import React from 'react'

interface ImageContainerProps {
  children: React.ReactNode
}

const ImageContainer = (props) => {
  const { children } = props
  return (
    <Box
      sx={{
        display: 'grid',
        wordBreak: 'keep-all',
        justifyItems: 'center',
        alignItems: 'center',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        columnGap: '4em',
      }}
    >
      {children}
    </Box>
  )
}

export default ImageContainer

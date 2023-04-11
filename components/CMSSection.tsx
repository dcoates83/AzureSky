import { Box, Typography } from '@mui/material'
import React from 'react'

interface CMSSectionProps {
  title: string
  content: any
}

const headerSx = {
  // fontSize: '1.75rem',
  margin: '1em 0',
  textAlign: 'left',
  // fontWeight: '600',
  color: 'primary.light',
}

const CMSSection = (props: CMSSectionProps) => {
  const { title, content } = props
  return (
    <>
      <Typography variant="h4" sx={headerSx}>
        {title}
      </Typography>

      <Box sx={{ color: 'text.primary' }}>{content}</Box>
    </>
  )
}

export default CMSSection

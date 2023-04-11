import { Typography } from '@mui/material'
import React from 'react'

interface SectionSubHeaderProps {
  text: string
}

const SectionSubHeader = (props: SectionSubHeaderProps) => {
  const { text } = props
  return (
    <Typography
      variant="h6"
      sx={{ color: 'primary.main', textAlign: 'center', m: 5 }}
    >
      {text}
    </Typography>
  )
}

export default SectionSubHeader

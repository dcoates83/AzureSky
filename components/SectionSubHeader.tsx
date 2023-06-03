import { Box, Typography } from '@mui/material'
import React from 'react'
import { Balancer } from 'react-wrap-balancer'

interface SectionSubHeaderProps {
  text: string
}

const SectionSubHeader = (props: SectionSubHeaderProps) => {
  const { text } = props
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Balancer>
        <Typography
          variant="h6"
          sx={{ color: 'primary.main', textAlign: 'center', m: 5 }}
        >
          {text}
        </Typography>
      </Balancer>
    </Box>
  )
}

export default SectionSubHeader

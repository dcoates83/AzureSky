import React from 'react'

import { Box, SxProps, Theme, Typography } from '@mui/material'

const noRecordsSx = (theme: Theme) => ({
  padding: theme.spacing(6),
  width: '100%',
  textAlign: 'center',
  color: theme.palette.text.primary,
})

interface NoRecordsProps {
  customSx?: SxProps
}

const NoRecords = (props: NoRecordsProps) => {
  const { customSx } = props

  return (
    <Box
      sx={[noRecordsSx, ...(Array.isArray(customSx) ? customSx : [customSx])]}
    >
      <Typography variant="h6">No records found</Typography>
    </Box>
  )
}

export default NoRecords

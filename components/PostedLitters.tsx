import { Box, Typography } from '@mui/material'

import NewLittersCard from './NewLittersCard'
import NoRecords from './NoRecords'

export interface NewLitterPost {
  _id: string
  colors?: string
  description?: string
  expected?: string
  expirationDate?: string
  image?: any
  quantityRemaining?: number
  reservedPreConception?: number
  reservedPostConception?: number
  title: string
}

interface PostedLittersProps {
  newLittersPosts: NewLitterPost[]
}

const PostedLitters = ({ newLittersPosts }: PostedLittersProps) => {
  return (
    <Box component="section" id="posted-litters" sx={{ scrollMarginTop: 96 }}>
      <Box sx={{ mb: 3 }}>
        <Typography component="h2" variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Posted Litters
        </Typography>
        <Typography color="text.secondary">
          These are the currently posted litters and expected timelines.
          Availability is not guaranteed until applications are reviewed.
        </Typography>
      </Box>

      {newLittersPosts?.length ? (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, minmax(0, 1fr))',
              lg: 'repeat(3, minmax(0, 1fr))',
            },
            gap: 3,
            alignItems: 'stretch',
          }}
        >
          {newLittersPosts.map((newLittersPost) => (
            <NewLittersCard
              key={newLittersPost._id}
              id={newLittersPost._id}
              title={newLittersPost.title}
              image={newLittersPost.image}
              description={newLittersPost.description}
              expected={newLittersPost.expected}
              colors={newLittersPost.colors}
              quantityRemaining={newLittersPost.quantityRemaining}
              reservedPreConception={newLittersPost.reservedPreConception}
              reservedPostConception={newLittersPost.reservedPostConception}
            />
          ))}
        </Box>
      ) : (
        <NoRecords />
      )}
    </Box>
  )
}

export default PostedLitters

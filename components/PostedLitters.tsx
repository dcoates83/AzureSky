import { Container, Divider, Typography } from '@mui/material'
import dayjs from 'dayjs'
import { GetStaticProps, PreviewData } from 'next'
import React from 'react'
import { Query, client } from '../pages'
import newLittersPosts from '../schemas/newLitters/newLittersPosts'
import NewLittersCard from './NewLittersCard'
import NoRecords from './NoRecords'

interface INewLitters {
  expirationDate: string | number | dayjs.Dayjs | Date
  title: string
  image: any
  description: string
  expected: Date
  colors: string
  quantityRemaining: number
  reservedPreConception: number
  reservedPostConception: number
}

const PostedLitters = ({ newLittersPosts }) => {
  return (
    <>
      <Typography variant="h5" sx={{ mt: 2, mb: 2 }}>
        Posted Litters
      </Typography>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Container id="posted-litters" disableGutters sx={{ mt: 2 }}>
        {newLittersPosts?.map((newLittersPost: INewLitters) => {
          return dayjs().isSameOrBefore(newLittersPost.expirationDate) ? (
            <NewLittersCard
              key={new Date().getMilliseconds()}
              title={newLittersPost.title}
              image={newLittersPost.image}
              description={newLittersPost.description}
              expected={newLittersPost.expected}
              colors={newLittersPost.colors}
              quantityRemaining={newLittersPost.quantityRemaining}
              reservedPreConception={newLittersPost.reservedPreConception}
              reservedPostConception={newLittersPost.reservedPostConception}
            />
          ) : (
            <></>
          )
        })}
        {newLittersPosts?.length === 0 && <NoRecords />}
      </Container>
    </>
  )
}

export default PostedLitters

import { Container, Divider, Typography } from '@mui/material'
import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import { GetStaticProps, PreviewData } from 'next'

import Head from 'next/head'
import { client, Query } from '.'
import CMSSection from '../components/CMSSection'
import NewLittersCard from '../components/NewLittersCard'
import NoRecords from '../components/NoRecords'
import SectionSubHeader from '../components/SectionSubHeader'

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

dayjs.extend(isSameOrBefore)
export const getStaticProps: GetStaticProps<any, Query, PreviewData> = async (
  ctx
) => {
  const { preview = false, previewData = {} } = ctx

  const newLitters = await client.fetch(`*[_type == "newLitters"]`)
  const newLittersPosts = await client.fetch(`*[_type == "newLittersPost"]`)
  return {
    props: {
      newLitters,
      newLittersPosts,
      // token: previewData?.token ?? null,
    },
  }
}
const NewLitters = ({ newLitters, newLittersPosts }) => {
  const copy = [...newLitters]

  const { title_newLitters, content_newLitters } = copy.pop()

  return (
    <>
      {/* <MetaTags title="NewLitters" description="NewLitters page" /> */}

      <Head>
        <title>Azure Sky - New Litters</title>
        <meta
          name="description"
          content="Explore our New Litters page to stay up-to-date with the latest Ragdoll kittens. Discover the predicted colors and expected dates of upcoming litters, although Mother Nature has her own plans! Browse through the posted litters, each accompanied by captivating images, detailed descriptions, and information about the available colors. Check the quantity remaining and the number of pre-conception and post-conception reservations. Be sure to keep an eye on this page for exciting updates on our adorable Ragdoll kittens."
        />
      </Head>
      <Container id="upcoming" maxWidth="md">
        <CMSSection title={title_newLitters} content={content_newLitters} />
        <SectionSubHeader
          text="Predicted colors and dates of the kittens will be listed,
but of course Mother Nature does her own thing!"
        />
        <Typography variant="h5" sx={{ mt: 2, mb: 2 }}>
          Posted Litters
        </Typography>
        <Divider sx={{ mt: 2, mb: 2 }}></Divider>
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
      </Container>
    </>
  )
}

export default NewLitters

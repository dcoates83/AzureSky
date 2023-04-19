import { Container, Divider, Typography } from '@mui/material'
import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import { GetStaticProps, PreviewData } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { client, Query } from '.'
import CMSSection from '../components/CMSSection'
import NewLittersCard from '../components/NewLittersCard'

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

  return (
    <>
      {/* <MetaTags title="NewLitters" description="NewLitters page" /> */}
      <section id="upcoming">
        <CMSSection
          title={newLitters[0].title_newLitters}
          content={newLitters[0].content_newLitters}
        />
        <Typography variant="h5" sx={{ mt: 2, mb: 2 }}>
          Posted Litters
        </Typography>
        <Divider sx={{ mt: 2, mb: 2 }}></Divider>
        <Container id="posted-litters" disableGutters sx={{ mt: 2 }}>
          {newLittersPosts?.map((newLittersPost) => {
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
              <>No Records</>
            )
          })}
        </Container>
        {/* </div> */}
      </section>
    </>
  )
}

export default NewLitters

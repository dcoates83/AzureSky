import { Container } from '@mui/material'
import { GetStaticProps, PreviewData } from 'next'

import { client, Query } from '.'
import CMSSection from '../components/CMSSection'
import Seo from '../components/Seo'
import siteMetadata from '../lib/seoConfig'


export const getStaticProps: GetStaticProps<any, Query, PreviewData> = async (
  ctx
) => {

  const newLitters = await client.fetch(`*[_type == "newLitters"]`)
  const newLittersPosts = await client.fetch(`*[_type == "newLittersPost"]`)
  return {
    props: {
      newLitters,
      newLittersPosts,
      // token: previewData?.token ?? null,
    },
    revalidate: 180,
  }
}
const NewLitters = ({ newLitters, newLittersPosts }) => {
  const copy = [...newLitters]

  const { title_newLitters, content_newLitters } = copy.pop()

  return (
    <>
      <Seo
        title="New Litters"
        description="Track upcoming Azure Sky Ragdolls litters, see expected colors and timelines, and learn how many reservations remain for each pairing."
        keywords={[
          'upcoming ragdoll litters',
          'ragdoll kittens availability',
          'reserve ragdoll kitten',
        ]}
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Upcoming Ragdoll Litters',
            url: `${siteMetadata.siteUrl}/NewLitters`,
            description:
              'Projected litter dates, color possibilities, and reservation counts for Azure Sky Ragdolls.',
          },
          ...(newLittersPosts?.length
            ? [
                {
                  '@context': 'https://schema.org',
                  '@type': 'ItemList',
                  itemListElement: newLittersPosts.map(
                    (
                      post: {
                        title: string
                        description: string
                        colors: string
                        expected: string
                        quantityRemaining: number
                      },
                      index: number
                    ) => ({
                      '@type': 'ListItem',
                      position: index + 1,
                      name: post.title,
                      description: `${post.description || ''} Colors: ${
                        post.colors || 'varied'
                      }. Expected: ${post.expected || 'TBA'}.`,
                      url: `${siteMetadata.siteUrl}/NewLitters#posted-litters`,
                      numberOfItems: post.quantityRemaining,
                    })
                  ),
                },
              ]
            : []),
        ]}
      />
      <Container id="upcoming" maxWidth="md">
        <CMSSection title={title_newLitters} content={content_newLitters} />
        {/* <SectionSubHeader
          text="Predicted colors and dates of the kittens will be listed,
                    but of course Mother Nature does her own thing!"
        /> */}
        {/* <PostedLitters newLittersPosts={newLittersPosts} /> */}
      </Container>
    </>
  )
}

export default NewLitters

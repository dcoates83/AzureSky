import { GetStaticProps, PreviewData } from 'next'
import Image from 'next/image'

import { client, Query } from '.'
import CMSSection from '../components/CMSSection'
import NewLittersCard from '../components/NewLittersCard'
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

        <section id="posted-litters">
          <NewLittersCard
            key={new Date().getMilliseconds()}
            title={'Athena & Tao - 2nd litter'}
            image={undefined}
            description={
              'Queen Sapphire and King Tzar are seal bicolor so according to the genetic Punnett Square (a device used to predict kitten colors and markings) 25%- 50% of these kittens will mitted and 50-75% will be Bicolor. All will be seal. These kittens will have the easy care traditional Ragdoll coat where the undercoat is less heavy than other long hair breeds.Sapphire quite bonded to Tzar. They have lovely affectionate kittens every time.'
            }
            expected={new Date()}
            colors={'Seal Bicolor and Mitted Kittens.'}
            quantityRemaining={3}
            reservedPreConception={0}
            reservedPostConception={0}
          />
          {newLittersPosts.map((newLittersPost) => (
            <NewLittersCard
              key={new Date().getMilliseconds()}
              {...newLittersPost}
            />
          ))}
        </section>
        {/* </div> */}
      </section>
    </>
  )
}

export default NewLitters

import { GetStaticProps, PreviewData } from 'next'
import Image from 'next/image'

import { client, Query } from '.'
import CMSSection from '../components/CMSSection'
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
          <h1 className="header-2">Posted Litters</h1>

          <div className="posted ">
            {/* {% for post in site.posts %} */}
            <div className="blog-posted">
              {/* <h2 className="posted-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2> */}
              <a href="{{ post.url | relative_url }}">
                {/* <Image
                    width={300}
                    height={300}
                    className="blog-img"
                    src="{{ post.thumbnail | relative_url}}"
                    alt={''}
                  />{' '} */}
              </a>
              <small>
                {/* <h4 className="expected"><strong>Expected: {{expected }}</strong></h4>   */}
                {/* <p className="click"><a href="{{ post.url | relative_url }}">{{ post.color }}</a></p> */}
                <hr />
                <p className="click">
                  <a href="{{ post.url | relative_url }}">
                    Click for more detail
                  </a>
                </p>
                {/* <h4 className="reserved">{{post.reserved }}</h4> */}
              </small>
              {/* <!-- {{ post.excerpt }} --> */}
            </div>
            {/* {% endfor %} */}
          </div>
        </section>
        {/* </div> */}
      </section>
    </>
  )
}

export default NewLitters

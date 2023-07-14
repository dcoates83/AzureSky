import { Box, Container, Typography } from '@mui/material'
import IndexPageHead from 'components/IndexPageHead'
import Layout from 'components/Layout/Layout'
import MoreStories from 'components/MoreStories'
import IntroTemplate from 'intro-template'
import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps, PreviewData } from 'next'
import uuid from 'react-uuid'

import Head from 'next/head'
import { Query, client } from '.'
import CMSSection from '../components/CMSSection'
import ImageComponent from '../components/ImageComponent'
import ImageContainer from '../components/ImageContainer'
import { HeroLanding } from '../components/LandingPage/HeroLanding'

import SectionSubHeader from '../components/SectionSubHeader'
export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
  homePage: any
}
export const getStaticProps: GetStaticProps<any, Query, PreviewData> = async (
  ctx
) => {
  const { preview = false, previewData = {} } = ctx

  const homePage = await client.fetch(`*[_type == "homePage"]`)
  return {
    props: {
      homePage,
      // token: previewData?.token ?? null,
    },
    revalidate: 180,
  }
}
export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings, homePage } = props
  const copy = [...homePage]

  const {
    title_KingsQueens,
    content_KingsQueens,
    content_KingsQueensImages,
    title_AboutUs,
    content_AboutUs,
    title_Assistants,
    content_Assistants,
    content_ImageAssistants,
  } = copy.pop()

  return (
    <>
      <Head>
        <title>Azure Sky Ragdolls</title>
        <meta
          name="description"
          content="Welcome to Azure Sky Ragdolls! Explore our website to discover a variety of content related to Ragdoll cats. Learn about Kings and Queens, get insights into our cattery, and find information about TICA (The International Cat Association). Discover why owning a purebred Ragdoll is a great choice and how our cats are raised with care. Find out more about our dedicated team, view captivating images of our cats, and immerse yourself in the world of Ragdolls. Join us on this wonderful journey and experience the joy of owning a Ragdoll cat."
        />
      </Head>

      <HeroLanding />

      <Container maxWidth="md">
        <CMSSection title={title_KingsQueens} content={content_KingsQueens} />
      </Container>

      <Container maxWidth="lg">
        <ImageContainer>
          {content_KingsQueensImages.map((image) => (
            <>
              <Box
                sx={{
                  m: 1,
                  textAlign: 'center',
                }}
                key={uuid()}
              >
                <ImageComponent
                  image={image}
                  key={uuid()}
                  width={undefined}
                  height={undefined}
                />
                <Typography
                  key={uuid()}
                  variant="h5"
                  sx={{
                    color: image?.gender ? 'secondary.main' : 'primary.main',
                    m: 1,
                  }}
                >
                  {image?.name}
                </Typography>
              </Box>
            </>
          ))}
        </ImageContainer>
      </Container>
      <Container maxWidth="md">
        {/* TODO - Move to About Ragdolls Section */}
        {/* <section id="purebred">
        <div className="container-text">
          <h1 className="header-2 about">Why own a Purebred Ragdoll?</h1>
          <p>
            A Purebred Ragdoll from an ethical breeder{' '}
            <strong>registered with a credible registry</strong> such as TICA,
            works hard to provide owners with quality, healthy Ragdoll kittens
            <strong>without genetic defects or health problems.</strong>
          </p>
          <p>
            <strong>TICA mandates the breeder follow certain rules. </strong>
            Breeders may NEVER sell a crossbred, and
            <strong>must work to eliminate genetic defects.</strong> All breeds
            are susceptible to their own genetic defects. In Ragdolls the most
            common defects are HCM
            <strong>(hypertrophic cardiomyopathy)</strong> and PKD
            <strong>(polycystic kidney disease)</strong>.
            <em>These usually show up in the second year </em>AFTER you have
            completely fallen in love with your kitten.
          </p>
          <p>
            <em>These defects are</em> <strong>irreversible</strong>
            <em>and cause</em> <strong>death</strong>. HCM is present 30% in
            untested lines! It is entirely devastating to watch your beloved
            kitten suffer. Usually you must put it down to stop its suffering.
          </p>
          <p>
            <strong>
              A quality breeder has worked hard to eliminate genetic defects
            </strong>
            from the lines they sell by buying only quality Kings and Queens,
            and continuously striving to improve the quality of their cats.
            <strong>They do genetic and physical testing</strong> of their Kings
            and Queens to rule out genetic defects and diseases.
          </p>
          <p>
            A good breeder will
            <strong>always provide a Health Guarantee</strong> and a Sales
            Agreement. <em>Your kitten is replaced if genetic defects occur</em>
            , and you have a Legal Agreement to back this up. Unfortunately,
            health guarantees mean higher purchase prices, because it costs us
            more to provide you with those quality kittens.{' '}
            <span className="underline">
              This is worth it because you are avoiding costly health problems
              and devastating heartache.
            </span>
          </p>
          <h2>
            With Azure Sky Ragdolls, you have our
            <br />
            guaranteed support for the life of your kitten.
          </h2>
        </div>
      </section> */}
        {/* <section id="tica">
        <div className="container-text">
          <h4>Why Tica and what is it?</h4>
          <p>
            The International Cat Association (TICA) is respected worldwide as
            the leader registry of cats. Other cat fancy associations exist, but
            currently TICA <em>is the one most sought after </em>for Breeders
            and Cat Fanciers due to its stringent policies protecting and
            <strong>
              {' '}
              promoting the health, welfare, and quality of all purebred cats.
            </strong>
          </p>
          <Image src={tica} alt="tica logo" className="tica" />
          <p>
            As a source of information, we highly recommend accessing
            <a rel="noreferrer" href="http://tica.org">
              <span className="underline"> TICA.org </span>
            </a>
            website. There you can find a wealth of
            <strong> credible and reliable</strong>
            information; about all breeds of cats, their care, spaying and
            neutering, breeding, genetics, cat shows and registration, as well
            as picking a breeder and a kitten. As a breeder/owner we find their
            support second to none, and highly recommend you visit their site
            for current, reliable, and interesting information about all cats.
          </p>
        </div>
      </section> */}
        <CMSSection title={title_AboutUs} content={content_AboutUs} />

        <SectionSubHeader text="All of our cats live with us as part of our family" />
        <CMSSection title={title_Assistants} content={content_Assistants} />
        <ImageContainer>
          {content_ImageAssistants?.map((image) => (
            <ImageComponent
              image={image}
              key={uuid()}
              width={undefined}
              height={undefined}
            />
          ))}
        </ImageContainer>
      </Container>
    </>
  )
}

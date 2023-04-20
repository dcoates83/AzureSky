import { Box, Container, Typography, useMediaQuery } from '@mui/material'
import { GetStaticProps, PreviewData } from 'next'
import React from 'react'

import { client, Query } from '..'
import CMSSection from '../../components/CMSSection'
import ImageComponent from '../../components/ImageComponent'
import ImageContainer from '../../components/ImageContainer'
import SectionSubHeader from '../../components/SectionSubHeader'
import { HeroLanding } from './HeroLanding'

interface LandingPageProps {
  aboutSection: any
}

// export const getStaticProps: GetStaticProps<any, Query, PreviewData> = async (
//   ctx
// ) => {
//   const { preview = false, previewData = {} } = ctx

//   const aboutPage = await client.fetch(`*[_type == "aboutPage"]`)
//   return {
//     props: {
//       aboutPage,
//       // token: previewData?.token ?? null,
//     },
//   }
// }
const LandingPage = (props: LandingPageProps) => {
  const { aboutSection } = props

  return (
    <>
      {/* <MetaTags title="Home" description="Home page" /> */}
      <HeroLanding />
      {/* <Box sx={{ width: '100vw', mb: 20 }}>
        <div className="custom-shape-divider-top-1681342266">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </Box> */}
      <Container maxWidth="md">
        <CMSSection
          title={aboutSection[0]?.title_KingsQueens}
          content={aboutSection[0]?.content_KingsQueens}
        />
      </Container>

      {/* blue for male #279AF1 */}
      <Container maxWidth="lg">
        <ImageContainer>
          {aboutSection[0]?.content_KingsQueensImages.map((image) => (
            <>
              <Box
                sx={{
                  m: 1,
                  textAlign: 'center',
                }}
              >
                <ImageComponent
                  image={image}
                  key={encodeURI(image)}
                  width={undefined}
                  height={undefined}
                />
                <Typography
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
        <CMSSection
          title={aboutSection[0]?.title_AboutUs}
          content={aboutSection[0]?.content_AboutUs}
        />

        <SectionSubHeader text="All of our cats live with us as part of our family" />
        <CMSSection
          title={aboutSection[0]?.title_Assistants}
          content={aboutSection[0]?.content_Assistants}
        />
        <ImageContainer>
          {aboutSection[0]?.content_ImageAssistants?.map((image) => (
            <ImageComponent
              image={image}
              key={image}
              width={undefined}
              height={undefined}
            />
          ))}
        </ImageContainer>
      </Container>
    </>
  )
}

export default LandingPage

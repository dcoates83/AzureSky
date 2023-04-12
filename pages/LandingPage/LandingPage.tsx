import { Box, Button, Theme, Typography, useMediaQuery } from '@mui/material'
import Image from 'next/image'

import aasia from '../../assets/Aasia.jpg'
import aiyla from '../../assets/aiyla.jpg'
import Amethyst from '../../assets/Amethyst.jpg'
import athena from '../../assets/athena-catbed.jpg'
import sapphiresKitten from '../../assets/sapphire-with-kitten.jpg'
import sophia2 from '../../assets/sophia-2.png'
import sophia3 from '../../assets/sophia-3.jpg'
import tica from '../../assets/Tica.png'
import tzarBear from '../../assets/tzar-bear.jpg'
import CMSSection from '../../components/CMSSection'
import SectionSubHeader from '../../components/SectionSubHeader'
import { HeroLanding } from './HeroLanding'

interface LandingPageProps {
  aboutSection: any
}

const LandingPage = (props: LandingPageProps) => {
  const { aboutSection } = props
  // const aboutSection = await client.fetch(`
  //   *[_type == "aboutSection"]{
  //     title,
  //     description
  //   }
  // `)

  return (
    <>
      {/* <MetaTags title="Home" description="Home page" /> */}
      <HeroLanding />
      <CMSSection
        title={aboutSection[0].title_AboutUs}
        content={aboutSection[0].content_AboutUs}
      />

      <SectionSubHeader text="All of our cats live with us as part of our family" />

      <CMSSection
        title={aboutSection[0].title_KingsQueens}
        content={aboutSection[0].content_KingsQueens}
      />
      {/* <section id="queens">
        <CMSSection
          title={aboutSection[0].title_KingsQueens}
          content={aboutSection[0].content_KingsQueens}
        />
        <div className="container-text queens-container">
          <div className="ragdoll-img-container">
            <div className="queen">
              <h4 className="color-header king">Tzar</h4>
              <Image src={tzarBear} alt="Tzar" className="ragdoll-img" />
              <div className="queen-text">
                <p>Mr Mellow, likes to sleep with our dog</p>
              </div>
            </div>
            <div className="queen">
              <h4 className="color-header">Sapphire</h4>
              <Image
                src={sapphiresKitten}
                alt="sapphire"
                className="ragdoll-img"
              />
              <p>She is a real Sweetheart</p>
            </div>
            <div className="queen">
              <h4 className="color-header">Amethys</h4>
              <Image src={Amethyst} alt="amethys" className="ragdoll-img" />
              <p>Amethyst is sweet and snuggly</p>
            </div>
            <div className="queen">
              <h4 className="color-header">Aiyla</h4>
              <Image src={aiyla} alt="ailya" className="ragdoll-img" />
              <p>Still developing her beautiful coat</p>
            </div>
            <div className="queen">
              <h4 className="color-header">Aasia </h4>
              <Image src={aasia} alt="aasia" className="ragdoll-img" />
              <p>She is an absolute Sweet Pea</p>
            </div>
            <div className="queen">
              <h4 className="color-header ">Athena</h4>
              <Image src={athena} alt="athena" className="ragdoll-img" />
              <p>Athena likes to cuddle at bedtime</p>
            </div>
          </div>
          <h2>
            Interested in a Ragdoll{' '}
            <a className="underline" href="./about.html#colors">
              colors?
            </a>
          </h2>
        </div>
      </section> */}

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
        title={aboutSection[0].title_Assistants}
        content={aboutSection[0].content_Assistants}
      />
      {/* <section id="sophia">
        <div className="container-text">
          <h1 className="header-2 center">
            Our assistant kitten worker
            <br />- Nanny Sophia -
          </h1>
          <div className="sophia">
            <Image src={sophia2} alt="sophia" className="ragdoll-img" />
            <Image src={sophia3} alt="sophia" className="ragdoll-img" />
          </div>
          <p>
            Sophia has been raised with cats since she was little; they are part
            of her family. She does offend them to no end when they are grown
            into adults as she insists that she must still clean their face and
            bottoms. As such all the kittens we raise do spend a significant
            amount of time looking like Elvis.
          </p>
          <p>
            We socialize our kittens well. They are part of our home and used to
            all the strange noises and sights most homes have. Nanny Sophia of
            course is constantly “on the job”. The Socialization by us, before
            they&apos;re 2 months old is extremely important to providing you
            happy, well-balanced cat.
          </p>
          <h2>
            All of our animals receive loving attention and are well socialized
            to other cats, people, and dogs.
          </h2>
        </div>
      </section> */}
    </>
  )
}

export default LandingPage
import { Container } from '@mui/material'
import Image from 'next/image'

import aasia from '../assets/aasia-kitten.jpg'
import catTower from '../assets/cat-cattower.jpg'
import deposit from '../assets/kittens-deposit.jpg'
import CMSSection from '../components/CMSSection'
import FaqQuestion from '../components/FaqQuestion'
import Logo from '../public/Logo'

const Purchasing = () => {
  const faqQuestions = [
    {
      question: 'What is Tica',
      answer: `The International Cat Association the world's largest genetic registry of purebred and domestic cats.  <a target="_blank" rel="noreferrer" href="http://tica.org">
        <span className="underline">  Link to TICA</span>`,
    },
    {
      question: 'Are Minks ragdolls?',
      answer: ` Traced back to the original lines via DNA tests, all purebred Mink Ragdolls are recognized by <a target="_blank" rel="noreferrer" href="http://tica.org">
      <span className="underline">  TICA </span>
    </a> as purebred Ragdolls.`,
    },
    {
      question: 'Purebred, or rescue?',
      answer: `By buying a purebred you get genetic health guarantee. With a
                rescue you don't have health guarantee.`,
    },
    {
      question: 'What is your Breeding Program?',
      answer: `We use the Tica Ragdoll  <span className="underline">
      <a
        rel="noreferrer"
        href="https://tica.org/phocadownload/rd.pdf"
      >
       Standards</a></span>
      in our breeding program. To constantly improve our cats.`,
    },
    {
      question: 'Can I breed my Ragdoll?',
      answer: `Unless sold as a breeder all kittens come spayed/neutered`,
    },
    {
      question: 'Should we get a male or a Female?',
      answer: `We have truly found no difference between how social or loving
      they can be. If you prefer a specific sex, we can hold one from
      the upcoming litters if one currently isn't available.`,
    },
    {
      question: 'When can my kitten go home?',
      answer: `Kittens can go home after they are fully recuperated from their
      spay/neutered and from their shots.`,
    },
    {
      question: 'Are Ragdolls good around dogs?',
      answer: `Ragdoll cats are the perfect breed to introduce into a home with
      a dog. They have a mild temperament and personality traits
      similar to a dog’s.`,
    },
    {
      question: 'What color or markings should I get?',
      answer: `Whoever you
      fall in love with!`,
    },
    {
      question: 'How long do Cats Live for?',
      answer: ` Ragdolls are actually <span className="underline">
      <a
        rel="noreferrer"
        href="http://purrfectcatbreeds.com/cat-breeds-list/longest-living-cat-breeds/"
      >
        one of the longest living cat breeds</a></span>, they generally live between 15-20 years.`,
    },
    {
      question: 'Are ragdolls hypoallergenic?',
      answer: `No, this myth comes from their lack of an undercoat. Shedding
      this undercoat is what causes many allergies. So Ragdolls cause
      less allergic reactions.`,
    },
    {
      question: 'What are the ongoing costs of a Cat?',
      answer: `Approx. around $800 -$1000 a year. Check out this
      <span className="underline">
        <a
          rel="noreferrer"
          href="https://www.calgaryhumane.ca/adopt/pet-budget/"
        >
          article
        </a>
      </span>.`,
    },
    {
      question: 'Should I go on a call-list?',
      answer: `Its best to reserve a kitten: Ragdolls are highly coveted so 95%
      of our kittens are sold by reservation with a deposit before
      birth.`,
    },
    {
      question: 'Indoor or Outdoor cat?',
      answer: `Indoor cats live on average 10-15 years, while outdoor cats live
      on average 2-5 years..`,
    },
    {
      question: 'What is a ragdolls personality like?',
      answer: `Ragdoll cats are known to be gentle, loving and sociable.`,
    },
    {
      question: 'Do Ragdolls shed a lot?',
      answer: `The Ragdoll cat is a long haired cat and long haired cats shed.
      It goes with the territory. Less than a normal long haired cat though.`,
    },
    {
      question: 'Do the kittens come litter trained?',
      answer: `Yes, they do!`,
    },
    {
      question: 'Are your cats genetically tested?',
      answer: `<span className="underline"><a rel="noreferrer" href="http://tica.org">
      Tica
    </a></span>
    mandates the breeder strictly follow certain rules. We never
    want to breaks someones heart and sell you unhealthy cat.`,
    },
  ]

  return (
    <>
      {/* <MetaTags
        title="Purchasing"
        description="Before buying your Ragdolls kitten, get an idea of whether or not you can afford a cat for ... Purr-chase Prices – How Much Do Ragdolls Cost?"
      /> */}
      <Container maxWidth="md">
        <section id="purchasing">
          <CMSSection
            title={'Should I go on a call List or should I reserve?'}
            content={undefined}
          />
          <div className="container-text">
            <header>
              <h1 className="header-2">Purchasing a Kitten</h1>
            </header>
            {/* <h3>Should I go on a call List or should I reserve?</h3> */}
            <p>
              <span className="underline">Its best to reserve a kitten:</span>
              Ragdolls are highly coveted so 95% of our kittens are sold by
              reservation with a deposit before birth.
              <span className="bold">
                Only 5% are sold to people on the Call list
              </span>
              since Depositors take most of the kittens. If a kitten does make
              it to the Call List, it usually sells to the first person on the
              list and within 3 hours.
            </p>
            <p>
              If you genuinely want a Ragdoll kitten from a reputable breeder
              get on somebody’s waitlist NOW, and place a deposit. If after
              reading this you decide you do not want one of our kittens, we do
              not mind if you run that information by us about other kittens
              being sold. We do not mind giving you feedback.
            </p>
            <p>
              <span className="bold">Be Careful.</span> Know your Breeder.
              <span className="bold">Scammers</span> and
              <span className="bold">Cat Mills are everywhere.</span>
            </p>
            <p>
              <span className="bold">NEVER buy</span> a kitten on
              <span className="bold">impulse</span> or from someone you have not
              investigated.
            </p>
            <h3>
              The <span className="italic">scary</span> part! Making a Deposit
              to Reserve a Kitten
            </h3>
            <p>
              <span className="underline">
                Placing a deposit reserves a kitten for you.{' '}
              </span>
              Your deposit is <span className="bold">guaranteed</span> to get
              you a kitten. You may pass on a litter and wait for another litter
              to get the kitten you want. Despite concerns about whether they
              get a kitten they like – especially when placing deposits prior to
              the birth of their kitten - we have been exceptionally lucky that
              every new Forever Family has ended up with the kitten they wanted.
            </p>
            <div className="deposit-price">
              <Image
                src={deposit}
                alt="kitten on a couch"
                className="deposit-img"
              />
              <div className="deposit-price-text">
                <h4>Deposit: $1000</h4>
                <h4>Paid by</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 174.271 174.274"
                >
                  <defs>
                    <clipPath id="prefix__a">
                      <path fill="none" d="M0 0h174.271v174.274H0z" />
                    </clipPath>
                  </defs>
                  <g clip-path="url(#prefix__a)">
                    <path
                      d="M16.996 2.97h140.277a14.029 14.029 0 0114.03 14.028v140.28a14.028 14.028 0 01-14.029 14.027H16.994A14.026 14.026 0 012.968 157.28V16.997A14.028 14.028 0 0116.996 2.97z"
                      fill="#fdb913"
                    />
                    <path
                      d="M157.276 2.969a14.03 14.03 0 0114.026 14.029v140.279a14.029 14.029 0 01-14.026 14.028H16.997a14.025 14.025 0 01-14.028-14.028V16.998A14.026 14.026 0 0116.997 2.969h140.279m0-2.969H16.997A17.015 17.015 0 000 16.998v140.279a17.016 17.016 0 0016.997 16.997h140.279a17.015 17.015 0 0016.995-16.997V16.998A17.014 17.014 0 00157.276 0"
                      fill="#fff"
                    />
                    <path
                      d="M96.958 88.954l-.014-30.139 7.867-1.867V60.9s2.038-5.196 6.767-6.402a4.528 4.528 0 012.188-.147v7.69a11.023 11.023 0 00-4.122.858c-2.907 1.148-4.37 3.653-4.37 7.477l.005 16.642zM55.487 98.755s-1.28-1.918-1.28-8.7V75.05l-4.047.963V69.83l4.057-.958v-6.74l8.365-1.975v6.739l5.91-1.404v6.175l-5.91 1.403s-.01 12.295 0 15.28c0 6.949 1.844 8.283 1.844 8.283zM69.367 80.825c0-5.358.763-9.267 2.401-12.267 1.95-3.56 5.145-5.88 9.801-6.94 9.177-2.087 12.49 3.345 12.361 10.629-.049 2.605-.037 3.874-.037 3.874l-16.168 3.8v.26c0 5.09 1.067 7.505 4.292 6.82 2.786-.587 3.561-2.332 3.781-4.49.036-.348.053-1.233.053-1.233l7.574-1.815s.018.62.007 1.316c-.066 2.892-.907 10.066-11.434 12.555-9.972 2.367-12.63-3.723-12.63-12.51m12.537-13.592c-2.679.608-4.084 3.236-4.145 7.59l8.133-1.937c.014-.197.016-.631.014-1.311-.014-3.287-1.03-5.022-4.002-4.342M142.08 63.2c-.314-9.179 2.067-16.464 12.308-18.784 6.527-1.483 9.006.215 10.261 1.856 1.207 1.566 1.673 3.678 1.673 6.636l.007.543-8.012 1.904-.006-1.115c.006-3.508-.969-4.842-3.517-4.204-3.03.761-4.254 3.637-4.254 9.355 0 2.03.01 2.394.01 2.668 0 5.811.793 8.471 4.285 7.74 3.03-.626 3.444-3.286 3.493-5.618.006-.366.021-1.538.021-1.538l8-1.89s.008.591.008 1.248c-.02 7.62-4.036 12.422-11.56 14.173-10.366 2.43-12.396-3.56-12.718-12.974M114.383 76.051c0-6.982 4.09-9.19 10.246-11.737 5.536-2.29 5.656-3.427 5.679-5.417.03-1.675-.746-3.108-3.502-2.405a4.16 4.16 0 00-3.336 3.943 14.368 14.368 0 00-.052 1.547l-7.762 1.833a15.442 15.442 0 01.536-4.586c1.24-4.175 4.923-6.984 11.279-8.455 8.258-1.903 11.01 1.721 11.02 7.358v13.349c0 6.456 1.199 7.402 1.199 7.402l-7.62 1.803a16.56 16.56 0 01-1.021-2.737s-1.67 4.204-7.423 5.556c-6.043 1.425-9.243-2.32-9.243-7.454m15.872-9.534a28.771 28.771 0 01-4.054 2.374c-2.54 1.241-3.688 2.772-3.688 5.13 0 2.042 1.265 3.383 3.564 2.815 2.466-.622 4.178-2.923 4.178-6.12zM11.749 119.882a4.837 4.837 0 01-4.053-7.468l.054-.07.09-.024 11.379-2.686v8.641l-.177.041a396.424 396.424 0 01-6.301 1.463 4.758 4.758 0 01-.992.103M11.749 130.936a4.83 4.83 0 01-4.831-4.825 4.779 4.779 0 01.778-2.627l.054-.08.09-.024 11.379-2.685v8.641l-.177.046c-2.581.62-5.666 1.334-6.301 1.461a5.116 5.116 0 01-.992.093M11.749 142.012a4.834 4.834 0 01-4.831-4.83 4.762 4.762 0 01.778-2.626l.054-.087 11.469-2.703v8.64l-.177.047c-2.726.656-5.753 1.34-6.301 1.46a5.04 5.04 0 01-.992.099M10.406 109.294l-.003-48.349 8.815-2.083v48.348l-8.812 2.084zM32.362 105.18a5.439 5.439 0 10-10.877 0l.01 45.19a14.744 14.744 0 0014.715 14.726c4.117 0 15.395-.02 15.395-.02l.005-18.852.005-21.023a7.12 7.12 0 00-3.163-5.927l-13.72-9.32-.004 21.163a1.17 1.17 0 11-2.34 0c0-.227-.026-23.141-.026-25.936M39.707 71.465a11.892 11.892 0 00-7.846 6.066v-3.398l-7.937 1.878.01 21.7a8.12 8.12 0 018.356 1.461v-14.01c0-3.357 1.67-6.038 4.056-6.564 1.795-.394 3.294.248 3.294 3.445l.006 20.442 8.36-1.96V78.9c0-5.243-2.019-8.908-8.299-7.435M161.173 40.52a5.168 5.168 0 115.163-5.164 5.17 5.17 0 01-5.163 5.165m0-9.685a4.519 4.519 0 104.518 4.52 4.524 4.524 0 00-4.518-4.52"
                      fill="#231f20"
                    />
                    <path
                      d="M159.291 32.277h2.227a1.456 1.456 0 011.601 1.62c0 .819-.363 1.448-1.05 1.555v.012c.625.064.954.409.986 1.296.012.4.018.896.037 1.282a.65.65 0 00.3.545h-1.139a1.05 1.05 0 01-.17-.56c-.035-.377-.026-.733-.043-1.191-.017-.688-.228-.99-.919-.99h-.824v2.74h-1.006zm1.812 2.81a.928.928 0 001.007-1.023c0-.673-.29-1.027-.954-1.027h-.859v2.05z"
                      fill="#231f20"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="deposit-question">
              <p>
                <strong>Why are deposits so much?</strong>
              </p>
              <p>Simple, it shows who is serious about getting a kitten.</p>
            </div>
            <div className="deposit-question">
              <p>
                <strong>
                  Your deposit freezes your kitten price for 1 year.
                </strong>
              </p>
              <p>
                Due to inflation of increasing costs of genetic testing,
                veterinary care and etc, our prices need to reflect that. If you
                have not picked a kitten within 1 year, then your price is
                subject to change. If for a serious reason you cannot take a
                kitten within 1 year (for example you got cancer, or the litters
                are late) we can return your deposit or continue to freeze your
                price.
              </p>
            </div>
            <div className="deposit-question">
              <p>
                <strong>
                  You may change your mind about what kitten type you prefer!
                </strong>
              </p>
              <p>
                Except those Depositors who choose a 2-litter limit placed on
                their contract, Depositors may change their mind about sex,
                color, coat, or markings they want.
              </p>
            </div>
            <div className="deposit-question">
              <p>
                <strong>
                  The earlier you place a deposit, the higher up the line you
                  are for choosing a kitten!
                </strong>
              </p>
              <p>
                Our kittens are offered to people
                <span className="underline">
                  in the order of that the deposits received
                </span>
                ; Meaning, first come, first served. Depositors may choose a
                kitten from a posted litter or wait for one of the next upcoming
                litters.
                <span className="underline">
                  Once chosen, that kitten is now reserved.
                </span>
                As soon as Depositor picks or passes on a specific kitten, the
                next person in line then makes their pick or pass and so on.
                This is the only fair way to do it.
              </p>
            </div>
            <div className="deposit-contract-info">
              <h2>
                A Sales Agreement will be written up for the buyers protection.
              </h2>
            </div>
            <h4>Deposits are Non-Refundable with these exceptions:</h4>
            <p>
              After the deposit has been paid, but before the Buyer has picked
              up their kitten:
            </p>
            <ol>
              <li>
                Should the kitten die or be severely injured or develop an
                incurable life-threatening genetic defect, the Buyer will
                receive a kitten of comparable value as soon as one is
                available. Should a suitable kitten not be available within one
                year of the deposit, a full refund of the deposit will be given.
              </li>
              <li>
                Should we decide for whatever reason the Depositor might be an
                unsuitable home, we will return your deposit. It is typical that
                these people are very unhappy, and we apologize, but all
                breeders reserve the right to ensure kittens go only to good
                homes.
              </li>
            </ol>
          </div>
        </section>
        <section id="guarantee">
          <div className="container-text">
            <header>
              <h1 className="header-2">
                What does my Ragdoll kitten come with?
              </h1>
            </header>
            <div className="guarantee-grid">
              <div className="guarantee-grid-list">
                <ul className="going-home">
                  <li>
                    <svg
                      height="384pt"
                      viewBox="0 0 384 384"
                      width="384pt"
                      xmlns="http://www.w3.org/2000/svg"
                      className="checkmark"
                    >
                      <path d="m192 384c105.863281 0 192-86.128906 192-192 0-18.273438-2.550781-36.28125-7.601562-53.527344-2.488282-8.480468-11.34375-13.351562-19.847657-10.863281-8.488281 2.480469-13.34375 11.367187-10.863281 19.847656 4.183594 14.328125 6.3125 29.320313 6.3125 44.542969 0 88.222656-71.777344 160-160 160s-160-71.777344-160-160 71.777344-160 160-160c32.0625 0 62.910156 9.375 89.207031 27.105469 7.320313 4.941406 17.273438 3 22.207031-4.320313 4.9375-7.328125 3.011719-17.273437-4.316406-22.210937-31.601562-21.308594-68.632812-32.574219-107.097656-32.574219-105.863281 0-192 86.128906-192 192s86.136719 192 192 192zm0 0" />
                      <path d="m356.6875 36.6875-164.6875 164.679688-52.6875-52.679688c-6.25-6.246094-16.375-6.246094-22.625 0-6.246094 6.25-6.246094 16.375 0 22.625l64 64c3.128906 3.128906 7.214844 4.6875 11.3125 4.6875s8.183594-1.558594 11.3125-4.6875l176-176c6.246094-6.25 6.246094-16.375 0-22.625-6.25-6.246094-16.375-6.246094-22.625 0zm0 0" />
                    </svg>
                    The <strong>1st</strong>,
                    <strong className="bold"> 2nd</strong>, and
                    <strong> 3rd</strong> set of vaccines
                  </li>
                  <li>
                    <svg
                      height="384pt"
                      viewBox="0 0 384 384"
                      width="384pt"
                      xmlns="http://www.w3.org/2000/svg"
                      className="checkmark"
                    >
                      <path d="m192 384c105.863281 0 192-86.128906 192-192 0-18.273438-2.550781-36.28125-7.601562-53.527344-2.488282-8.480468-11.34375-13.351562-19.847657-10.863281-8.488281 2.480469-13.34375 11.367187-10.863281 19.847656 4.183594 14.328125 6.3125 29.320313 6.3125 44.542969 0 88.222656-71.777344 160-160 160s-160-71.777344-160-160 71.777344-160 160-160c32.0625 0 62.910156 9.375 89.207031 27.105469 7.320313 4.941406 17.273438 3 22.207031-4.320313 4.9375-7.328125 3.011719-17.273437-4.316406-22.210937-31.601562-21.308594-68.632812-32.574219-107.097656-32.574219-105.863281 0-192 86.128906-192 192s86.136719 192 192 192zm0 0" />
                      <path d="m356.6875 36.6875-164.6875 164.679688-52.6875-52.679688c-6.25-6.246094-16.375-6.246094-22.625 0-6.246094 6.25-6.246094 16.375 0 22.625l64 64c3.128906 3.128906 7.214844 4.6875 11.3125 4.6875s8.183594-1.558594 11.3125-4.6875l176-176c6.246094-6.25 6.246094-16.375 0-22.625-6.25-6.246094-16.375-6.246094-22.625 0zm0 0" />
                    </svg>
                    All kittens will be
                    <span className="bold">dewormed </span>a minimum 4x
                  </li>
                  <li>
                    <svg
                      height="384pt"
                      viewBox="0 0 384 384"
                      width="384pt"
                      xmlns="http://www.w3.org/2000/svg"
                      className="checkmark"
                    >
                      <path d="m192 384c105.863281 0 192-86.128906 192-192 0-18.273438-2.550781-36.28125-7.601562-53.527344-2.488282-8.480468-11.34375-13.351562-19.847657-10.863281-8.488281 2.480469-13.34375 11.367187-10.863281 19.847656 4.183594 14.328125 6.3125 29.320313 6.3125 44.542969 0 88.222656-71.777344 160-160 160s-160-71.777344-160-160 71.777344-160 160-160c32.0625 0 62.910156 9.375 89.207031 27.105469 7.320313 4.941406 17.273438 3 22.207031-4.320313 4.9375-7.328125 3.011719-17.273437-4.316406-22.210937-31.601562-21.308594-68.632812-32.574219-107.097656-32.574219-105.863281 0-192 86.128906-192 192s86.136719 192 192 192zm0 0" />
                      <path d="m356.6875 36.6875-164.6875 164.679688-52.6875-52.679688c-6.25-6.246094-16.375-6.246094-22.625 0-6.246094 6.25-6.246094 16.375 0 22.625l64 64c3.128906 3.128906 7.214844 4.6875 11.3125 4.6875s8.183594-1.558594 11.3125-4.6875l176-176c6.246094-6.25 6.246094-16.375 0-22.625-6.25-6.246094-16.375-6.246094-22.625 0zm0 0" />
                    </svg>
                    Multiple veterinary health checks, done by a veterinary
                    Feline Specialist certifying the kitten is healthy (minimum
                    of 2x)
                  </li>
                  <li>
                    <svg
                      height="384pt"
                      viewBox="0 0 384 384"
                      width="384pt"
                      xmlns="http://www.w3.org/2000/svg"
                      className="checkmark"
                    >
                      <path d="m192 384c105.863281 0 192-86.128906 192-192 0-18.273438-2.550781-36.28125-7.601562-53.527344-2.488282-8.480468-11.34375-13.351562-19.847657-10.863281-8.488281 2.480469-13.34375 11.367187-10.863281 19.847656 4.183594 14.328125 6.3125 29.320313 6.3125 44.542969 0 88.222656-71.777344 160-160 160s-160-71.777344-160-160 71.777344-160 160-160c32.0625 0 62.910156 9.375 89.207031 27.105469 7.320313 4.941406 17.273438 3 22.207031-4.320313 4.9375-7.328125 3.011719-17.273437-4.316406-22.210937-31.601562-21.308594-68.632812-32.574219-107.097656-32.574219-105.863281 0-192 86.128906-192 192s86.136719 192 192 192zm0 0" />
                      <path d="m356.6875 36.6875-164.6875 164.679688-52.6875-52.679688c-6.25-6.246094-16.375-6.246094-22.625 0-6.246094 6.25-6.246094 16.375 0 22.625l64 64c3.128906 3.128906 7.214844 4.6875 11.3125 4.6875s8.183594-1.558594 11.3125-4.6875l176-176c6.246094-6.25 6.246094-16.375 0-22.625-6.25-6.246094-16.375-6.246094-22.625 0zm0 0" />
                    </svg>
                    A <span className="bold">genetic health guarantee</span>
                  </li>
                  <li>
                    <svg
                      height="384pt"
                      viewBox="0 0 384 384"
                      width="384pt"
                      xmlns="http://www.w3.org/2000/svg"
                      className="checkmark"
                    >
                      <path d="m192 384c105.863281 0 192-86.128906 192-192 0-18.273438-2.550781-36.28125-7.601562-53.527344-2.488282-8.480468-11.34375-13.351562-19.847657-10.863281-8.488281 2.480469-13.34375 11.367187-10.863281 19.847656 4.183594 14.328125 6.3125 29.320313 6.3125 44.542969 0 88.222656-71.777344 160-160 160s-160-71.777344-160-160 71.777344-160 160-160c32.0625 0 62.910156 9.375 89.207031 27.105469 7.320313 4.941406 17.273438 3 22.207031-4.320313 4.9375-7.328125 3.011719-17.273437-4.316406-22.210937-31.601562-21.308594-68.632812-32.574219-107.097656-32.574219-105.863281 0-192 86.128906-192 192s86.136719 192 192 192zm0 0" />
                      <path d="m356.6875 36.6875-164.6875 164.679688-52.6875-52.679688c-6.25-6.246094-16.375-6.246094-22.625 0-6.246094 6.25-6.246094 16.375 0 22.625l64 64c3.128906 3.128906 7.214844 4.6875 11.3125 4.6875s8.183594-1.558594 11.3125-4.6875l176-176c6.246094-6.25 6.246094-16.375 0-22.625-6.25-6.246094-16.375-6.246094-22.625 0zm0 0" />
                    </svg>
                    Contact information for our veterinarian
                  </li>
                  <li>
                    <svg
                      height="384pt"
                      viewBox="0 0 384 384"
                      width="384pt"
                      xmlns="http://www.w3.org/2000/svg"
                      className="checkmark"
                    >
                      <path d="m192 384c105.863281 0 192-86.128906 192-192 0-18.273438-2.550781-36.28125-7.601562-53.527344-2.488282-8.480468-11.34375-13.351562-19.847657-10.863281-8.488281 2.480469-13.34375 11.367187-10.863281 19.847656 4.183594 14.328125 6.3125 29.320313 6.3125 44.542969 0 88.222656-71.777344 160-160 160s-160-71.777344-160-160 71.777344-160 160-160c32.0625 0 62.910156 9.375 89.207031 27.105469 7.320313 4.941406 17.273438 3 22.207031-4.320313 4.9375-7.328125 3.011719-17.273437-4.316406-22.210937-31.601562-21.308594-68.632812-32.574219-107.097656-32.574219-105.863281 0-192 86.128906-192 192s86.136719 192 192 192zm0 0" />
                      <path d="m356.6875 36.6875-164.6875 164.679688-52.6875-52.679688c-6.25-6.246094-16.375-6.246094-22.625 0-6.246094 6.25-6.246094 16.375 0 22.625l64 64c3.128906 3.128906 7.214844 4.6875 11.3125 4.6875s8.183594-1.558594 11.3125-4.6875l176-176c6.246094-6.25 6.246094-16.375 0-22.625-6.25-6.246094-16.375-6.246094-22.625 0zm0 0" />
                    </svg>
                    Veterinary Health Record booklet for your kitten
                  </li>
                  <li>
                    <svg
                      height="384pt"
                      viewBox="0 0 384 384"
                      width="384pt"
                      xmlns="http://www.w3.org/2000/svg"
                      className="checkmark"
                    >
                      <path d="m192 384c105.863281 0 192-86.128906 192-192 0-18.273438-2.550781-36.28125-7.601562-53.527344-2.488282-8.480468-11.34375-13.351562-19.847657-10.863281-8.488281 2.480469-13.34375 11.367187-10.863281 19.847656 4.183594 14.328125 6.3125 29.320313 6.3125 44.542969 0 88.222656-71.777344 160-160 160s-160-71.777344-160-160 71.777344-160 160-160c32.0625 0 62.910156 9.375 89.207031 27.105469 7.320313 4.941406 17.273438 3 22.207031-4.320313 4.9375-7.328125 3.011719-17.273437-4.316406-22.210937-31.601562-21.308594-68.632812-32.574219-107.097656-32.574219-105.863281 0-192 86.128906-192 192s86.136719 192 192 192zm0 0" />
                      <path d="m356.6875 36.6875-164.6875 164.679688-52.6875-52.679688c-6.25-6.246094-16.375-6.246094-22.625 0-6.246094 6.25-6.246094 16.375 0 22.625l64 64c3.128906 3.128906 7.214844 4.6875 11.3125 4.6875s8.183594-1.558594 11.3125-4.6875l176-176c6.246094-6.25 6.246094-16.375 0-22.625-6.25-6.246094-16.375-6.246094-22.625 0zm0 0" />
                    </svg>
                    <span className="bold"> Fully litter trained</span>
                  </li>
                  <li>
                    <svg
                      height="384pt"
                      viewBox="0 0 384 384"
                      width="384pt"
                      xmlns="http://www.w3.org/2000/svg"
                      className="checkmark"
                    >
                      <path d="m192 384c105.863281 0 192-86.128906 192-192 0-18.273438-2.550781-36.28125-7.601562-53.527344-2.488282-8.480468-11.34375-13.351562-19.847657-10.863281-8.488281 2.480469-13.34375 11.367187-10.863281 19.847656 4.183594 14.328125 6.3125 29.320313 6.3125 44.542969 0 88.222656-71.777344 160-160 160s-160-71.777344-160-160 71.777344-160 160-160c32.0625 0 62.910156 9.375 89.207031 27.105469 7.320313 4.941406 17.273438 3 22.207031-4.320313 4.9375-7.328125 3.011719-17.273437-4.316406-22.210937-31.601562-21.308594-68.632812-32.574219-107.097656-32.574219-105.863281 0-192 86.128906-192 192s86.136719 192 192 192zm0 0" />
                      <path d="m356.6875 36.6875-164.6875 164.679688-52.6875-52.679688c-6.25-6.246094-16.375-6.246094-22.625 0-6.246094 6.25-6.246094 16.375 0 22.625l64 64c3.128906 3.128906 7.214844 4.6875 11.3125 4.6875s8.183594-1.558594 11.3125-4.6875l176-176c6.246094-6.25 6.246094-16.375 0-22.625-6.25-6.246094-16.375-6.246094-22.625 0zm0 0" />
                    </svg>{' '}
                    Completely weaned onto dry and wet foods
                  </li>
                  <li>
                    <svg
                      height="384pt"
                      viewBox="0 0 384 384"
                      width="384pt"
                      xmlns="http://www.w3.org/2000/svg"
                      className="checkmark"
                    >
                      <path d="m192 384c105.863281 0 192-86.128906 192-192 0-18.273438-2.550781-36.28125-7.601562-53.527344-2.488282-8.480468-11.34375-13.351562-19.847657-10.863281-8.488281 2.480469-13.34375 11.367187-10.863281 19.847656 4.183594 14.328125 6.3125 29.320313 6.3125 44.542969 0 88.222656-71.777344 160-160 160s-160-71.777344-160-160 71.777344-160 160-160c32.0625 0 62.910156 9.375 89.207031 27.105469 7.320313 4.941406 17.273438 3 22.207031-4.320313 4.9375-7.328125 3.011719-17.273437-4.316406-22.210937-31.601562-21.308594-68.632812-32.574219-107.097656-32.574219-105.863281 0-192 86.128906-192 192s86.136719 192 192 192zm0 0" />
                      <path d="m356.6875 36.6875-164.6875 164.679688-52.6875-52.679688c-6.25-6.246094-16.375-6.246094-22.625 0-6.246094 6.25-6.246094 16.375 0 22.625l64 64c3.128906 3.128906 7.214844 4.6875 11.3125 4.6875s8.183594-1.558594 11.3125-4.6875l176-176c6.246094-6.25 6.246094-16.375 0-22.625-6.25-6.246094-16.375-6.246094-22.625 0zm0 0" />
                    </svg>
                    72 hour supply of current dry and wet food
                  </li>
                  <li>
                    <svg
                      height="384pt"
                      viewBox="0 0 384 384"
                      width="384pt"
                      xmlns="http://www.w3.org/2000/svg"
                      className="checkmark"
                    >
                      <path d="m192 384c105.863281 0 192-86.128906 192-192 0-18.273438-2.550781-36.28125-7.601562-53.527344-2.488282-8.480468-11.34375-13.351562-19.847657-10.863281-8.488281 2.480469-13.34375 11.367187-10.863281 19.847656 4.183594 14.328125 6.3125 29.320313 6.3125 44.542969 0 88.222656-71.777344 160-160 160s-160-71.777344-160-160 71.777344-160 160-160c32.0625 0 62.910156 9.375 89.207031 27.105469 7.320313 4.941406 17.273438 3 22.207031-4.320313 4.9375-7.328125 3.011719-17.273437-4.316406-22.210937-31.601562-21.308594-68.632812-32.574219-107.097656-32.574219-105.863281 0-192 86.128906-192 192s86.136719 192 192 192zm0 0" />
                      <path d="m356.6875 36.6875-164.6875 164.679688-52.6875-52.679688c-6.25-6.246094-16.375-6.246094-22.625 0-6.246094 6.25-6.246094 16.375 0 22.625l64 64c3.128906 3.128906 7.214844 4.6875 11.3125 4.6875s8.183594-1.558594 11.3125-4.6875l176-176c6.246094-6.25 6.246094-16.375 0-22.625-6.25-6.246094-16.375-6.246094-22.625 0zm0 0" />
                    </svg>
                    Familiarized to travel crate which is important for the ride
                    home!
                  </li>
                  <li>
                    <svg
                      height="384pt"
                      viewBox="0 0 384 384"
                      width="384pt"
                      xmlns="http://www.w3.org/2000/svg"
                      className="checkmark"
                    >
                      <path d="m192 384c105.863281 0 192-86.128906 192-192 0-18.273438-2.550781-36.28125-7.601562-53.527344-2.488282-8.480468-11.34375-13.351562-19.847657-10.863281-8.488281 2.480469-13.34375 11.367187-10.863281 19.847656 4.183594 14.328125 6.3125 29.320313 6.3125 44.542969 0 88.222656-71.777344 160-160 160s-160-71.777344-160-160 71.777344-160 160-160c32.0625 0 62.910156 9.375 89.207031 27.105469 7.320313 4.941406 17.273438 3 22.207031-4.320313 4.9375-7.328125 3.011719-17.273437-4.316406-22.210937-31.601562-21.308594-68.632812-32.574219-107.097656-32.574219-105.863281 0-192 86.128906-192 192s86.136719 192 192 192zm0 0" />
                      <path d="m356.6875 36.6875-164.6875 164.679688-52.6875-52.679688c-6.25-6.246094-16.375-6.246094-22.625 0-6.246094 6.25-6.246094 16.375 0 22.625l64 64c3.128906 3.128906 7.214844 4.6875 11.3125 4.6875s8.183594-1.558594 11.3125-4.6875l176-176c6.246094-6.25 6.246094-16.375 0-22.625-6.25-6.246094-16.375-6.246094-22.625 0zm0 0" />
                    </svg>
                    A soft crate pad for your kitten
                  </li>
                  <li>
                    <svg
                      height="384pt"
                      viewBox="0 0 384 384"
                      width="384pt"
                      xmlns="http://www.w3.org/2000/svg"
                      className="checkmark"
                    >
                      <path d="m192 384c105.863281 0 192-86.128906 192-192 0-18.273438-2.550781-36.28125-7.601562-53.527344-2.488282-8.480468-11.34375-13.351562-19.847657-10.863281-8.488281 2.480469-13.34375 11.367187-10.863281 19.847656 4.183594 14.328125 6.3125 29.320313 6.3125 44.542969 0 88.222656-71.777344 160-160 160s-160-71.777344-160-160 71.777344-160 160-160c32.0625 0 62.910156 9.375 89.207031 27.105469 7.320313 4.941406 17.273438 3 22.207031-4.320313 4.9375-7.328125 3.011719-17.273437-4.316406-22.210937-31.601562-21.308594-68.632812-32.574219-107.097656-32.574219-105.863281 0-192 86.128906-192 192s86.136719 192 192 192zm0 0" />
                      <path d="m356.6875 36.6875-164.6875 164.679688-52.6875-52.679688c-6.25-6.246094-16.375-6.246094-22.625 0-6.246094 6.25-6.246094 16.375 0 22.625l64 64c3.128906 3.128906 7.214844 4.6875 11.3125 4.6875s8.183594-1.558594 11.3125-4.6875l176-176c6.246094-6.25 6.246094-16.375 0-22.625-6.25-6.246094-16.375-6.246094-22.625 0zm0 0" />
                    </svg>
                    “Going Home Packet” with many helpful Kitten Care and
                    Information pamphlets
                  </li>
                  <li>
                    <svg
                      height="384pt"
                      viewBox="0 0 384 384"
                      width="384pt"
                      xmlns="http://www.w3.org/2000/svg"
                      className="checkmark"
                    >
                      <path d="m192 384c105.863281 0 192-86.128906 192-192 0-18.273438-2.550781-36.28125-7.601562-53.527344-2.488282-8.480468-11.34375-13.351562-19.847657-10.863281-8.488281 2.480469-13.34375 11.367187-10.863281 19.847656 4.183594 14.328125 6.3125 29.320313 6.3125 44.542969 0 88.222656-71.777344 160-160 160s-160-71.777344-160-160 71.777344-160 160-160c32.0625 0 62.910156 9.375 89.207031 27.105469 7.320313 4.941406 17.273438 3 22.207031-4.320313 4.9375-7.328125 3.011719-17.273437-4.316406-22.210937-31.601562-21.308594-68.632812-32.574219-107.097656-32.574219-105.863281 0-192 86.128906-192 192s86.136719 192 192 192zm0 0" />
                      <path d="m356.6875 36.6875-164.6875 164.679688-52.6875-52.679688c-6.25-6.246094-16.375-6.246094-22.625 0-6.246094 6.25-6.246094 16.375 0 22.625l64 64c3.128906 3.128906 7.214844 4.6875 11.3125 4.6875s8.183594-1.558594 11.3125-4.6875l176-176c6.246094-6.25 6.246094-16.375 0-22.625-6.25-6.246094-16.375-6.246094-22.625 0zm0 0" />
                    </svg>
                    <span className="bold">Ongoing support</span> for the life
                    of your cat
                  </li>
                  <li>
                    <svg
                      height="384pt"
                      viewBox="0 0 384 384"
                      width="384pt"
                      xmlns="http://www.w3.org/2000/svg"
                      className="checkmark"
                    >
                      <path d="m192 384c105.863281 0 192-86.128906 192-192 0-18.273438-2.550781-36.28125-7.601562-53.527344-2.488282-8.480468-11.34375-13.351562-19.847657-10.863281-8.488281 2.480469-13.34375 11.367187-10.863281 19.847656 4.183594 14.328125 6.3125 29.320313 6.3125 44.542969 0 88.222656-71.777344 160-160 160s-160-71.777344-160-160 71.777344-160 160-160c32.0625 0 62.910156 9.375 89.207031 27.105469 7.320313 4.941406 17.273438 3 22.207031-4.320313 4.9375-7.328125 3.011719-17.273437-4.316406-22.210937-31.601562-21.308594-68.632812-32.574219-107.097656-32.574219-105.863281 0-192 86.128906-192 192s86.136719 192 192 192zm0 0" />
                      <path d="m356.6875 36.6875-164.6875 164.679688-52.6875-52.679688c-6.25-6.246094-16.375-6.246094-22.625 0-6.246094 6.25-6.246094 16.375 0 22.625l64 64c3.128906 3.128906 7.214844 4.6875 11.3125 4.6875s8.183594-1.558594 11.3125-4.6875l176-176c6.246094-6.25 6.246094-16.375 0-22.625-6.25-6.246094-16.375-6.246094-22.625 0zm0 0" />
                    </svg>
                    A donation to a local cat rescue from each kitten sale
                  </li>
                  <li>
                    <svg
                      height="384pt"
                      viewBox="0 0 384 384"
                      width="384pt"
                      xmlns="http://www.w3.org/2000/svg"
                      className="checkmark"
                    >
                      <path d="m192 384c105.863281 0 192-86.128906 192-192 0-18.273438-2.550781-36.28125-7.601562-53.527344-2.488282-8.480468-11.34375-13.351562-19.847657-10.863281-8.488281 2.480469-13.34375 11.367187-10.863281 19.847656 4.183594 14.328125 6.3125 29.320313 6.3125 44.542969 0 88.222656-71.777344 160-160 160s-160-71.777344-160-160 71.777344-160 160-160c32.0625 0 62.910156 9.375 89.207031 27.105469 7.320313 4.941406 17.273438 3 22.207031-4.320313 4.9375-7.328125 3.011719-17.273437-4.316406-22.210937-31.601562-21.308594-68.632812-32.574219-107.097656-32.574219-105.863281 0-192 86.128906-192 192s86.136719 192 192 192zm0 0" />
                      <path d="m356.6875 36.6875-164.6875 164.679688-52.6875-52.679688c-6.25-6.246094-16.375-6.246094-22.625 0-6.246094 6.25-6.246094 16.375 0 22.625l64 64c3.128906 3.128906 7.214844 4.6875 11.3125 4.6875s8.183594-1.558594 11.3125-4.6875l176-176c6.246094-6.25 6.246094-16.375 0-22.625-6.25-6.246094-16.375-6.246094-22.625 0zm0 0" />
                    </svg>
                    <span className="bold">Spayed and Neutered</span>
                  </li>
                </ul>
              </div>
              <div className="guarantee-grid-image">
                {/* <?xml version="1.0" encoding="UTF-8"?> */}
                <svg
                  className="doctor"
                  width="499.49"
                  height="1459.1"
                  enable-background="new 0 0 1432 1920"
                  version="1.1"
                  viewBox="0 0 499.49466 1459.1089"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g transform="translate(-468.96 -460.49)">
                    <g stroke-width=".3">
                      <path
                        d="m699.46 475.71c9.0099-3.46 17.43-8.45 24.56-14.98 5 8.58 4.29 18.95 2.07 28.26 10.16-3.97 20.97-6.37 31.91-6.45 8.05-0.03 16.1 1.26 23.75 3.76 11.65 3.39 21.21 11.07 31.88 16.5 7.19 3.71 14.53 7.13 22.04 10.14 11.03 4.37 22.39 7.91 34.01 10.34 1.85 0.3799 3.69 0.75 5.56 1.15-2.59 4.89-6.66 8.78-11.25 11.78-2.8 1.7-5.78 3.05-8.78 4.32 1.71 1.0699 3.44 2.12 5.24 3.0699 7.62 3.78 16.33 5.78 24.81 4.21 6.73-1.3 12.71-4.82 18.14-8.88-5.41 11.87-13.71 23.1-25.81 28.74 9.49 4.64 18.28 11.16 24.18 20.06 1.78 2.69 3.25 5.57 4.64 8.49-2.91-0.85-5.8199-1.73-8.79-2.29-5.76-1-11.7-0.24-17.13 1.85 2.44 4.31 4.78 8.67 6.94 13.13 3.68 7.59 6.95 15.37 9.72 23.34 4.0699 11.78 7.04 23.95 8.67 36.32 1.14 8.8 1.74 17.7 1.58 26.58-0.13 7.61-0.72 15.21-1.63 22.76-3.3-1.55-6.9-2.25-10.49-2.67 1.27-32.08-8.54-63.7-24.05-91.51-3.56-6.14-6.65-13.27-13.18-16.83-5.2-2.95-11.68-1.35-16.33 1.92-5.12 3.73-11.23 5.61-17.11 7.75-14.54 4.91-29.8 7.86-45.14 8.46-4.6899-1.51-9.6299-0.92-14.45-1.03-2.56-0.12-5.08 0.29-7.51 1.02-30.56-1.35-60.44-9.31-89.22-19.34-4.78-1.53-8.79-4.65-13.26-6.84-11.09-5.73-23.42-9.64-36.01-9.29-8.43 0.2-16.79 2.38-24.28 6.23-5.76 3.0099-11.76 5.8799-16.35 10.6-6.71 6.45-10.56 15.27-12.6 24.23-1.1-3.51 0.2401-7.08 0.56-10.59 0.57-3.81 0.17-7.97 2.29-11.36 6.84-11.18 16.45-21.17 28.73-26.25 14.99-5.7 31.76-3.73 46.53 1.6801 8.72 2.8199 16.68 7.45 25.22 10.75 35.54 14.43 74.37 22.62 112.79 18.42 19.44-1.97 38.5-7.1 56.46-14.75 7.33-2.33 15.48-3.34 22.9-0.82 4.18 1.42 7.53 4.38 10.85 7.17-0.04-2.63 0.23-5.47-1.17-7.82-1.37-2.22-3.28-4.0099-5.01-5.92 8.33-1.92 16.77-3.48 25.33-3.81-4.68-3.61-10.33-5.57-15.69-7.9-12.97-5.54-26.9-8.47-40.91-9.75 1.97-4.54 7.12-5.98 11.26-7.85 5.04-2.31 10.76-3.11 15.34-6.37-17.37-4.03-34.98-7.22-51.97-12.76-4.13-1.35-8.13-3.19-11.49-5.98 0.92-0.7 1.68-1.71 2.84-2.06 12.34-2.62 25.07-2.36 37.53-0.76-5.91-4.04-12.5-6.9-18.82-10.21-39.35-19.24-83.44-30.51-127.42-27.04-23.74 1.48-46.91 7.71-69.05 16.19-0.24-8.43 7.79-12.95 14.15-16.55-17.1 0.15-34.76 4.61-48.29 15.47-7.6 5.73-13.75 13.19-18.65 21.32-3.68 5.71-4.22 13.01-8.8199 18.21-3.47 4.35-9.33 4.96-14.18 6.9-9.5 3.76-16.79 11.42-22 20.02 6.09-2.2 11.47-5.91 17.27-8.71 1.87-1.04 5.31-1.13 5.81 1.51 0.06 3.5-3.25 5.55-5.36 7.87-12.53 12.81-20.03 29.78-24.04 47.07-5.5601 24.9-5.26 50.95-0.42 75.95 2.78 14.49 7.19 28.76 13.81 41.97-5.76 1.66-10.85 5.23-14.68 9.8-2.69-7.64-4.28-15.6-6.2-23.44-0.24-0.2-0.71-0.61-0.95-0.81l0.98 0.6c-2.51-13.25-4.16-26.69-4.29-40.18-0.33-9.47 0.21-18.97 1.13-28.39 1.11-11.46 3.18-22.81 5.88-34-4.72 1.94-8.69 5.26-12.06 9.03-1.91-4.47-0.13-9.4901-2.01-13.95 0.28-5.64 1.4-11.21 2.92-16.64 2.45-9.07 6.51-17.66 11.64-25.51 6.8-10.27 15.4-19.29 25.04-26.94 1.2-1 2.39-2.02 3.59-3.03-2-0.45-4-0.88-5.96-1.4-7.77-2-13.56-8.66-14.88-16.52 2.66 1.69 5.34 3.4 8.3 4.54 8.9 2.92 18.46 0.64 26.84-2.86 0.8-0.36 1.59-0.72 2.39-1.08 4.4301-12.16 12.7-22.89 23.46-30.11 6.99-4.74 14.84-8.11 22.94-10.45 11.26-3.47 23.07-4.06 34.74-4.99 0.05-0.55 0.16-1.65 0.21-2.2 0.54 0.68 1.06 1.37 1.58 2.08 7.59-0.84 15.17-1.7 22.7-2.95 11.55-1.9098 23.03-4.5398 33.98-8.7398z"
                        fill="#6a1d17"
                        stroke="#6a1d17"
                      />
                      <path
                        d="m588.75 511.74c13.53-10.86 31.19-15.32 48.29-15.47-6.36 3.6-14.39 8.12-14.15 16.55 22.14-8.48 45.31-14.71 69.05-16.19 43.98-3.47 88.07 7.8 127.42 27.04 6.32 3.31 12.91 6.17 18.82 10.21-12.46-1.6-25.19-1.86-37.53 0.76-1.16 0.35-1.92 1.36-2.84 2.06 3.36 2.79 7.36 4.63 11.49 5.98 16.99 5.54 34.6 8.73 51.97 12.76-4.58 3.26-10.3 4.06-15.34 6.37-4.14 1.87-9.29 3.31-11.26 7.85 14.01 1.28 27.94 4.21 40.91 9.75 5.36 2.33 11.01 4.29 15.69 7.9-8.56 0.33-17 1.89-25.33 3.81 1.73 1.91 3.64 3.7 5.01 5.92 1.4 2.35 1.13 5.19 1.17 7.82-3.32-2.79-6.67-5.75-10.85-7.17-7.42-2.52-15.57-1.51-22.9 0.82-17.96 7.65-37.02 12.78-56.46 14.75-38.42 4.2-77.25-3.99-112.79-18.42-8.54-3.3-16.5-7.9301-25.22-10.75-14.77-5.41-31.54-7.38-46.53-1.6801-12.28 5.08-21.89 15.07-28.73 26.25-2.12 3.39-1.72 7.55-2.29 11.36-0.3199 3.51-1.66 7.08-0.56 10.59-0.85 5.4-1.93 10.9-0.74 16.34 2.7 17.12-0.67 35.7-11.49 49.55-1.8 2.46-4.35 4.51-5.29 7.51-4.32 13.48-5.84 28.14-2.44 42 2.81 11.92 9.1 22.77 17.04 32.01-2.53 1.58-4.95-0.6-6.87-2.06-4.71-4.01-9.28-8.34-12.39-13.75-0.27 0.15-0.81 0.47-1.08 0.62-0.75-1.92-1.47-3.85-2.1801-5.77-1.73-4.65-3.09-9.42-4.43-14.18-1.26 0.3-2.51 0.61-3.75 0.97-6.62-13.21-11.03-27.48-13.81-41.97-4.84-25-5.14-51.05 0.42-75.95 4.0099-17.29 11.51-34.26 24.04-47.07 2.11-2.32 5.42-4.37 5.36-7.87-0.5-2.64-3.94-2.55-5.81-1.51-5.8 2.8-11.18 6.51-17.27 8.71 5.21-8.6 12.5-16.26 22-20.02 4.85-1.94 10.71-2.55 14.18-6.9 4.6-5.2 5.14-12.5 8.8199-18.21 4.9001-8.1299 11.05-15.59 18.65-21.32m70.29 10.23c-16.33 1.67-31.83 8-45.9 16.23-2.92 1.8-6.05 3.37-8.48 5.85 1.6801-0.34 3.35-0.78 4.94-1.44 32.33-12.89 68.77-16.04 102.49-6.81 5.81 1.37 11.29 3.87 17.13 5.15-3.59-3.35-8.21-5.3-12.46-7.64-17.56-9.28-37.9-13.91-57.72-11.34z"
                        fill="#843318"
                        stroke="#843318"
                      />
                      <path
                        d="m659.04 521.97c19.82-2.5699 40.16 2.0601 57.72 11.34 4.25 2.34 8.87 4.29 12.46 7.64-5.84-1.28-11.32-3.78-17.13-5.15-33.72-9.23-70.16-6.08-102.49 6.81-1.59 0.66-3.2599 1.1-4.94 1.44 2.4301-2.48 5.56-4.05 8.48-5.85 14.07-8.23 29.57-14.56 45.9-16.23z"
                        fill="#6a1d17"
                        stroke="#6a1d17"
                      />
                      <path
                        d="m594.74 595.78c7.49-3.85 15.85-6.03 24.28-6.23 12.59-0.35 24.92 3.56 36.01 9.29 4.47 2.19 8.48 5.31 13.26 6.84 28.78 10.03 58.66 17.99 89.22 19.34 7.31 0.43 14.65 0.46 21.96 0.01 15.34-0.6 30.6-3.55 45.14-8.46 5.88-2.14 11.99-4.02 17.11-7.75 4.65-3.27 11.13-4.87 16.33-1.92 6.53 3.56 9.62 10.69 13.18 16.83 15.51 27.81 25.32 59.43 24.05 91.51 3.59 0.42 7.1899 1.12 10.49 2.67 3.65 1.75 6.98 4.15 9.77 7.1 4.64 4.99 7.68 11.46 8.4 18.25 1.25 10.23-3.08 21.09-11.56 27.11-7.87 5.95-18.71 6.41-27.73 3.01-2.12 7.22-4.67 14.29-7.2 21.37-3.08 6.35-5.66 12.93-9.06 19.13-4.24 8.17-9.11 16.01-14.49 23.48-3.6 4.88-7.41 9.61-11.44 14.15-5.06 5.47-10.37 10.73-16.04 15.59-3.72 2.9901-7.49 5.9301-11.42 8.65-4.71 3.45-9.9 6.15-14.72 9.44-1.46 0.47-2.86 1.11-4.23 1.8-5.67 3.09-11.74 5.29-17.65 7.85 0.11 3.11 0.1 6.22 0.16 9.33-0.3-3.09-0.44-6.19-0.43-9.29-21.58 7.41-44.57 10.3-67.32 8.86-18.63-1.69-37.09-5.72-54.46-12.75-4.87-1.91-9.63-4.07-14.31-6.39-2.27-1.13-4.5-2.31-6.71-3.52-6.51-3.34-12.39-7.72-18.71-11.35-5.57-4.8-11.66-8.95-17.01-14.01-4.89-3.93-8.72-9.06-13.71-12.81-5.5-7.59-12.01-14.43-17.06-22.37-3.77-5.45-7.17-11.15-10.36-16.95-0.91-2.29-3.49-2.72-5.47-3.63-10.39 5.94-24.49 4.66-33.08-3.85-3.9-3.29-5.86-8.03-8.34-12.32-2.02-9.5099-1.41-20.02 4.45-28.13 0.46-0.69 0.94-1.36 1.45-2.0099 3.83-4.57 8.92-8.14 14.68-9.8 1.24-0.36 2.49-0.67 3.75-0.97 1.34 4.76 2.7 9.53 4.43 14.18-6.37 0.4-12.74 4.02-14.87 10.29-3.39 7.72 0.48 17.78 8.48 20.75 6.2 2.66 13.29-0.18 17.41-5.14-1.18-2.51-2.41-4.9901-3.57-7.4901l1.03 0.46c5.16 2.84 10.63 5.61 16.71 5.33-0.89-1.11-1.78-2.17-2.67-3.24-7.94-9.24-14.23-20.09-17.04-32.01-3.4-13.86-1.88-28.52 2.44-42 0.94-3 3.49-5.05 5.29-7.51 10.82-13.85 14.19-32.43 11.49-49.55-1.19-5.44-0.11-10.94 0.74-16.34 2.04-8.96 5.89-17.78 12.6-24.23 4.5901-4.72 10.59-7.59 16.35-10.6m206.42 76.56c-7.05 2.27-11.38 9.09-13.65 15.77-1.07 2.24 2.55 4.63 3.84 2.2 2.64-5.06 5.75-10.56 11.43-12.64 5.7599-2.3 11.78 0.09 17.26 2.01 2.57 0.01 2.47-3.26 0.59-4.21-5.83-3.2-12.94-5.01-19.47-3.13m-162.93 11.08c-3.67 1.28-7.14 3.19-10.13 5.67-1.81 1.09-1.88 4.74 0.87 4.41 4.2-2.11 8.0601-5.39 12.99-5.58 6.14-0.79 11.76 2.99 15.35 7.67 1.1 1.12 1.92 2.87 3.62 3.17 2.03-0.08 2.74-2.83 1.52-4.25-3.4-5.29-8.14-10.44-14.54-11.79-3.2101-0.83-6.5801-0.28-9.6801 0.7m170.92 24.87c-5.32 2.76-7.76 9.04-7.87 14.76 0.05 4.44 1.75 9.54 6.09 11.5 4.13 1.75 8.54-1.04 10.8-4.45 3.71-5.52 4.51-13.46 0.72-19.13-2.03-3.15-6.39-4.49-9.74-2.68m-166.8 9.25c-3.8199 1.94-5.59 6.44-5.48 10.55-0.11 6.78 3.88 14.12 10.59 16.27 3.97 1.42 8.5099-0.9 10.24-4.62 3.16-6.41 1.03-14.56-3.91-19.48-2.87-2.95-7.54-4.66-11.44-2.72m246.97 12.71c-0.54 9.28-1.33 18.56-3.02 27.71 6.37 5.3 16.97 3.78 21.34-3.34 5.57-8 1.34-20.34-7.63-23.76-3.37-1.52-7.16-1.34-10.69-0.61m-148.69 14.44c0.06 1.48 0.48 2.96 1.89 3.7 5.43 3.89 10.89 8.28 13.83 14.44 1.62 3.37 1.11 7.49-1.02 10.52-3.04 4.42-7.91 7.08-12.66 9.31-1.29 0.7401-3.69 1.35-2.91 3.38 3.84 0.95 7.5-1.11 11.01-2.37 5.9-2.55 12.15-5.37 16.15-10.61 2.38-2.98 2.37-7.29 0.45-10.49-3.66-6.28-10.11-10.13-16.18-13.76-3.34-1.77-6.6-4.29-10.56-4.12m80.63 0.72c-4.43 0.9-8.92 2.36-12.36 5.41-1.9901 1.77-2.6801 4.68-1.87 7.2 1.4 2.56 3.98 4.24 6.65 5.27 9.88 3.46 21.08 3.2401 30.68-1.0099 2.45-1.32 5.29-2.7401 6.38-5.4901 1.33-2.79-0.18-6.38-2.79-7.81-7.92-4.91-17.78-4.83-26.69-3.57m-195.99 7.01c-4.88 0.71-9.7 2.22-13.85 4.94-2.42 1.64-4.13 4.71-3.36 7.68 1.65 3.33 5.26 5.15 8.64 6.32 9.25 2.61 19.48 2.4 28.38-1.36 3.5-1.45 7.07-4.02 7.67-8.03-0.64-3.87-4.32-6.42-7.73-7.79-6.31-2.15-13.16-2.66-19.75-1.76m171.82 48.4c-37.67 13.38-79.03 13.67-117.82 5.2-4.54-1.02-9.09-2-13.61-3.09 7.02 18.28 18.03 35.56 33.95 47.31 13.22 10.4 30.64 15.29 47.36 13.36 13.39-1.59 26.41-7.37 36.21-16.7 14.16-12.94 22.37-31.36 24.77-50.22-3.64 1.33-7.26 2.71-10.86 4.14z"
                        fill="#fcc197"
                        stroke="#fcc197"
                      />
                      <path
                        d="m499.97 622.51c1.88 4.46 0.1 9.48 2.01 13.95-0.75 0.83-1.5 1.66-2.23 2.5099-0.24-5.4899-0.35-10.99 0.22-16.46z"
                        fill="#590503"
                        stroke="#590503"
                      />
                      <path
                        d="m757.51 625.02c2.43-0.73 4.95-1.14 7.51-1.02 4.82 0.11 9.76-0.48 14.45 1.03-7.31 0.45-14.65 0.42-21.96-0.01z"
                        fill="#550504"
                        stroke="#550504"
                      />
                      <path
                        d="m801.16 672.34c6.53-1.88 13.64-0.07 19.47 3.1299 1.88 0.95 1.98 4.22-0.59 4.21-5.48-1.92-11.5-4.31-17.26-2.01-5.6801 2.08-8.79 7.58-11.43 12.64-1.29 2.43-4.91 0.04-3.84-2.2 2.27-6.6799 6.6-13.5 13.65-15.77z"
                        fill="#6b1f18"
                        stroke="#6b1f18"
                      />
                      <path
                        d="m638.23 683.42c3.1-0.98 6.47-1.53 9.68-0.7 6.4 1.35 11.14 6.5 14.54 11.79 1.22 1.42 0.51 4.17-1.52 4.25-1.7-0.3-2.52-2.05-3.62-3.17-3.59-4.6801-9.21-8.46-15.35-7.67-4.93 0.19-8.79 3.47-12.99 5.58-2.75 0.33-2.68-3.32-0.87-4.41 2.9901-2.48 6.4601-4.39 10.13-5.67z"
                        fill="#6b1e18"
                        stroke="#6b1e18"
                      />
                      <path
                        d="m809.15 708.29c3.35-1.81 7.71-0.47 9.74 2.68 3.79 5.67 2.99 13.61-0.72 19.13-2.26 3.41-6.67 6.2-10.8 4.45-4.34-1.96-6.04-7.06-6.09-11.5 0.11-5.72 2.55-12 7.87-14.76z"
                        fill="#6a1f1c"
                        stroke="#6a1f1c"
                      />
                      <path
                        d="m642.35 717.54c3.9-1.94 8.57-0.23 11.44 2.72 4.94 4.92 7.07 13.07 3.91 19.48-1.73 3.72-6.27 6.04-10.24 4.62-6.71-2.15-10.7-9.49-10.59-16.27-0.11-4.11 1.66-8.61 5.48-10.55z"
                        fill="#6a1f1c"
                        stroke="#6a1f1c"
                      />
                      <path
                        d="m889.32 730.25c3.53-0.73 7.32-0.91 10.69 0.61 8.97 3.42 13.2 15.76 7.63 23.76-4.37 7.12-14.97 8.64-21.34 3.34 1.69-9.15 2.48-18.43 3.02-27.71z"
                        fill="#d39179"
                        stroke="#d39179"
                      />
                      <path
                        d="m740.63 744.69c3.96-0.17 7.22 2.35 10.56 4.12 6.07 3.63 12.52 7.48 16.18 13.76 1.92 3.2 1.93 7.51-0.45 10.49-4 5.24-10.25 8.06-16.15 10.61-3.51 1.26-7.17 3.32-11.01 2.37-0.78-2.03 1.62-2.64 2.91-3.38 4.75-2.23 9.62-4.89 12.66-9.31 2.13-3.03 2.64-7.15 1.02-10.52-2.94-6.16-8.4-10.55-13.83-14.44-1.41-0.74-1.83-2.22-1.89-3.7z"
                        fill="#d39179"
                        stroke="#d39179"
                      />
                      <path
                        d="m821.26 745.41c8.91-1.2599 18.77-1.34 26.69 3.57 2.61 1.43 4.12 5.02 2.79 7.81-1.09 2.75-3.93 4.17-6.38 5.4901-9.6 4.25-20.8 4.47-30.68 1.0099-2.67-1.03-5.25-2.71-6.65-5.27-0.8101-2.52-0.1201-5.43 1.87-7.2 3.44-3.05 7.93-4.51 12.36-5.41z"
                        fill="#faa893"
                        stroke="#faa893"
                      />
                      <path
                        d="m625.27 752.42c6.59-0.9 13.44-0.39 19.75 1.76 3.41 1.37 7.09 3.92 7.73 7.79-0.6 4.01-4.17 6.58-7.67 8.03-8.9 3.76-19.13 3.97-28.38 1.36-3.38-1.17-6.99-2.99-8.64-6.32-0.77-2.97 0.94-6.04 3.36-7.68 4.15-2.72 8.97-4.23 13.85-4.94z"
                        fill="#faa893"
                        stroke="#faa893"
                      />
                      <path
                        d="m525.48 767.35c2.13-6.27 8.5-9.89 14.87-10.29 0.71 1.92 1.4301 3.85 2.1801 5.77 1.95 4.42 3.1899 9.29 6.3 13.1l-1.03-0.46c1.16 2.5 2.39 4.98 3.57 7.4901-4.12 4.96-11.21 7.8-17.41 5.14-8.0001-2.9701-11.87-13.03-8.4801-20.75z"
                        fill="#d39179"
                        stroke="#d39179"
                      />
                      <path
                        d="m542.53 762.83c0.27-0.15 0.81-0.47 1.08-0.62 3.11 5.41 7.68 9.74 12.39 13.75 1.92 1.46 4.34 3.64 6.87 2.06 0.89 1.07 1.78 2.13 2.67 3.24-6.08 0.28-11.55-2.49-16.71-5.33-3.11-3.81-4.35-8.68-6.3-13.1z"
                        fill="#6c1f18"
                        stroke="#6c1f18"
                      />
                      <path
                        d="m797.09 800.82c3.6-1.43 7.22-2.81 10.86-4.14-2.4 18.86-10.61 37.28-24.77 50.22-14.92-5.94-31.37-6.51-47.21-5.7401-12.44 1.08-25.34 2.8-36.36 9.08-15.92-11.75-26.93-29.03-33.95-47.31 4.52 1.09 9.07 2.07 13.61 3.09 2.16 12.28 13.55 20.07 24.73 23.51 23.89 7.1899 50.16 5.93 73.45-2.89 11.31-3.2999 18.81-14.35 19.64-25.82z"
                        fill="#720e0e"
                        stroke="#720e0e"
                      />
                      <path
                        d="m679.27 806.02c38.79 8.47 80.15 8.18 117.82-5.2-0.83 11.47-8.33 22.52-19.64 25.82-23.29 8.82-49.56 10.08-73.45 2.89-11.18-3.44-22.57-11.23-24.73-23.51z"
                        fill="#f9ffff"
                        stroke="#f9ffff"
                      />
                      <path
                        d="m699.61 850.24c11.02-6.28 23.92-8 36.36-9.08 15.84-0.77 32.29-0.2 47.21 5.7401-9.8 9.33-22.82 15.11-36.21 16.7-16.72 1.9299-34.14-2.9601-47.36-13.36z"
                        fill="#e46b70"
                        stroke="#e46b70"
                      />
                      <path
                        d="m616.04 899.02c8.07-5.79 16.87-10.52 26-14.42 4.68 2.32 9.44 4.48 14.31 6.39 0.02 2.96 0.13 5.92 0.15 8.89-0.22 2.02 0.58 5.3-2.43 5.44-10.51 3.01-20.5 7.91-29.08 14.73-0.8 0.59-1.35 1.44-1.89 2.27-3.29 2.04-5.8 5.03-8.16 8.05-11.01 13.69-15.81 31.28-17.43 48.51-3.11 40.43 6.96 80.32 17.84 118.91-7.89 2.0699-15.27 6.2799-20.85 12.26-7.5-24.71-14.42-49.69-18.2-75.27-1.35-9.2101-2.25-18.47-2.69-27.76-0.51-10.95-0.15-21.92 0.89-32.83 0.81-9.09 2.49-18.11 5.39-26.77 3.42-10.4 8.83-20.02 15.36-28.77 6.07-7.39 13.02-14.03 20.79-19.63z"
                        fill="#8d9194"
                        stroke="#8d9194"
                      />
                      <path
                        d="m778.4 894.84c5.91-2.56 11.98-4.76 17.65-7.85 7.83 2.78 14.41 7.89 21.24 12.45 8.43 8.42 16.25 17.55 22 28.06 2.02 3.78 3.95 7.63 5.8 11.51 4.73 10.53 8.45 21.51 11.34 32.69 4.37 16.11 6.82 32.66 9.03 49.18 2.18 6.41 5.1 12.59 6.75 19.2 3.32 11.65 5.24 23.65 6.69 35.67 1.15 9.09 1.79 18.24 2.89 27.34-1.58-0.4-3.16-0.7799-4.71-1.21-1.05-0.3101-2.09-0.62-3.12-0.9301-1.07-3.09-4.86-3.7999-7.21-5.6599-1.86 2.0299-3.79 4.0699-4.94 6.61-0.99 0.3199-1.97 0.66-2.94 1-0.06-12.04-0.03-25.14-7.28-35.4-4.78-7.3199-14.15-11.11-22.65-8.85-6.47 1.12-12.59 4.41-16.92 9.37-4.99 5.2999-10.03 10.55-14.97 15.9-0.26-0.2201-0.76-0.66-1.02-0.89-0.3701-2.77-0.54-5.55-1.1201-8.28l-0.21-0.46c-4.07-0.08-8.13 0.03-12.18-0.13-0.76-0.04-2.27-0.11-3.03-0.14 8.76-13.69 19.3-26.17 30.66-37.76 3.5-3.62 7.62-6.59 10.93-10.41 3.27-2.62 6.55-5.24 10.04-7.58 7.39-3.8 11.49-12.11 10.91-20.27-0.6801-11.42-4.38-22.4-7.77-33.24-6.08-16.63-13.51-33.75-27.09-45.66l-1.52-0.96c-5.92-4.18-11.69-8.75-18.61-11.21-2.68-1.26-5.58-1.92-8.46-2.49l-0.02-0.27c-0.0599-3.11-0.0499-6.22-0.1599-9.33m65.99 136.28c-1.88 1.88-3.69 3.8199-5.54 5.72-0.59 0.98-2.03 3.1 0.09 3.39 3.33 0.9401 6.81 1.3301 10.22 1.99 0.88 0.28 1.78 0.54 2.7 0.77 0.76-4.5599-1.77-8.72-3.23-12.86-1.46 0.15-2.89 0.45-4.24 0.99z"
                        fill="#8d9194"
                        stroke="#8d9194"
                      />
                      <path
                        d="m656.35 890.99c17.37 7.03 35.83 11.06 54.46 12.75 13.99 15.17 27.35 30.91 41.17 46.24 6.16 7.11 12.71 13.89 18.53 21.29-11.31 16.38-22.86 32.61-34.29 48.92-5.99 8.35-11.59 17-17.87 25.14-29.07-41.92-58.76-83.41-87.8-125.36 2.96-0.17 5.94-0.21 8.9-0.54 5.5 0.11 11.01 0.04 16.51-0.4 0.27-4.02 0.28-8.04 0.3-12.05 0.05-2.37 0.23-4.74 0.24-7.1-0.02-2.97-0.13-5.93-0.15-8.89z"
                        fill="#f8b57e"
                        stroke="#f8b57e"
                      />
                      <path
                        d="m710.81 903.74c22.75 1.44 45.74-1.45 67.32-8.86-0.01 3.1 0.13 6.2 0.43 9.29l0.02 0.27c0.21 2.83 0.28 5.68 0.25 8.53-0.02 2.03 0 4.07 0.03 6.13 2.66 0.09 5.32 0.1801 7.99 0.27 6.55 0.14 13.1 0.24 19.64 0.61-11.81 17.22-24.05 34.14-35.98 51.29-5.82-7.4-12.37-14.18-18.53-21.29-13.82-15.33-27.18-31.07-41.17-46.24z"
                        fill="#f6986d"
                        stroke="#f6986d"
                      />
                      <path
                        d="m778.58 904.44c2.88 0.57 5.78 1.23 8.46 2.49 6.14 3.83 12.19 7.85 18.61 11.21l1.52 0.96c-0.17 0.22-0.51 0.66-0.68 0.88-6.54-0.37-13.09-0.47-19.64-0.61-2.65-2.17-5.37-4.24-8.02-6.4 0.03-2.85-0.04-5.7-0.25-8.53z"
                        fill="#e8e9ea"
                        stroke="#e8e9ea"
                      />
                      <path
                        d="m639.45 919.43c5.5-4.28 11.19-8.32 16.81-12.45-0.02 4.01-0.03 8.03-0.3 12.05-5.5 0.44-11.01 0.51-16.51 0.4z"
                        fill="#e9e9ea"
                        stroke="#e9e9ea"
                      />
                      <path
                        d="m577.01 925.69c6.6-0.78 12.18-4.64 18.24-7.04-6.53 8.75-11.94 18.37-15.36 28.77-3.4-3.93-7.41-7.91-12.86-8.46-9.76-1.9-19.74 6.16-20.14 16.04-0.75 8.47 5.72 16.93 14.16 18.24 4.51 1.07 8.98-0.7 13.15-2.24 0.08 0.8 0.23 2.4 0.3 3.19-1.04 10.91-1.4 21.88-0.89 32.83-4.95-3.09-11.36-3.68-16.65-1.07-7.57 3.31-11.86 12.45-9.45 20.38 1.88 7.7301 9.62 13.19 17.5 12.78 4.21 0.13 7.83-2.26 11.29-4.33 3.78 25.58 10.7 50.56 18.2 75.27-8.31 9.0599-12.36 21.83-10.51 34.02 1.52 12.06 9.02 22.68 18.73 29.71 5.33 5.96 13.56 8.4 21.28 9.2899 17 1.9801 34.5-8.0499 41.5-23.64 5.73-12.12 5.59-27.64-2.33-38.76-4.36-7.63-10.26-14.62-18.1-18.83 5.37-4.09 8.65-11.1 7.19-17.85-1.49-9.1-11.28-15.69-20.27-13.79-8.26 1.41-14.77 9.49-14.25 17.86 0.15 3.12 1.44 6.0099 2.5 8.9099-1.65 0.1901-3.28 0.4601-4.89 0.8201-10.88-38.59-20.95-78.48-17.84-118.91 1.62-17.23 6.42-34.82 17.43-48.51 2.75 4.34 5.49 8.69 8.23 13.04-3.85 4.15-6.43 9.86-5.16 15.6 0.92 7.14 6.92 13.09 13.99 14.2 3.39 0.86 6.82-0.1 10.09-1.03 19.1 28.64 38.19 57.32 58.91 84.82 3.63 4.7 7.32 9.37 11.24 13.84-4.72-1.0499-9.92-1.5699-14.25 1.05-9.43 4.35-12.4 17.97-5.78 25.92 5.15 7.2599 16.35 9.2699 23.56 3.98 7.54-5.12 9.84-15.89 5.1-23.66 5.7-4.78 10.11-10.82 14.76-16.56 8.5-10.76 16.65-21.79 24.74-32.85 2.66 3.9301 5.89 7.8401 10.55 9.4 8.24 3.1901 18.56-1.16 21.84-9.39 3.04-6.67 1.3-15.33-4.42-20.02-2.65-2.46-6.2-3.42-9.5-4.66l-0.04-0.94c14.93-20.57 29.09-41.69 43.37-62.7 5.79 10.53 9.56 22.04 12.72 33.6 2.22 8.82 4.9 17.75 4.58 26.95-0.1299 2.78-0.21 6.0099-2.71 7.79-2.95 2.44-4.97 5.74-5.64 9.52-3.49 2.34-6.77 4.96-10.04 7.58-3.7 1.86-6.74 4.6901-9.76 7.47-12.67 10.71-23.42 23.45-33.45 36.6-5.97-0.2001-12.12 2.49-15.36 7.63-4.66 6.3899-3.84 15.96 1.64 21.61-8.21 13.76-15.25 28.46-18.7 44.18-1.92 9.79-2.64 20.71 2.54 29.69 2.57 4.97 7.77 7.58 11.34 11.72 3.15 3.7 8.22 4.26 12.78 4.1899 4.09 0.29 8.59 0.7301 12.18-1.6799 3.21-1.84 5.21-5.86 3.97-9.47-1.21-3.99-5.01-6.3-8.6-7.89 8.2401-0.92 14.79-8.67 14.57-16.9 0.29-9.16-7.88-17.89-17.2-17.41-5.4901-0.3199-10.27 2.73-14.06 6.38 3.1801-13.89 9.91-26.6 16.91-38.87l0.18 1.3301c8.83-1.6001 16.43-11.19 13.4-20.14 0.83-0.4701 1.68-0.89 2.57-1.26 0.2599 0.23 0.7599 0.6699 1.02 0.89 4.94-5.3501 9.98-10.6 14.97-15.9 4.33-4.96 10.45-8.25 16.92-9.37 7.37 0.73 14.61 4.1899 18.69 10.57-5.38 1.3301-11.12 3.24-14.23 8.1801-5.4301 7.47-3.5 18.94 4.19 24.11 4.56 3.62 10.61 3.47 16.08 2.77 1.15-0.07 2.28-0.13 3.44-0.14 1.95 11.2 1.42 22.69 0.5 33.97-6.31-3.38-14.7-3.6899-20.42 1.05-6.59 4.77-9 14.44-4.98 21.61 3.35 6.95 11.29 10.52 18.79 9.41-3.09 8.09-6.94 16.84-14.78 21.37-4.3199-5.38-11.82-6.26-18.11-4.4801-4.35 0.26-9.42 1.13-11.7 5.3501-2.59 4.2799 0.16 9.6899 4.08 12.06 3.73 2.72 8.56 2.92 12.91 1.85 3.77-0.34 7.73-0.4099 11.09-2.39 0.9 0.04 2.7 0.1201 3.6 0.15-7.26 4.37-9.81 14.43-6.1201 21.94 4.29 9.96 18.93 13.34 26.9 5.7999 6.8-5.34 8.26-15.98 3.32-23.02-2.99-4.6901-8.2-6.9601-13.4-8.2401 5.83-4.49 10.69-10.24 13.92-16.87 4.45-8.08 6.34-17.16 9.04-25.89 0.63-2.64 0.76-5.3501 1.17-8.01-0.17 6.37-0.04 12.75-0.09 19.13-0.21 2.2799 0.87 4.35 1.86 6.34-1.01 1.37-1.78 2.9399-1.66 4.71-0.1801 18.34 0.05 36.68-0.09 55.01 0.34 9.9-0.81 19.9 0.8 29.71l-0.9-0.61c0.02 26.98 0 53.95 0.01 80.92 0.05 4.4399-0.45 9.02 1 13.32-0.77 1.8501-1.04 3.8401-0.99 5.8501-5.03 0.24-10.05 0.1699-15.07 0.11 4.39-3.8401 7.81-9.28 7.3-15.34-0.11-10.16-10.55-18.52-20.5-16.43-9.31 1.4199-16.16 11.41-13.91 20.61 0.71 4.4399 3.78 7.88 6.66 11.13-16.83 0.13-33.65 0.13-50.48-0.03 3.03-2.85 5.92-6.15 6.89-10.3 1.95-7.3601-1.63-15.77-8.35-19.36-6.33-3.7999-15.23-2.85-20.42 2.4501-5.54 5.13-7.1 13.92-3.67 20.65 1.24 2.73 3.64 4.64 5.88 6.5499-17.11 0.2001-34.22 0.12-51.33 0.04 3.77-3.12 6.97-7.3 7.39-12.34 1.05-7.41-3.27-15.09-10.15-18.03-7.28-3.71-16.85-0.92-21.32 5.83-5.71 7.5801-3.33 19.23 4.42 24.51-17.13 0.17-34.26 0.17-51.38 0.02 3.03-2.46 5.96-5.38 6.94-9.28 3.19-9.4-3.39-20.96-13.34-22.43-9.57-2.0801-20.07 5.6499-20.6 15.49-0.69 6.27 2.43 12.48 7.41 16.22-16.86 0.12-33.73 0.16-50.59 0 2.72-3 5.52-6.17 6.53-10.19 2.01-6.8101-1.03-14.45-6.72-18.53-2.91-2.36-6.7-2.9301-10.26-3.6-0.19-10.15-0.16-20.29-0.12-30.43 8.41 0.1899 16.47-6.4399 17.44-14.88 1.64-10.08-7.08-20.47-17.44-19.94-0.1-10.16-0.12-20.31-0.05-30.46 5.29-0.71 10.86-2.52 14.11-7.0499 5-6.49 4.69-16.35-0.91-22.38-3.09-3.6901-7.8799-5.17-12.46-5.89-0.12-10.18-0.27-20.37 0.05-30.54 8.39-0.1799 15.86-7.09 16.78-15.41 1.3199-9.88-7.38-19.95-17.51-19.34 0.01-10.16-0.15-20.32 0.11-30.47 6.43-0.76 12.97-3.97 15.76-10.12 4.56-8.64 0.02-20.34-9.06-23.81-6.33-2.8199-13.56-0.8199-18.83 3.25-14.62-3.1599-29.26-6.22-43.91-9.25-1.84-0.39-3.68-0.7899-5.51-1.1599-0.05-0.77-0.14-2.3101-0.19-3.0801 0.95-0.71 1.9-1.4199 2.84-2.15l-0.8 0.3c0.71-1.39 1.04-2.92 1.15-4.45 0.62-9.26 2.31-18.41 2.94-27.67 0.13-4.36 2.78-8.43 1.82-12.82 1.85-1.3 1.87-3.69 2.4-5.66 1.73-8.38 4.39-16.51 6.87-24.68 4.9-13.02 11.09-25.69 20.03-36.45-0.96-0.66-1.9-1.31-2.84-1.95 3.87-1.9 8.11-3.25 11.37-6.19 8.1801-6.9501 18.23-11.63 28.78-13.56m55.36 78.77c-10.54 1.55-17.74 13.68-13.44 23.58 3.26 9.45 15.55 13.97 24.25 9.1599 7.63-3.7699 11.6-13.68 8.21-21.57-2.74-7.58-11.06-12.54-19.02-11.17m67.95 131.97c-6.9 2.33-11.97 9.25-11.67 16.6-0.41 8.9399 7.45 17.03 16.33 17.25 8.89 0.73 17.75-6.37 18.3-15.39 0.87-6.21-2.11-12.46-7.09-16.11-4.44-3.4901-10.6-3.85-15.87-2.35m-68.96 65.01c-7.43 1.6901-13.68 8.8501-13.57 16.61-0.55 8.95 7.25 17.47 16.18 17.85 5.32 0.53 10.54-2 14.19-5.74 4.89-5.51 5.79-13.98 2.06-20.36-3.61-6.45-11.65-10-18.86-8.3601m71.04 0.01c-8.04 1.5601-14.17 9.42-13.78 17.59 0.09 9.3999 8.94 17.79 18.43 16.84 9.13-0.23 16.85-8.75 16.25-17.85 0.17-10.45-10.72-19.18-20.9-16.58m70.97-0.01c-6.33 1.3301-11.89 6.2001-13.28 12.64-3.26 10.17 5.34 21.67 15.94 21.83 9.6899 0.8099 18.87-8.2101 18.15-17.92 0.15-10.3-10.74-19.13-20.81-16.55m-143.09 65.92c-8.67 2.22-14.21 11.87-12.14 20.51 1.07 5.87 5.7 10.64 11.17 12.73 5.26 1.61 11.38 1.03 15.85-2.36 6.05-4.11 8.91-12.28 6.64-19.25-2.54-8.83-12.71-14.43-21.52-11.63m70.94 0.01c-8.02 2.11-13.54 10.38-12.51 18.61 0.6 8.98 9.37 16.23 18.29 15.41 9.32-0.11 17.26-9.0601 16.33-18.33 0.0299-10.79-12-18.95-22.11-15.69m70.98-0.01c-6.7 1.6-11.83 7.77-12.6 14.56-1.56 9.89 7.21 20.1 17.34 19.48 10.03 0.5599 18.69-9.48 17.14-19.3-0.64-10.31-12.08-17.91-21.88-14.74m70.18 0.12c-8.98 2.6801-14.45 13.52-11.1 22.3 1.21 4.26 4.66 7.4399 8.3799 9.63 7.35 4.27 17.82 1.84 22.36-5.42 5.39-7.37 3.51-18.76-3.99-23.96-4.3699-3.44-10.41-3.98-15.65-2.55z"
                        fill="#e6e7e8"
                        stroke="#e6e7e8"
                      />
                      <path
                        d="m807.17 919.1c13.58 11.91 21.01 29.03 27.09 45.66 3.39 10.84 7.09 21.82 7.77 33.24 0.58 8.16-3.52 16.47-10.91 20.27 0.67-3.78 2.69-7.08 5.64-9.52 2.5-1.78 2.58-5.01 2.71-7.79 0.32-9.2-2.36-18.13-4.58-26.95-3.16-11.56-6.93-23.07-12.72-33.6-14.28 21.01-28.44 42.13-43.37 62.7-6.01 8.63-12.2 17.14-18.43 25.61-8.09 11.06-16.24 22.09-24.74 32.85-4.65 5.7401-9.06 11.78-14.76 16.56-3.29-1.9-6.16-4.4301-8.63-7.29-3.92-4.47-7.61-9.14-11.24-13.84-20.72-27.5-39.81-56.18-58.91-84.82-6.41-9.52-12.44-19.29-18.92-28.77-2.74-4.35-5.48-8.7-8.23-13.04 2.36-3.02 4.87-6.01 8.16-8.05 2.46-0.86 4.91-1.75 7.45-2.35 29.04 41.95 58.73 83.44 87.8 125.36 6.28-8.14 11.88-16.79 17.87-25.14 11.43-16.31 22.98-32.54 34.29-48.92 11.93-17.15 24.17-34.07 35.98-51.29 0.17-0.2201 0.51-0.6601 0.68-0.8801z"
                        fill="#bdbfc1"
                        stroke="#bdbfc1"
                      />
                      <path
                        d="m839.66 924.06c17.55-0.53 36.29 3.64 49.64 15.68 4.27 4.38 8.98 8.42 12.39 13.55-1.78 7.66 2.94 16.78 10.79 18.76 2.2 5.05 4.18 10.19 6 15.4 0.73 0.45 1.47 0.9 2.23 1.38-1.17 5.42 1.77 10.48 2.63 15.73-3.41-0.21-6.95-0.63-10.23 0.61-7.39 2.35-12.72 10.15-11.87 17.92 0.62 8.0999 7.44 15.53 15.72 15.97 4.38 0.59 8.54-1.2001 12.31-3.2101 0.97 7.72 2.04 15.42 2.67 23.18 2.31 1.03 3.39 3.22 2.03 5.52-1.5 0.12-3.0099 0.2799-4.48 0.5299-16.87 3.53-33.76 6.9701-50.59 10.67-1.45-12.02-3.37-24.02-6.69-35.67-1.65-6.61-4.57-12.79-6.75-19.2-2.21-16.52-4.66-33.07-9.03-49.18 2.63-2.43 5.54-4.77 7.07-8.09 3.96-8.12 0.35-19.42-8.1-23.09-3.13-1.84-6.83-1.72-10.31-1.51-1.85-3.88-3.78-7.73-5.8-11.51 0.11-1.1599 0.24-2.2999 0.37-3.4399z"
                        fill="#e6e7e8"
                        stroke="#e6e7e8"
                      />
                      <path
                        d="m546.89 955c0.4-9.88 10.38-17.94 20.14-16.04 5.45 0.55 9.46 4.53 12.86 8.46-2.9 8.66-4.58 17.68-5.39 26.77-0.07-0.79-0.22-2.39-0.3-3.19-4.17 1.54-8.64 3.31-13.15 2.24-8.44-1.31-14.91-9.77-14.16-18.24z"
                        fill="#d2d3d5"
                        stroke="#d2d3d5"
                      />
                      <path
                        d="m845.09 939.01c3.48-0.21 7.18-0.33 10.31 1.51 8.45 3.67 12.06 14.97 8.1 23.09-1.53 3.32-4.44 5.66-7.07 8.09-2.89-11.18-6.61-22.16-11.34-32.69z"
                        fill="#d2d3d5"
                        stroke="#d2d3d5"
                      />
                      <path
                        d="m618.01 959.01c-1.27-5.74 1.31-11.45 5.16-15.6 6.48 9.48 12.51 19.25 18.92 28.77-3.27 0.93-6.7 1.89-10.09 1.03-7.07-1.11-13.07-7.06-13.99-14.2z"
                        fill="#d2d3d5"
                        stroke="#d2d3d5"
                      />
                      <path
                        d="m912.48 972.05c-7.85-1.98-12.57-11.1-10.79-18.76 1.29 1.81 2.61 3.62 3.92 5.44 2.45 4.34 4.9 8.72 6.87 13.32z"
                        fill="#d0d1d4"
                        stroke="#d0d1d4"
                      />
                      <path
                        d="m760.37 1028.7c6.23-8.47 12.42-16.98 18.43-25.61l0.04 0.94c3.3 1.24 6.85 2.2 9.5 4.66 5.72 4.69 7.46 13.35 4.42 20.02-3.28 8.23-13.6 12.58-21.84 9.39-4.66-1.5599-7.89-5.47-10.55-9.4z"
                        fill="#d2d3d5"
                        stroke="#d2d3d5"
                      />
                      <path
                        d="m556.96 1006c5.29-2.61 11.7-2.02 16.65 1.07 0.44 9.29 1.34 18.55 2.69 27.76-3.46 2.0699-7.08 4.46-11.29 4.33-7.88 0.41-15.62-5.0499-17.5-12.78-2.41-7.93 1.88-17.07 9.45-20.38z"
                        fill="#d2d3d5"
                        stroke="#d2d3d5"
                      />
                      <path
                        d="m632.37 1004.5c7.96-1.37 16.28 3.59 19.02 11.17 3.39 7.89-0.58 17.8-8.21 21.57-8.7 4.8101-20.99 0.29-24.25-9.1599-4.3-9.9 2.9-22.03 13.44-23.58z"
                        fill="#d2d3d5"
                        stroke="#d2d3d5"
                      />
                      <path
                        d="m913.11 1005.2c3.28-1.24 6.82-0.82 10.23-0.61 2.24 8.59 3.61 17.36 5.16 26.09 0.29 1.73 0.53 3.45 0.77 5.2-3.77 2.01-7.93 3.8-12.31 3.2101-8.28-0.4401-15.1-7.8701-15.72-15.97-0.85-7.7701 4.48-15.57 11.87-17.92z"
                        fill="#d2d3d5"
                        stroke="#d2d3d5"
                      />
                      <path
                        d="m811.32 1033.3c3.02-2.7799 6.06-5.61 9.76-7.47-3.31 3.8201-7.43 6.79-10.93 10.41-11.36 11.59-21.9 24.07-30.66 37.76-1.3-0.08-2.6-0.15-3.89-0.21 0.72-1.3201 1.45-2.64 2.27-3.89 10.03-13.15 20.78-25.89 33.45-36.6z"
                        fill="#bdbfc1"
                        stroke="#bdbfc1"
                      />
                      <path
                        d="m844.39 1031.1c1.35-0.54 2.78-0.84 4.24-0.99 1.46 4.14 3.99 8.3 3.23 12.86-0.92-0.23-1.82-0.49-2.7-0.77-0.43-1.0399-0.8199-2.08-1.17-3.12-0.87-2.8-1.62-5.74-3.6-7.98z"
                        fill="#bdbfc1"
                        stroke="#bdbfc1"
                      />
                      <path
                        d="m838.85 1036.8c1.85-1.9 3.66-3.84 5.54-5.72 1.98 2.24 2.73 5.1801 3.6 7.98-3.19-0.07-6.29-0.85-9.14-2.26z"
                        fill="#d2d3d5"
                        stroke="#d2d3d5"
                      />
                      <path
                        d="m838.94 1040.2c-2.12-0.29-0.68-2.41-0.09-3.39 2.85 1.41 5.95 2.1901 9.14 2.26 0.35 1.04 0.74 2.0801 1.17 3.12-3.41-0.6599-6.89-1.05-10.22-1.99z"
                        fill="#e4e5e7"
                        stroke="#e4e5e7"
                      />
                      <path
                        d="m828.94 1058.6c8.5-2.26 17.87 1.53 22.65 8.85 7.25 10.26 7.22 23.36 7.28 35.4 0.97-0.34 1.95-0.6801 2.94-1 2.53 10.8 2.24 22.01 1.64 33.02-1.08 12.88-2.89 25.89-7.64 38.01-3.35 8.45-8.93 17.91-18.72 19.53-0.22-0.23-0.65-0.6799-0.8701-0.9099 7.84-4.53 11.69-13.28 14.78-21.37 3.67-10.33 5.49-21.2 6.61-32.07 0.92-11.28 1.45-22.77-0.5-33.97-1.16 0.01-2.29 0.07-3.44 0.14 0.85-11.9 0.43-24.61-6.04-35.06-4.0799-6.3798-11.32-9.8398-18.69-10.57z"
                        fill="#bdbfc1"
                        stroke="#bdbfc1"
                      />
                      <path
                        d="m508.15 1065.2c14.65 3.03 29.29 6.0901 43.91 9.25 3.96 0.86 7.93 1.6901 11.89 2.5901 0.08 4.61 0.05 9.23 0.07 13.86-0.21 3.9199-0.99 7.7899-1.45 11.69-3.84 28.25-7.78 56.5-11.33 84.79-3.43 23.52-6.37 47.11-9.63 70.65-0.81 6.85-2.08 13.65-2.52 20.54-3.69 23.04-6.26 46.24-9.64 69.33-0.43 3.38-1.4 7.0299 0.4 10.22 5.7 12.47 10.85 25.21 16.83 37.56 0.93 3.6201 1.86 7.64 0.24 11.22-1 2.45-3.24 4.0299-5.48 5.25-6.06 1.62-12.87-1.04-16.19-6.35-3.18-5.14-5.36-10.84-8.76-15.85 0.42 5.16 0.77 10.33 1.06 15.51 0.38 11.84 1.4 23.65 1.73 35.49 0.14 5.4501-2.17 11.5-7.28 14.06-4.08 2.22-9.46 0.91-12.35-2.64-3.69-4.22-4.53-10-4.77-15.39-3.47-0.23-7.25-0.41-10-2.8099-5.15-4.26-6.19-11.25-7.5-17.4-2.87-1.5601-5.07-4.27-5.15-7.63-0.91-12.03-0.9-24.11-1.48-36.16-0.46-8.35-0.42-16.71-1.03-25.05 0.06-5.3099-0.28-10.59-0.56-15.88-0.36-5.29 1.29-10.5 3.9-15.04 1.91-3.03 1.99-6.67 2.46-10.1 3.78-28.77 7.84-57.51 11.55-86.29 2.91-20.67 5.62-41.37 8.42-62.05 3.08-22.47 6.08-44.94 9.14-67.41 1.12-8.6603 2.26-17.32 3.52-25.96z"
                        fill="#f8b57e"
                        stroke="#f8b57e"
                      />
                      <path
                        d="m878.9 1075.8c16.83-3.7 33.72-7.14 50.59-10.67 1.91 17.23 4.52 34.39 6.77 51.58 2.33 16.83 4.38 33.71 6.94 50.51 4.06 32.28 8.59 64.51 12.96 96.76 2.08 16.07 4.35 32.11 6.44 48.17 0.5 3.98 3.4901 7.05 4.46 10.91 2.12 5.79 0.92 11.98 0.77 17.97-0.15 5.24-0.39 10.48-0.51 15.73-0.68 15.45-1.2 30.89-1.76 46.34-0.26 4.87 0.03 11.38-5.41 13.55-1.46 6.02-2.31 12.88-7.22 17.24-2.89 2.7001-7 2.9-10.71 3.36 0.11 0.7301 0.22 1.49 0.35 2.27-0.73 4.6-1.64 9.5601-4.98 13.08-2.78 3.1799-7.65 4.6899-11.56 2.76-5.83-2.52-8.34-9.38-7.8701-15.36 0.7-16.71 1.84-33.39 2.55-50.09-2.71 4.9-5.18 9.9401-7.88 14.86-3.08 5.8301-10.47 9.52-16.88 7.25-3.78-1.28-6.21-5.1599-6.3-9.0499-0.35-4.24 1.66-8.11 3.3199-11.86 5.33-12 10.58-24.04 15.92-36.04-0.25-0.91-0.48-1.79-0.7-2.66-0.61-10.16-2.62-20.17-3.76-30.27-5.44-40.19-10.77-80.39-16.27-120.58-3.02-22.02-5.68-44.1-9.06-66.07-0.86-9.1299-2.46-18.17-3.55-27.27 0.51-2.1001 1.04-4.2001 1.53-6.29 1.55 0.4301 3.13 0.8099 4.71 1.21-1.0998-9.1001-1.7398-18.25-2.8898-27.34z"
                        fill="#f8b57e"
                        stroke="#f8b57e"
                      />
                      <path
                        d="m847.63 1069.2c6.47 10.45 6.89 23.16 6.04 35.06-5.47 0.7-11.52 0.85-16.08-2.77-7.69-5.17-9.6201-16.64-4.19-24.11 3.11-4.9401 8.85-6.8501 14.23-8.1801z"
                        fill="#d2d3d5"
                        stroke="#d2d3d5"
                      />
                      <path
                        d="m552.06 1074.5c5.27-4.0699 12.5-6.0699 18.83-3.25 9.08 3.4701 13.62 15.17 9.06 23.81-2.79 6.15-9.33 9.36-15.76 10.12-0.18-1-0.53-2.99-0.7-3.99 1.16-3.29 0.55-6.84 0.53-10.24-0.02-4.63 0.01-9.25-0.07-13.86-3.96-0.9001-7.93-1.7302-11.89-2.5901z"
                        fill="#d2d3d5"
                        stroke="#d2d3d5"
                      />
                      <path
                        d="m617.74 1088.1c-0.52-8.3701 5.99-16.45 14.25-17.86 8.99-1.8999 18.78 4.6901 20.27 13.79 1.46 6.75-1.82 13.76-7.19 17.85-7.5-4.22-16.31-5.8199-24.83-4.87-1.06-2.9001-2.35-5.7899-2.5-8.9099z"
                        fill="#d2d3d5"
                        stroke="#d2d3d5"
                      />
                      <path
                        d="m697.99 1071.9c4.33-2.62 9.53-2.1 14.25-1.05 2.47 2.86 5.34 5.39 8.63 7.29 4.74 7.77 2.44 18.54-5.1 23.66-7.21 5.2899-18.41 3.2799-23.56-3.98-6.62-7.95-3.65-21.57 5.78-25.92z"
                        fill="#d2d3d5"
                        stroke="#d2d3d5"
                      />
                      <path
                        d="m762.51 1077.6c3.24-5.14 9.39-7.8301 15.36-7.63-0.82 1.25-1.55 2.5699-2.27 3.89 1.29 0.06 2.59 0.1299 3.89 0.21 0.76 0.03 2.27 0.1 3.03 0.14-6.73 7.86-13.11 16.06-18.37 25-5.48-5.65-6.3-15.22-1.64-21.61z"
                        fill="#d2d3d5"
                        stroke="#d2d3d5"
                      />
                      <path
                        d="m782.52 1074.2c4.05 0.1599 8.11 0.05 12.18 0.13l0.21 0.46c-3.4 0.2-7.94-1.47-10.26 1.87-10.28 12.39-18.37 26.48-24.92 41.16-4.35 10-7.84 20.48-9.24 31.33-0.97 8.72-0.44 18.26 4.76 25.67 2.17 2.86 4.67 5.88 8.24 6.98 1.84 3.4299 5.12 5.65 8.62 7.1799-4.56 0.07-9.63-0.49-12.78-4.1899-3.57-4.14-8.77-6.75-11.34-11.72-5.18-8.98-4.46-19.9-2.54-29.69 3.45-15.72 10.49-30.42 18.7-44.18 5.2599-8.94 11.64-17.14 18.37-25z"
                        fill="#bdbfc1"
                        stroke="#bdbfc1"
                      />
                      <path
                        d="m784.65 1076.6c2.3199-3.34 6.86-1.67 10.26-1.87 0.58 2.73 0.75 5.51 1.1201 8.28-0.89 0.37-1.7401 0.7899-2.57 1.26-5.09 5.84-9.46 12.26-13.58 18.81-7 12.27-13.73 24.98-16.91 38.87-1.55 6.1801-2.5099 12.76-1.11 19.07 0.78 3.61 3.95 5.83 6.86 7.71-0.74 0-2.22-0.02-2.97-0.03 0.39 0.5901 1.15 1.76 1.53 2.3401-3.33 2.4399-5.48 6.58-3.79 10.7-3.57-1.1-6.07-4.12-8.24-6.98-5.2-7.41-5.73-16.95-4.76-25.67 1.4-10.85 4.89-21.33 9.24-31.33 6.55-14.68 14.64-28.77 24.92-41.16z"
                        fill="#fefefe"
                        stroke="#fefefe"
                      />
                      <path
                        d="m793.46 1084.3c3.03 8.95-4.57 18.54-13.4 20.14l-0.18-1.3301c4.12-6.5499 8.49-12.97 13.58-18.81z"
                        fill="#d2d3d5"
                        stroke="#d2d3d5"
                      />
                      <path
                        d="m861.81 1101.9c1.15-2.54 3.08-4.5801 4.94-6.61 2.35 1.86 6.14 2.5699 7.21 5.6599 0.44 2.42 1 4.8201 1.59 7.2201 1.09 9.1 2.69 18.14 3.55 27.27-1.34-2.1799-2.72-4.33-4.16-6.4199-0.23 6.96-0.98 13.89-2.02 20.78-0.41 2.6599-0.54 5.37-1.17 8.01-2.7 8.73-4.59 17.81-9.04 25.89-3.23 6.63-8.09 12.38-13.92 16.87-3.38 1.6901-7 2.8401-10.7 3.52-0.9-0.03-2.7-0.11-3.6-0.15 3.45-2.7799 4.64-7.48 2.6-11.48 9.79-1.62 15.37-11.08 18.72-19.53 4.75-12.12 6.56-25.13 7.64-38.01 0.6-11.01 0.89-22.22-1.64-33.02z"
                        fill="#fefefe"
                        stroke="#fefefe"
                      />
                      <path
                        d="m615.35 1097.8c1.61-0.36 3.2401-0.63 4.89-0.8201 8.52-0.95 17.33 0.65 24.83 4.87 7.84 4.2101 13.74 11.2 18.1 18.83 3.42 9.7999 4.71 20.68 1.21 30.65-5.17 16.29-21.31 28.18-38.39 28.39-8.2 0.42-15.95-2.62-23.27-5.9299-9.71-7.03-17.21-17.65-18.73-29.71-1.85-12.19 2.2-24.96 10.51-34.02 5.58-5.9801 12.96-10.19 20.85-12.26m3.07 14.73c-12.7 3.0599-21.74 16.43-19.59 29.37 1.62 14.44 16.75 25.42 31 22.35 14.1-2.23 24.37-17.26 21.18-31.21-2.46-14.49-18.44-24.58-32.59-20.51z"
                        fill="#619c9a"
                        stroke="#619c9a"
                      />
                      <path
                        d="m873.96 1101c1.03 0.3101 2.07 0.62 3.12 0.9301-0.49 2.09-1.02 4.1899-1.53 6.29-0.59-2.4001-1.15-4.8001-1.59-7.2201z"
                        fill="#cec2b9"
                        stroke="#cec2b9"
                      />
                      <path
                        d="m618.42 1112.5c14.15-4.0701 30.13 6.02 32.59 20.51 3.19 13.95-7.08 28.98-21.18 31.21-14.25 3.0701-29.38-7.91-31-22.35-2.15-12.94 6.89-26.31 19.59-29.37m3.98 10.06c-7.73 1.12-13.71 8.66-13.19 16.43 0.29 8.52 8.34 15.77 16.86 14.99 9.25-0.34 16.67-10 14.48-19.01-1.51-8.1101-10.03-14.02-18.15-12.41z"
                        fill="#fefefe"
                        stroke="#fefefe"
                      />
                      <path
                        d="m663.17 1120.7c7.92 11.12 8.06 26.64 2.33 38.76-7 15.59-24.5 25.62-41.5 23.64-7.72-0.8899-15.95-3.33-21.28-9.2899 7.32 3.3099 15.07 6.35 23.27 5.9299 17.08-0.21 33.22-12.1 38.39-28.39 3.5-9.9699 2.21-20.85-1.21-30.65z"
                        fill="#bdbfc1"
                        stroke="#bdbfc1"
                      />
                      <path
                        d="m622.4 1122.6c8.12-1.61 16.64 4.3 18.15 12.41 2.19 9.01-5.23 18.67-14.48 19.01-8.52 0.78-16.57-6.47-16.86-14.99-0.52-7.77 5.46-15.31 13.19-16.43z"
                        fill="#619c9a"
                        stroke="#619c9a"
                      />
                      <path
                        d="m564.08 1135.6c10.13-0.61 18.83 9.46 17.51 19.34-0.92 8.3201-8.39 15.23-16.78 15.41-0.32 10.17-0.17 20.36-0.05 30.54 4.58 0.72 9.37 2.2 12.46 5.89 5.6 6.0299 5.91 15.89 0.91 22.38-3.25 4.5299-8.82 6.34-14.11 7.0499 0.02-5.0599 0.15-10.12-0.39-15.15 1.05-19.29 0.3-38.68 0.47-58.01l-0.84 0.72c1.81-9.26 0.44-18.8 0.82-28.17z"
                        fill="#d2d3d5"
                        stroke="#d2d3d5"
                      />
                      <path
                        d="m700.32 1136.4c5.27-1.5 11.43-1.14 15.87 2.35 4.98 3.65 7.96 9.9 7.09 16.11-0.55 9.02-9.41 16.12-18.3 15.39-8.88-0.22-16.74-8.3101-16.33-17.25-0.3-7.35 4.77-14.27 11.67-16.6z"
                        fill="#d2d3d5"
                        stroke="#d2d3d5"
                      />
                      <path
                        d="m762.97 1142c3.79-3.65 8.57-6.7 14.06-6.38 9.3199-0.48 17.49 8.25 17.2 17.41 0.22 8.23-6.33 15.98-14.57 16.9-4.14-0.5701-8.55-0.8101-12.38 1.16-0.38-0.5801-1.14-1.75-1.53-2.3401 0.75 0.01 2.23 0.03 2.97 0.03-2.91-1.88-6.08-4.1-6.86-7.71-1.4002-6.3099-0.4402-12.89 1.1098-19.07z"
                        fill="#d2d3d5"
                        stroke="#d2d3d5"
                      />
                      <path
                        d="m837.19 1139.2c5.72-4.74 14.11-4.4301 20.42-1.05-1.12 10.87-2.94 21.74-6.61 32.07-7.5 1.11-15.44-2.4601-18.79-9.41-4.02-7.1701-1.61-16.84 4.98-21.61z"
                        fill="#d2d3d5"
                        stroke="#d2d3d5"
                      />
                      <path
                        d="m767.28 1171.1c3.83-1.9701 8.24-1.7301 12.38-1.16 3.59 1.59 7.39 3.9 8.6 7.89 1.24 3.61-0.76 7.63-3.97 9.47-3.59 2.41-8.09 1.97-12.18 1.6799-3.5-1.5299-6.78-3.75-8.62-7.1799-1.6899-4.1201 0.4601-8.2601 3.7901-10.7z"
                        fill="#619c9a"
                        stroke="#619c9a"
                      />
                      <path
                        d="m818.11 1187.1c6.29-1.7799 13.79-0.8999 18.11 4.4801 0.22 0.23 0.65 0.6799 0.8701 0.9099 2.04 4 0.85 8.7001-2.6 11.48-3.36 1.9801-7.32 2.05-11.09 2.39-4.65-1.89-10.4-4.64-10.86-10.34-0.4901-3.9799 2.6099-6.8699 5.5699-8.92z"
                        fill="#619c9a"
                        stroke="#619c9a"
                      />
                      <path
                        d="m806.41 1192.4c2.28-4.2201 7.35-5.0901 11.7-5.3501-2.96 2.05-6.06 4.9401-5.57 8.92 0.46 5.7 6.21 8.45 10.86 10.34-4.35 1.0701-9.1801 0.87-12.91-1.85-3.92-2.3699-6.67-7.7799-4.08-12.06z"
                        fill="#bdbfc1"
                        stroke="#bdbfc1"
                      />
                      <path
                        d="m631.36 1201.4c7.21-1.6399 15.25 1.91 18.86 8.3601 3.73 6.38 2.83 14.85-2.06 20.36-3.65 3.74-8.87 6.27-14.19 5.74-8.93-0.38-16.73-8.9-16.18-17.85-0.11-7.76 6.14-14.92 13.57-16.61z"
                        fill="#d2d3d5"
                        stroke="#d2d3d5"
                      />
                      <path
                        d="m702.4 1201.4c10.18-2.6 21.07 6.13 20.9 16.58 0.6 9.1-7.12 17.62-16.25 17.85-9.49 0.95-18.34-7.4401-18.43-16.84-0.39-8.1701 5.74-16.03 13.78-17.59z"
                        fill="#d2d3d5"
                        stroke="#d2d3d5"
                      />
                      <path
                        d="m773.37 1201.4c10.07-2.58 20.96 6.25 20.81 16.55 0.72 9.71-8.46 18.73-18.15 17.92-10.6-0.16-19.2-11.66-15.94-21.83 1.39-6.4398 6.95-11.31 13.28-12.64z"
                        fill="#d2d3d5"
                        stroke="#d2d3d5"
                      />
                      <path
                        d="m838.09 1204.1c3.7-0.6799 7.3199-1.83 10.7-3.52 5.2 1.28 10.41 3.55 13.4 8.2401 4.94 7.0399 3.48 17.68-3.32 23.02-7.97 7.54-22.61 4.16-26.9-5.7999-3.69-7.5101-1.14-17.57 6.12-21.94z"
                        fill="#d2d3d5"
                        stroke="#d2d3d5"
                      />
                      <path
                        d="m564.07 1266.7c10.36-0.53 19.08 9.86 17.44 19.94-0.97 8.4401-9.03 15.07-17.44 14.88 0.09-11.61 0.02-23.22 0-34.82z"
                        fill="#d2d3d5"
                        stroke="#d2d3d5"
                      />
                      <path
                        d="m630.28 1267.4c8.81-2.7999 18.98 2.8 21.52 11.63 2.27 6.97-0.59 15.14-6.64 19.25-4.47 3.39-10.59 3.97-15.85 2.36-5.47-2.09-10.1-6.86-11.17-12.73-2.07-8.64 3.47-18.29 12.14-20.51z"
                        fill="#d2d3d5"
                        stroke="#d2d3d5"
                      />
                      <path
                        d="m701.22 1267.4c10.11-3.26 22.14 4.9 22.11 15.69 0.93 9.2699-7.01 18.22-16.33 18.33-8.92 0.8199-17.69-6.4301-18.29-15.41-1.03-8.2301 4.49-16.5 12.51-18.61z"
                        fill="#d2d3d5"
                        stroke="#d2d3d5"
                      />
                      <path
                        d="m772.2 1267.4c9.8-3.17 21.24 4.4301 21.88 14.74 1.55 9.8201-7.11 19.86-17.14 19.3-10.13 0.62-18.9-9.59-17.34-19.48 0.77-6.79 5.9-12.96 12.6-14.56z"
                        fill="#d2d3d5"
                        stroke="#d2d3d5"
                      />
                      <path
                        d="m842.38 1267.5c5.24-1.4299 11.28-0.89 15.65 2.55 7.5 5.2 9.3799 16.59 3.99 23.96-4.54 7.26-15.01 9.6901-22.36 5.42-3.72-2.1901-7.17-5.37-8.3799-9.63-3.3501-8.78 2.1199-19.62 11.1-22.3z"
                        fill="#d2d3d5"
                        stroke="#d2d3d5"
                      />
                      <path
                        d="m564.19 1331.9c3.56 0.6699 7.35 1.24 10.26 3.6 5.69 4.08 8.73 11.72 6.72 18.53-1.01 4.0199-3.81 7.1899-6.53 10.19-3.69 0.3199-8.67-1.39-10.75 2.71 0.23-8.45 0.31-16.92-0.25-25.36 0.34-3.22 0.6-6.45 0.55-9.6699z"
                        fill="#d2d3d5"
                        stroke="#d2d3d5"
                      />
                      <path
                        d="m617.82 1348c0.53-9.8401 11.03-17.57 20.6-15.49 9.95 1.47 16.53 13.03 13.34 22.43-0.98 3.9-3.91 6.8201-6.94 9.28-6.53 0.06-13.06 0.09-19.59 0-4.98-3.7399-8.1-9.9499-7.41-16.22z"
                        fill="#d2d3d5"
                        stroke="#d2d3d5"
                      />
                      <path
                        d="m691.78 1339.7c4.47-6.75 14.04-9.5399 21.32-5.83 6.88 2.9399 11.2 10.62 10.15 18.03-0.42 5.0399-3.62 9.22-7.39 12.34-6.56 0.08-13.11 0.03-19.66-0.03-7.7499-5.28-10.13-16.93-4.4199-24.51z"
                        fill="#d2d3d5"
                        stroke="#d2d3d5"
                      />
                      <path
                        d="m764.98 1337c5.19-5.3 14.09-6.25 20.42-2.4501 6.72 3.5901 10.3 12 8.35 19.36-0.97 4.1499-3.86 7.45-6.89 10.3-6.56 0.14-13.12 0.09-19.67-0.01-2.24-1.9099-4.64-3.8199-5.88-6.5499-3.43-6.7301-1.87-15.52 3.67-20.65z"
                        fill="#d2d3d5"
                        stroke="#d2d3d5"
                      />
                      <path
                        d="m844.59 1332.5c9.95-2.09 20.39 6.27 20.5 16.43 0.5099 6.0601-2.91 11.5-7.3 15.34-6.82 0.01-13.64 0.08-20.45-0.03-2.88-3.25-5.95-6.6901-6.66-11.13-2.25-9.1999 4.6-19.19 13.91-20.61z"
                        fill="#d2d3d5"
                        stroke="#d2d3d5"
                      />
                      <path
                        d="m563.89 1367c2.08-4.1 7.06-2.39 10.75-2.71 16.86 0.16 33.73 0.12 50.59 0 6.53 0.09 13.06 0.06 19.59 0 17.12 0.15 34.25 0.15 51.38-0.02 6.55 0.06 13.1 0.11 19.66 0.03 17.11 0.08 34.22 0.16 51.33-0.04 6.55 0.1 13.11 0.15 19.67 0.01 16.83 0.16 33.65 0.16 50.48 0.03 6.81 0.11 13.63 0.04 20.45 0.03 5.02 0.06 10.04 0.13 15.07-0.11 0.12 9.98 0.03 19.96 0.09 29.94-5.26 0.2-10.53 0.05-15.79 0.11-39.56 0.1801-79.11 0.02-118.66 0.09-7.44-0.03-14.87 0.03-22.3-0.03-4.35-0.08-8.69-0.1001-13.03-0.04-39.47 0.12-78.94 0.04-118.41 0.04l-0.68 0.01c-6.65 0.03-13.3 0.02-19.94-0.01-0.42-9.1099 0.38-18.23-0.25-27.33z"
                        fill="#bdbfc1"
                        stroke="#bdbfc1"
                      />
                      <path
                        d="m516.49 1390c3.4 5.01 5.58 10.71 8.76 15.85 3.32 5.3099 10.13 7.97 16.19 6.35-1.55 4.77-3.07 9.5499-4.59 14.34-6.42-6.98-11.45-15.51-19.3-21.03-0.29-5.1801-0.64-10.35-1.06-15.51z"
                        fill="#f6f6f7"
                        stroke="#f6f6f7"
                      />
                      <path
                        d="m584.76 1394.3c39.47 0 78.94 0.08 118.41-0.04-2.35 74.6-4.77 149.2-7.16 223.8-1.04 32.28-1.97 64.57-3.11 96.86-35.69-0.14-71.39 0.08-107.08-0.08-0.44-50.58-0.02-101.18-0.16-151.76 0.06-55.01-0.11-110.03 0.05-165.03-0.11-1.28-0.41-2.49-0.93-3.65l-0.02-0.1z"
                        fill="#5bbba6"
                        stroke="#5bbba6"
                      />
                      <path
                        d="m738.5 1394.3c39.55-0.07 79.1 0.09 118.66-0.09 0.17 37.16-0.19 74.32 0.15 111.48-0.16 38.77 0.01 77.55-0.08 116.33-0.17 30.95 0.1 61.9-0.14 92.85-36.15-0.03-72.3-0.04-108.45 0.03-0.87-32.45-2.07-64.89-3.03-97.33-2.42-74.42-4.83-148.84-7.11-223.27z"
                        fill="#5bbba6"
                        stroke="#5bbba6"
                      />
                      <path
                        d="m584.78 1394.4c0.52 1.16 0.8199 2.37 0.93 3.65-0.16 55 0.01 110.02-0.05 165.03 0.14 50.58-0.28 101.18 0.16 151.76 35.69 0.16 71.39-0.06 107.08 0.08 3.96 0.02 7.94 0.02 11.91 0.07-0.08 13.94-0.03 27.89-0.02 41.84-13.71-0.01-27.42-0.01-41.13 0h-56.5c-11.63-0.02-23.26 0.01-34.89-0.01 0.02-13.94 0.07-27.88-0.03-41.81 4.13-0.06 8.26-0.06 12.39-0.13-0.2-30.93-0.02-61.85-0.09-92.77-0.01-49.36-0.01-98.72-0.02-148.07 0.17-26.55-0.35-53.11 0.26-79.64z"
                        fill="#3ba990"
                        stroke="#3ba990"
                      />
                      <path
                        d="m736.88 1714.9c3.91-0.01 7.84 0.01 11.76-0.02 36.15-0.07 72.3-0.06 108.45-0.03 4.0699 0.05 8.14 0.05 12.22 0.05-0.03 13.98 0.07 27.96-0.05 41.94-11.63-0.14-23.27-0.04-34.89-0.06h-56.3c-13.72 0-27.43-0.03-41.14 0.02-0.12-13.97-0.01-27.94-0.05-41.9z"
                        fill="#3ba990"
                        stroke="#3ba990"
                      />
                      <path
                        d="m607.16 1756.8h56.5c-0.1 5.37-0.35 10.77 0.34 16.13-0.39 1.4501-0.66 3.0701-1.78 4.2001-4.33 4.91-10.47 9.12-17.31 8.5-7.04-0.59-12.95-5-17.95-9.65-6.09-5.3199-12.45-10.48-19.79-13.98-0.01-1.75-0.02-3.49-0.01-5.2001z"
                        fill="#f8b57e"
                        stroke="#f8b57e"
                      />
                      <path
                        d="m778.07 1756.8h56.3c-0.01 1.7301-0.01 3.4801-0.01 5.26-8.53 4.0801-15.69 10.4-22.74 16.59-4.89 4.14-11.11 7.5199-17.71 6.95-5.69-0.52-10.52-4.14-14.28-8.1899-1.09-1.0601-1.44-2.5601-1.84-3.92 0.47-5.5601 0.28-11.13 0.28-16.69z"
                        fill="#f8b57e"
                        stroke="#f8b57e"
                      />
                      <path
                        d="m591.68 1768.4c2.44-2.9601 5.11-5.73 7.41-8.8 2.75 0.55 5.5099 1.24 8.08 2.41 7.34 3.5 13.7 8.66 19.79 13.98 5 4.65 10.91 9.0601 17.95 9.65 6.84 0.62 12.98-3.59 17.31-8.5 1.1201-1.13 1.39-2.75 1.78-4.2001 1.39-2.25 4.22-4.83 6.95-2.95 3.01 1.9399 2.43 5.96 3.2 9.01 1.47 6.95 4.09 13.63 5.06 20.71-0.27 3.41-1.18 7.35-4.53 9.03-20.25 11.42-42.26 19.37-64.58 25.66-11.48 4.1599-23.33 7.7899-35.59 8.58-4.32-1.5599-8.95-0.73-13.43-0.95-2.26-0.15-4.49 0.25-6.62 0.96-8.8-0.55-17.43-2.77-25.73-5.65-5.43-1.9299-11.17-4.09-14.89-8.74-3.33-7.33 1.48-15.09 6.33-20.43 11.66-11.69 27.87-16.68 42.81-22.66 4.87 0.07 9.65 1.1799 14.49 1.74-0.0699 4.11-0.0699 8.22-0.09 12.35 2.04-0.01 4.08 0.01 6.13 0.04 0-4.0601-0.01-8.11-0.03-12.15 3.25 0.88 6.51 1.74 9.77 2.62 0.06-3.5 0.14-7 0.26-10.48 4.72-0.7001 9.44-1.39 14.16-2.0601-5.17-3.3199-10.62-6.1899-15.99-9.1699z"
                        fill="#555"
                        stroke="#555"
                      />
                      <path
                        d="m834.36 1762.1c2.63-1.26 5.46-1.97 8.33-2.3999 1.93 2.75 4.24 5.2 6.5 7.6899-0.07 0.45-0.22 1.36-0.3 1.8101-5.1 2.5199-10.1 5.2899-14.85 8.4199 4.71 0.65 9.43 1.29 14.12 2.14 0.02 3.46 0.1 6.9401 0.27 10.42 3.18-0.66 6.35-2.4 9.59-2.2101 0.22 3.8501 0.01 7.7301-0.01 11.61 2.05 0.02 4.12 0.05 6.19 0.11-0.01-4.16-0.01-8.3-0.03-12.44 4.44-0.62 8.91-1.16 13.35-1.87 12.59 4.4301 25.37 8.97 36.47 16.55 6.56 4.46 12.43 10.63 14.59 18.45 0.8 2.6801 0.33 5.54-0.71 8.11-4.68 5.91-12.29 7.92-19.1 10.27-23.18 7.48-48.64 5.9-71.39-2.3-6.66-2.5599-13.61-4.1599-20.37-6.3899-17.27-5.54-34.2-12.38-50.02-21.28-2.31-1.2001-3.53-3.59-4.31-5.9401-0.57-9.3199 4.3-17.76 5.28-26.87 0.15-2.64 1.11-5.87 4.06-6.5 2.73-0.58 4.66 1.91 5.77 4.05 0.4 1.36 0.75 2.86 1.84 3.92 3.76 4.0499 8.59 7.6699 14.28 8.1899 6.6 0.5699 12.82-2.8099 17.71-6.95 7.05-6.1898 14.21-12.51 22.74-16.59z"
                        fill="#555"
                        stroke="#555"
                      />
                      <path
                        d="m849.19 1767.4c1.07 1.25 2.15 2.49 3.41 3.62-2.9 1.63-5.88 3.12-8.74 4.84 3.77-0.85 7.48-1.98 11.28-2.75 1.7 1.4501 3.48 2.8301 5.4 4.01-2.82 0.78-5.64 1.54-8.48 2.24 0.18 1.39 0.37 2.8101 0.58 4.24 5.41-0.4099 10.83-0.95 16.27-1 3.19 1.2401 6.6 1.65 9.98 2.05-0.34 0.1801-1.03 0.5601-1.37 0.74-4.44 0.71-8.91 1.25-13.35 1.87 0.02 4.14 0.02 8.28 0.03 12.44-2.07-0.06-4.14-0.09-6.19-0.11 0.02-3.88 0.23-7.76 0.01-11.61-3.24-0.1899-6.41 1.55-9.59 2.2101-0.17-3.48-0.25-6.9601-0.27-10.42-4.69-0.85-9.41-1.49-14.12-2.14 4.75-3.13 9.75-5.9 14.85-8.4199 0.08-0.4502 0.23-1.3603 0.3-1.8102z"
                        fill="#fdfdfd"
                        stroke="#fdfdfd"
                      />
                      <path
                        d="m589.46 1771.2c0.74-0.9401 1.48-1.86 2.22-2.76 5.37 2.98 10.82 5.85 15.99 9.1699-4.72 0.67-9.44 1.36-14.16 2.0601-0.12 3.48-0.2 6.98-0.26 10.48-3.26-0.88-6.52-1.74-9.77-2.62 0.02 4.04 0.03 8.09 0.03 12.15-2.05-0.03-4.09-0.05-6.13-0.04 0.02-4.13 0.02-8.24 0.09-12.35-4.84-0.5601-9.62-1.67-14.49-1.74l0.93-0.87c2.91-0.64 5.9-0.97 8.67-2.14 5.49 0.13 10.97 0.66 16.45 1.04 0.14-1.4601 0.29-2.9 0.4399-4.3101-2.74-0.6-5.43-1.38-8.11-2.14 1.88-1.14 3.54-2.5699 5.15-4.0499 3.87 0.83 7.66 1.97 11.53 2.8199-2.8599-1.5699-5.7499-3.0899-8.5799-4.6999z"
                        fill="#fdfdfd"
                        stroke="#fdfdfd"
                      />
                      <path
                        d="m586.51 1773c0.87-0.8101 1.81-1.53 2.95-1.88 2.83 1.61 5.72 3.13 8.58 4.7-3.87-0.85-7.66-1.99-11.53-2.82z"
                        fill="#3c2515"
                        stroke="#3c2515"
                      />
                      <path
                        d="m843.86 1775.8c2.86-1.72 5.84-3.21 8.74-4.84 0.83 0.6801 1.69 1.37 2.54 2.09-3.8 0.77-7.51 1.9-11.28 2.75z"
                        fill="#3c2515"
                        stroke="#3c2515"
                      />
                      <path
                        d="m572.58 1782.5c2.85-1.92 5.71-3.85 8.78-5.41 2.68 0.76 5.37 1.54 8.11 2.14-0.15 1.41-0.3 2.85-0.4399 4.3101-5.4801-0.3801-10.96-0.9101-16.45-1.0401z"
                        fill="#565656"
                        stroke="#565656"
                      />
                      <path
                        d="m860.54 1777.1c2.87 1.7001 5.68 3.5 8.37 5.48-5.44 0.05-10.86 0.5901-16.27 1-0.21-1.4299-0.4-2.85-0.58-4.24 2.84-0.7 5.66-1.46 8.48-2.24z"
                        fill="#555"
                        stroke="#555"
                      />
                      <path
                        d="m679.21 1799.7c5.11 6.72 6.78 16 4.64 24.13-1.28 4.47-6.17 5.74-10.16 6.64-25.06 5.42-47.93 17.57-72.42 24.83-20.51 6.03-42.37 5.6101-63.23 1.7101-7.78-1.53-15.81-2.62-23.01-6.13-3.18-1.7001-6.61-4.12-7.23-7.92-1.18-5.5599 2.16-10.74 6.04-14.37 3.72 4.65 9.46 6.8101 14.89 8.74 8.3 2.88 16.93 5.1 25.73 5.65 6.66 0.6899 13.39 0.6801 20.05-0.01 12.26-0.79 24.11-4.42 35.59-8.58 22.32-6.29 44.33-14.24 64.58-25.66 3.3499-1.6802 4.2599-5.6201 4.5299-9.0301z"
                        fill="#e0d4c8"
                        stroke="#e0d4c8"
                      />
                      <path
                        d="m760.43 1802.1c0.74 0.21 1.49 0.45 2.25 0.7 0.78 2.3501 2 4.74 4.31 5.9401 15.82 8.9 32.75 15.74 50.02 21.28 6.76 2.23 13.71 3.83 20.37 6.3899 22.75 8.2001 48.21 9.78 71.39 2.3 6.81-2.35 14.42-4.36 19.1-10.27 3.6 4.0901 7.66 9.4501 5.75 15.24-2.36 6-9.06 8.38-14.76 10.06-19.83 4.84-40.47 7.79-60.86 5.16-14.21-1.8-27.81-6.5901-41.08-11.8-16.08-6.46-32.26-12.92-49.22-16.67-3.76-0.9299-8.65-2.0599-9.87-6.3199-2.24-7.3402-0.35-15.16 2.6-22.01z"
                        fill="#e0d4c8"
                        stroke="#e0d4c8"
                      />
                      <path
                        d="m554.46 1843c2.13-0.71 4.36-1.11 6.62-0.96 4.48 0.22 9.11-0.61 13.43 0.95-6.66 0.6901-13.39 0.6999-20.05 0.01z"
                        fill="#424445"
                        stroke="#424445"
                      />
                      <path
                        d="m699.48 1919.3c4.02-1.46 8.34-1.1 12.54-1.16 6.99-0.08 13.98-0.05 20.97 0.03 3.53 0.04 7.22-0.34 10.55 1.14-14.68 0.25-29.38 0.24-44.06-0.01z"
                        fill="#f6f7f8"
                        stroke="#f6f7f8"
                      />
                    </g>
                  </g>
                </svg>
                <Logo />
              </div>
            </div>
          </div>
        </section>
        <section id="pick-up">
          <div className="container-text">
            <h2>We take very good care of them until you can pick them up!</h2>
            <h4>Veterinary Care:</h4>
            <p>
              All our kittens are
              <strong>examined thoroughly a minimum of 2x </strong>by our
              current veterinarian Dr Diane McKelvey; a
              <strong>certified Feline Specialist.</strong> Kind, caring and
              truly knowledgeable; we are extremely glad to have her. She won
              BCSPCA veterinarian of the year in 2016.
            </p>
            <h4>Deworming:</h4>
            <p>
              Deworming is done
              <strong>every 10 to 14 days 3x after week 6</strong> based on
              their weight: <strong>then monthly</strong>. All cats require
              regular worming. Once your kitten is home, we recommend worming
              medications purchased from your veterinarian as not all over the
              counter wormers cover all types of worms.
              <em>
                Even though your cat is an indoor cat, they require worming
              </em>
              as worm eggs can be brought into the house on owners’ shoes or
              other pet’s feet. Always follow your veterinarian’s advice.
              Wormers, flea, and tick medication can be lethal if administered
              incorrectly.
            </p>
            <h4>Vaccinations:</h4>
            <p>
              <strong>1st set </strong>of vaccines <strong>@ 8 weeks</strong>{' '}
              (FRCVP) with a veterinary health check, paid by us.
            </p>
            <p>
              <strong>2nd set</strong> of vaccines
              <strong>@ 12 weeks </strong> (FRCVP booster and initial leukemia
              vaccine) with a veterinary health check. Paid by us also. All
              kittens may react strongly to this set because they now have
              antibodies.
            </p>
            <p>
              <strong>3rd set</strong> of vaccines
              <strong>@ 16 weeks</strong> (Leukemia Booster) with a veterinary
              health check, paid by us. The rabies vaccine is optional.
            </p>
            <p>
              The rabies and leukemia vaccines are given in the 3rd set because
              the FRCVP and rabies vaccines should not be given at the same time
              or life-threatening complications and/or weakened immunity will
              occur. Current practices recommend redoing the vaccines at age 1,
              then every 3 years.
            </p>
            <h2>We prepare your Kitten for going home!</h2>
            <h4>Crating:</h4>
            <p>
              <strong>We do not crate train your kitten</strong>, but we do
              <em>make them comfortable being in their crate</em>. You may buy
              one of our crates for your kitten if you need.
            </p>
            <h4>Food:</h4>
            <p>
              Your kitten is weaned
              <strong>onto a mix of dry and wet (canned)</strong> food. We feed
              the kittens 6x a day, with a 50/50 mix of canned food mushed into
              dry Kitten Chow.
            </p>
            <h4>Spayed and Neutered:</h4>
            <p>
              <strong>All</strong> our kittens will be
              <strong>spayed/neutered</strong>{' '}
              <span className="underline">prior</span> to going home.
            </p>
            <h4>Socialization:</h4>
            <p>
              Since our kittens are part of our home, they are used to all the
              strange noises and sights that most homes have. Nanny Sophia, of
              course is constantly “on the job”.
            </p>
            <p>
              The socialization that we do, before they are 2 months old and go
              to your home, is extremely important to having a well- balanced,
              happy kitten. We handle the kittens daily!
            </p>
            <h2>We make sure your kitten is well socialized</h2>
            <h4>Litter:</h4>
            <p>
              All kittens <strong>are completely litter trained</strong> before
              they go home.{' '}
            </p>
            <p>
              As you wait for your kitten to come home, we keep you updated on
              the progress of your kitten. We appreciate your patience in not
              taking the kittens too early, and we understand you do not want to
              miss out on any of their babyhood.
            </p>
            <h2>The best day! Picking up your kitten</h2>
            <h4>Kittens go home!</h4>
            <p>
              We arrange a mutually agreeable pick-up time, date, and place.
            </p>
            <p>
              We try to connect owners with other people going the same
              direction for Kitten Pooling. This save owners time, money, and is
              less stressful for the kitten as it is traveling with a sibling.
            </p>
            <Image
              src={aasia}
              alt="aasia as a kitten"
              className="deposit-img"
            />
          </div>
        </section>

        <section id="form-info">
          <div className="container-text">
            <h1 className="header-2">Adoption Form</h1>
            <p>
              {' '}
              If you are interested in adopting one of our kittens please fill
              out the form below
            </p>
          </div>

          <div className="form-container">
            <form action="https://submit-form.com/AqUcFuf1" method="" id="form">
              <label htmlFor="firstName">Full Name</label>
              <div className="input-grid">
                <input
                  type="hidden"
                  name="_feedback.success.title"
                  value="Thanks for your interest in out kittens, we will be in touch as soon as we can!"
                />
                <input
                  required
                  type="text"
                  name="First Name"
                  id="firstName"
                  placeholder="First"
                />
                <input
                  required
                  type="text"
                  name="Last Name"
                  id="lastName"
                  placeholder="Last"
                />
              </div>
              <div className="input-grid">
                <label htmlFor="phone">Phone</label>
                <label htmlFor="email">Email</label>
                <input required type="phone" name="phone" id="phone" />
                <input required type="email" name="Email" id="email" />
              </div>
              <label htmlFor="address">Address</label>
              <div className="input-grid">
                <input
                  type="street"
                  name="address"
                  required
                  id="street"
                  placeholder="Street"
                />
                <input
                  type="city"
                  name="address"
                  required
                  id="city"
                  placeholder="City"
                />
                <input
                  type="province"
                  name="address"
                  required
                  id="province"
                  placeholder="Province"
                />
                <input
                  type="postal"
                  name="address"
                  required
                  id="postal"
                  placeholder="Postal code"
                />
              </div>
              <div className="input-grid">
                <div className="email-help">
                  We will <span className="underline">never</span> share your
                  information with anyone else.
                </div>
                <div className="email-help">
                  We need verifiable info to prove that you are a person, and
                  not a cat mill.
                </div>
              </div>
              <label className="family" htmlFor="family">
                Tell us about you, your family, and your home.
              </label>

              <textarea
                required
                name="About us"
                id="family"
                cols={30}
                rows={6}
                placeholder="-What occupations do your household members hold?&#10;-Tell us about any children, and what ages they are?&#10;-Any other pets in your home?&#10;-Have you owned a cat/Ragdoll/purebred cat or pets before?&#10;-Who is the kitten for?&#10;-Who will be responsible for caring for the kitten?"
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>

          <div className="container-text">
            <p>
              If a kitten comes up for sale unexpectedly, we call the people on
              our Call List in the order they returned the Adoption Information
              requested.
            </p>

            <h2>
              Please contact us at
              <a href="mailto:azureskyRagdolls@gmail.com">
                <span className="underline"> azureskyRagdolls@gmail.com </span>
              </a>
              with <strong>any</strong> questions
            </h2>
            <p>
              Generally, because I am an old Cat Lady, I have commitments every
              afternoon and I go to bed extremely early
            </p>
            <p>I usually answer messages only between 7 am and 2 pm.</p>
          </div>
        </section>

        <section id="faq">
          <Image src={catTower} alt="" className="background-image" />
          <div className="faq-subheader">
            <h2 className="questions">
              QUESTIONS AROUND AN AZURE SKY RAGDOLL KITTEN?
            </h2>
            <h5 className="questions-contact">
              If its not on the list, feel free to email us!
            </h5>
          </div>
          <div className="top">
            <h1 className="faq-header">FAQ</h1>
            {faqQuestions.map((q) => (
              <FaqQuestion
                question={q.question}
                answer={q.answer}
                key={q.answer + q.answer}
              />
            ))}
          </div>
        </section>
      </Container>
    </>
  )
}

export default Purchasing

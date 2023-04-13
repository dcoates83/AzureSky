import Image from 'next/image'

import ailyaMom from '../assets/Ailya mom.jpg'
import amethyst from '../assets/Amethyst.jpg'
import daddyWarbucks from '../assets/Daddy warbucks.jpg'
import flamePoint from '../assets/Flame-point-Ragdoll-cat.jpg'
import seal from '../assets/Seal-Tortie-Ragdoll-cat-from-Kansas-Ragdolls-bred-by-Leanna-at-House-of-Steward-Ragdolls-625x469.jpg'
import aasia from '../assets/aasia-bed.jpg'
import athena from '../assets/athena-catbed.jpg'
import buckwheat from '../assets/buckwheat.jpg'
import chocolate from '../assets/chocolate.jpg'
import dandelion from '../assets/dandilion.jpg'
import fugianna from '../assets/fugianna.jpg'
import grumpyCat from '../assets/grumpycat.jpg'
import historyLanding from '../assets/history-landing.jpg'
import josephine from '../assets/josephine.jpg'
import appearance from '../assets/r-apperance.jpg'
import eyesGreen from '../assets/r-eyes-green.jpg'
import eyes from '../assets/r-eyes.jpg'
import leash from '../assets/r-leash.jpg'
import sapphire from '../assets/sapphire-with-kitten.jpg'
import solid from '../assets/solid.jpg'
import tzar from '../assets/tzar-box.jpg'
const AboutPage = () => {
  return (
    <>
      {/* <MetaTags
        title="Home"
        description="
  Ragdolls are known worldwide for their affectionate nature, beautiful appearance, and
  intelligence. Stunning eyes, soft luxurious fur and a variety of coat colors and marking’s hallmark the Ragdoll of today, making them extremely popular."
      /> */}
      <section id="about" className="section">
        <Image src={historyLanding} alt="" className="history-landing" />
        <div className="container-text">
          <h2 className="header-2 about">About Ragdolls</h2>
          <p className="">
            Ragdolls are known worldwide for their affectionate nature, stunning
            appearance, and intelligence. Beautiful eyes, soft luxurious fur,
            and a variety of coat colors make them extremely popular.
          </p>
          <article className="history">
            <h2 className="header">Ragdolls history</h2>
            <p className="text">
              In the 1960s a longhaired cat named Josephine produced several
              litters. Ragdolls originated in Riverside, California with a woman
              named Ann Baker. Josephine, a{' '}
              <a
                rel="noreferrer"
                href="https://en.wikipedia.org/wiki/Persian_cat"
                title="Persian cat"
              >
                <span className="underline">Persian</span>
              </a>
              /
              <a
                rel="noreferrer"
                href="https://en.wikipedia.org/wiki/Turkish_Angora"
                title="Turkish Angora"
              >
                <span className="underline">Angora</span>
              </a>{' '}
              type, had litters sired by several male{' '}
              <a
                rel="noreferrer"
                href="https://en.wikipedia.org/wiki/Birman"
                title="Birman"
              >
                <span className="underline">Birman</span>
              </a>
              /
              <a
                rel="noreferrer"
                href="https://en.wikipedia.org/wiki/Burmese_cat"
                title="Burmese cat"
              >
                <span className="underline">Burmese</span>
              </a>
              -like cats, one of which had the{' '}
              <a
                rel="noreferrer"
                href="https://en.wikipedia.org/wiki/Siamese_cat"
                title="Siamese cat"
              >
                <span className="underline">Siamese</span>
              </a>{' '}
              point coloration. All the kittens had docile, placid temperaments,
              affectionate natures, and a tendency to go limp and relaxed when
              picked up.
            </p>
            <div className="ragdoll-history-img">
              <Image src={josephine} alt="josephine ragdoll" />
            </div>
            <p>
              Subsequent litter produced more of the same. Ann Baker believed
              that she had something special. Set out to create what is now
              known as the Ragdoll. She selectively bred over many years for
              desirable traits, such as large size, gentle demeanor, pointed
              coloration, and a tendency to go limp when picked up.
            </p>
            <p>
              Out of those early litters came Blackie, an all black Burmese-like
              male, and Daddy Warbucks, a seal point with white feet. Daddy
              Warbucks sired the founding bi-color female Fugianna, and Blackie
              sired Buckwheat, a dark brown/black Burmese-like female. Both
              Fugianna and Buckwheat were daughters of Josephine. All Ragdolls
              are descended from Baker's cats through matings of Daddy Warbucks
              to Fugianna and Buckwheat.
            </p>
            <div className="ragdoll-history-img">
              <Image
                src={fugianna}
                alt="fugianna cat"
                className="history-img"
              />
              <Image
                src={daddyWarbucks}
                alt="daddy warbucks cat"
                className="history-img"
              />
              <Image
                src={buckwheat}
                alt="buckwheat cat"
                className="history-img"
              />
            </div>
            <p>
              Anne was extremely capitalistic. She tried to patent her Ragdoll
              breed, enacting a fee from anyone else breeding them. While we
              appreciate Anne for bringing about the Ragdoll breed, we are
              thankful other breeders took over establishing Ragdolls as a new
              breed. Breeders separated themselves from Anne and worked to
              establish the Ragdoll as a new breed; eligible for registration
              with the cat registries.
            </p>
            <h4 className="header">Grumpy Cat</h4>
            <div className="ragdoll-history-img">
              <Image src={grumpyCat} alt="grumpy cat" className="heading-img" />
            </div>
            <p>
              Most strangely the most well-known Ragdoll, which greatly enhanced
              public interest in Ragdolls in the 1990’s was NOT a Ragdoll - the
              internet sensation Grumpy Cat. While Grumpy Cat had the markings
              of your typical Ragdoll, he was of unknown mixed breeds. He had
              multiple genetic defects; producing his grumpy appearance, a large
              underbite and feline dwarfism. He became an internet sensation
              quickly, stirring a lot of interest in the color and markings
              typical of Ragdolls. Today Ragdolls retain their own fans based on
              their loving natures and NON grumpy appearance. Their beauty and
              loving natures have kept Ragdolls one of the 10 most popular cat
              breeds in the world.
            </p>
          </article>
          <article>
            <h1 className="header-2 center">Appearance</h1>
            <p className="">
              All Ragdolls get their color points from their Siamese/Birman
              heritage. The most known Ragdoll coloring and marking combination
              is called the Bicolor. We give you explanations of Ragdoll color
              and markings later, Bicolors are characterized by white markings
              overlaying the dark points. Bicolors have white boots, mitts,
              belly, bib, and a white V over the nose.
            </p>
            <Image
              src={appearance}
              alt="cat looking up"
              className="background-image"
            />
            <h3 className="header">Eyes</h3>
            <p className="">
              Unlike other cat’s eyes who change from Blue, most Ragdolls eyes
              stay an intense shade of Blue. Mink Ragdolls, where different
              combinations of the Birman gene can be expressed, usually have
              Aqua green eyes and a Lilac’s stunning, almost iridescent Blue.
              While Mink eyes can be gold, most are green. Non-Mink Ragdolls
              always have Blue eyes.
            </p>
            <div className="ragdoll-history-img">
              <Image
                src={eyes}
                alt="eyes of a ragdoll"
                className="heading-img"
              />
              <Image
                src={eyesGreen}
                alt="green ragdoll eyes"
                className="heading-img"
              />
            </div>
          </article>
          <article>
            <h3 className="header">personality</h3>
            <p>
              Ragdolls are most known for their laid back, dog-like
              personalities. This does not mean that kittens do not go through
              the usual period of getting the Zoomies and throwing you some
              attitude here and there, but for the most part they are weirdly
              easy to get along with. Unlike other cat breeds, Ragdolls LIKE to
              be with you. They are not aloof and tend to follow you around like
              a dog.
            </p>
          </article>
          <article>
            <h3 className="header">Fur</h3>
            <p>
              Ragdolls have extremely silky, luxurious fur to touch. It’s hard
              to describe until you feel it. Ragdolls lack the thick undercoat
              typical of other Long Hair breeds. The length of the hair strands
              is the same, but it is much easier to care for; rarely matting and
              requiring infrequent brushing or bathing. Since Minks have the
              plushest coat, I would recommend brushing those ones more
              frequently.
            </p>
          </article>
          <article>
            <h3 className="header">Maturation</h3>
            <p>
              All Ragdolls are slow to mature. They become large cats with
              females attaining 10-15 lbs. and males 15-20 lbs. They do not
              attain full size, coat color or coat density until age 4. This
              means they get bigger, fluffier, and prettier…but it takes time!
            </p>
          </article>
          <article>
            <h3 className="header">Most are born white</h3>
            <p>
              Most Ragdolls are born completely white with their color
              developing over 3-4 years. After the first few week’s colors
              deepen and white markings become more apparent. The points become
              darker because of an interesting chemical change wherever the cat
              is a cooler temperature. Inside their mothers’ womb, they are kept
              a consistently warm temperature, and because of this they stay
              white. Once they leave the womb, everywhere else is a cooler
              temperature and this makes their fur become darker.
            </p>
          </article>
          <article>
            <h3 className="header">intelligence</h3>
            <p>
              Highly intelligent, Ragdolls can be trained to do many things
              including to play fetch and be leash trained.
            </p>
            <div className="ragdoll-history-img">
              <Image
                src={leash}
                alt="ragdoll on a leash"
                className="heading-img"
              />
            </div>
          </article>
        </div>
        <section id="colors">
          <div className="container-text">
            <h1 className="header-2 center">Color Patterns</h1>
            <div className="subheader-colors">
              <h2>
                Ragdolls come in a many varieties of coat colors, white
                markings, and thickness of their fur!
              </h2>
              <div className="hide-me">
                <h4>Things to remember:</h4>
                <ul>
                  <li>
                    <ol>
                      <li>
                        <strong>Color</strong> refers to the main body color of
                        the cat.
                      </li>
                      <li>
                        <strong>Genes</strong> dictate what we look like.
                      </li>
                      <li>
                        <strong>Markings</strong> refers to the white areas.
                      </li>
                    </ol>
                  </li>
                </ul>
                <p>
                  <strong>“Dominant”</strong> genes <em>always</em> show over{' '}
                  <strong>“Recessive"</strong> genes. Some genes are even more
                  dominant than others. Like people, cats can carry both
                  Dominant and Recessive genes.
                </p>
                <p>
                  {' '}
                  Recessive genes produce the lighter colors. To get a diluted
                  color, such as Lilac or Blue, you must have the same recessive
                  gene from each parent, with no dominant genes getting in the
                  way!
                </p>
                <p>
                  {' '}
                  Scientists are still figuring this all out and many gene
                  “sets” are involved, but thankfully enough is known for us
                  Breeders to figure out what color and markings our kittens
                  likely will have. Do not worry about it! You will fall in love
                  with whatever kitten you fall in love with! ……. Let us do the
                  data crunching.
                </p>
              </div>

              <h1 className="header-2 center">Color Points</h1>
              <div className="ragdoll-img-container">
                <div>
                  <h4 className="color-header">Seal</h4>
                  <Image
                    src={sapphire}
                    alt="Seal point ragdoll"
                    className="ragdoll-img"
                  />
                  <p>
                    Black is known as Seal in the cat world. Seal looks more
                    like a blackish brown. We have 3 Seal cats: King Tzar, Queen
                    Sapphire and Queen Aasia.
                  </p>
                </div>
                <div>
                  <h4 className="color-header">Blue</h4>
                  <Image
                    src={athena}
                    alt="Blue Point"
                    className="ragdoll-img"
                  />
                  <p>
                    Blue in cat world means grey! Blue is a dilute Seal. Our
                    Queen Athena is a Blue Bicolor and Queen Aiyla is a Blue
                    Mitted.{' '}
                  </p>
                </div>
                <div>
                  <h4 className="color-header">Chocolate</h4>
                  <Image
                    src={chocolate}
                    alt="Chocolate point ragdoll"
                    className="ragdoll-img"
                  />
                  <p>
                    Chocolate is a version of the seal gene. A combination of a
                    light-brown body and chocolate-brown extremities. We have no
                    chocolates.
                  </p>
                </div>
                <div>
                  <h4 className="color-header">Lilac</h4>
                  <Image
                    src={amethyst}
                    alt="Lilac point ragdoll"
                    className="ragdoll-img"
                  />
                  <p>
                    Lilac is dilute chocolate, which are very uncommon, are
                    known Lilacs. Lilacs are hard to get. Our Queen Amethys is a
                    Lilac and our King Tzar carries a Lilac gene
                  </p>
                </div>
                <div>
                  <h4 className="color-header">Red</h4>
                  <Image
                    src={flamePoint}
                    alt="Red point ragdoll"
                    className="ragdoll-img"
                  />
                  <p>
                    Red (Flame) in cat world means orange and is a sex-linked
                    gene. This means if you cross an orange cat and another
                    color cat, ALL the male kittens will show the orange. Rarely
                    a female will. If she does, usually she will be sterile. We
                    don't dont have any Red cats.
                  </p>
                </div>
                <div>
                  <h4 className="color-header color-text-fix">
                    Tortie & Calicos
                  </h4>
                  <Image
                    src={seal}
                    alt="Tortie Ragdoll"
                    className="ragdoll-img"
                  />
                  <p>
                    Calicos have White, Seal and Orange patches. Torties have NO
                    White areas. All can come in the various dilute versions and
                    these areas can also be striped. We have no Tortie/calico
                    cats.
                  </p>
                </div>
              </div>

              <h1 className="header-2 center">Variations of White Markings</h1>
              <div className="colors-container ">
                <div>
                  <h4 className="color-header">Solid</h4>
                  <Image
                    src={solid}
                    alt="Solid color ragdoll"
                    className="ragdoll-img"
                  />
                  <p>
                    All one color, no white markings, no graduation of color
                    between body and points. We have no Solids. Solids are rare
                    and can have green eyes. Although uncommon you can trace
                    these cats back to the original Ragdoll lines. We have no
                    Solids
                  </p>
                </div>
                <div>
                  <h4 className="color-header">Bicolor</h4>
                  <Image
                    src={tzar}
                    alt="Tzar in a box"
                    className="ragdoll-img"
                  />
                  <p>
                    Bicolor means 2 colors; white and other. Bicolors are known
                    as the “Traditional” Ragdoll. They have a white V on their
                    face which extends into a white ruff, pink eraser noses, a
                    white underbelly and elegant white mitts and boots. Sapphire
                    and Tzar are Traditional Bicolors.
                  </p>
                </div>
                <div>
                  <h4 className="color-header">High White</h4>
                  <Image
                    src={dandelion}
                    alt="van ragdoll"
                    className="ragdoll-img"
                  />
                  <p>
                    All white markings are from the white spotting factor
                    expression. High whites, while not show standard, are very
                    sought after by pet owners as they are very flashy and
                    unique.{' '}
                  </p>
                  <p>
                    {' '}
                    We usually have one in every litter from every liter when we
                    cross a bicolor, with another bicolor.
                  </p>
                </div>
                <div>
                  <h4 className="color-header">Mitted</h4>
                  <Image
                    src={ailyaMom}
                    alt="mitted ragdoll"
                    className="ragdoll-img"
                  />
                  <p>
                    Mitted Ragdolls have white paws and/or back feet; known as
                    Mitts and Boots. Usually, the mitts and boots are smaller
                    than on the Bicolor and they usually have a teeny white
                    chin. A Mitted Ragdoll may have some white on the chest
                    (called a Bib), on their tummy and face as well, but always
                    less than Bicolors. If there is white on the face their nose
                    must be dark and the white area cannot be the distinctive
                    white V of the Bicolor.
                  </p>
                </div>
              </div>

              <h1 className="header-2 center">Minks</h1>
              <p>
                A gene called the "Burmese gene" traces back to the original
                ragdoll Daddy Warbucks. It is responsible for a much denser,
                softer, and a deeper coloring.
              </p>
              <p>
                {' '}
                Minks have usually have green eyes instead of blue eyes. Their
                eyes may also come in gold.
              </p>
              <div className="colors-container">
                <div>
                  <h4 className="color-header">Standard Minks</h4>
                  <Image
                    src={ailyaMom}
                    alt="ailyas mom"
                    className="ragdoll-img"
                  />
                  <div>
                    <p>
                      We call these ones our Fluffy cats. A Mink’s coat is much
                      softer. I do not know how that is possible since the
                      regular Ragdoll is incredibly soft. Their fur is as soft
                      as a Mink fur coat and they have the softest, plushest
                      coats of all Ragdolls. We have 2 Mink Queens Aasia and
                      Aiyla.
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="color-header">Sepia</h4>
                  <Image
                    src={aasia}
                    alt="aasia in her cat bed"
                    className="ragdoll-img"
                  />
                  <div>
                    <p>
                      {' '}
                      Believe it or not! Sepias have the plushest and softest
                      coats of Minks, which are already softer than of all other
                      Ragdolls. Sepia Minks are uncommon. Aasia is a Sepia Mink.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container-text">
          <div className="minks-span">
            <h4 className="color-header">Be careful what you hear!</h4>
            <p>
              Despite some completely wrong rumors you find on the internet{' '}
              <em>that Minks are not purebred Ragdolls; </em>
              they <strong>absolutely are.</strong> While not show standard yet,
              they can be traced back to the original lines via DNA tests and
              registration records, all purebred Mink Ragdolls are recognized by
              Tica (The International Cat Association) as purebred Ragdolls.
              Some older breeders who focused their narrow breeding programs to
              only Bicolor and Mitted and no Minks complained bitterly online –
              creating these fake rumors. Minks are Ragdolls.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage

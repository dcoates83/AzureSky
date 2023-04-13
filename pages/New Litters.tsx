import Image from 'next/image'

const NewLittersPage = () => {
  return (
    <>
      {/* <MetaTags title="NewLitters" description="NewLitters page" /> */}
      <section id="upcoming">
        <div className="container-text">
          <h1 className="header-2">Upcoming Litters</h1>
          <p>
            All litters will all be from our two males King Tzar & King Tao. Who
            is a Seal Bicolor and carries the Lilac gene.
          </p>

          <p>
            Cats typically do not show any signs of pregnancy until second month
            of pregnancy.
          </p>
          <p>
            When we believe the Queens are pregnant, we update the{' '}
            <strong>anticipated litter birth date on the website.</strong> Cats’
            gestation period varies around 58-70 days.
          </p>
          <p>
            While vaccinations are given at 8, 12 and 16 weeks, actual vaccines
            and alter dates are dependent on the Veterinarians availability. Go
            home dates may change because of this.
          </p>
          <h2>
            Predicted colors and dates of the kittens will be listed,
            <br /> but of course Mother Nature does her own thing!
          </h2>
          <p>
            We space litters so Queens get the best possible care, kittens get
            their best socialization and Mommas get a break.
          </p>
          <h5>
            <strong className="underline">Remember</strong>
          </h5>
          <ol className="remember">
            <li>
              Litters could be earlier, later or even the order switched. If you
              place a deposit,{' '}
              <strong>
                please check the website litter postings regularly.
              </strong>
            </li>
            <li>Kittens are chosen in the order of deposits received.</li>
            <li>Each Depositor may pick or pass on a litter.</li>
            <li>
              If all the kittens are taken from a litter{' '}
              <strong>your deposit automatically</strong> moves to the next
              litter <span className="underline">until you get a kitten.</span>
            </li>
            <li>You can change your mind re sex, color, coat, and markings.</li>
          </ol>
          <h2>
            Check out all new photos of the kittens on our
            <a
              rel="noopener"
              href="https://www.facebook.com/Azure-Sky-Ragdolls-2203345016408284/"
              target="_blank"
              className="nav-link icoFacebook"
              title="Facebook"
            >
              <span className="underline"> Facebook!</span>
            </a>{' '}
          </h2>
          <section id="posted-litters">
            <h1 className="header-2">Posted Litters</h1>

            <div className="posted ">
              {/* {% for post in site.posts %} */}
              <div className="blog-posted">
                {/* <h2 className="posted-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2> */}
                <a href="{{ post.url | relative_url }}">
                  <Image
                    className="blog-img"
                    src="{{ post.thumbnail | relative_url}}"
                    alt={''}
                  />{' '}
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
        </div>
      </section>
    </>
  )
}

export default NewLittersPage

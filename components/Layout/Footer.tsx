import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <ul className="navbar-nav mb-lg-0 social-network social-circle mb-2 me-auto">
          <li className="nav-item">
            <a
              rel="noopener"
              href="https://www.facebook.com/Azure-Sky-Ragdolls-2203345016408284/"
              target="_blank"
              className="nav-link icoFacebook"
              title="Facebook"
            >
              <FacebookOutlinedIcon sx={{ color: '#0A82ED' }} />
            </a>
          </li>
        </ul>
      </div>
      <div className="links">
        <nav className="footer-links">
          <ul className="footer-items">
            <li>
              <a href="mailto:devonbcoates@gmail.com" target="_blank">
                Web Design
              </a>
            </li>
            <li>
              <Link href="/Purchasing#purchasing-form">
                Purchasing a Kitten
              </Link>
            </li>
            <li>
              <Link href="/Purchasing#faq">FAQ</Link>
            </li>
            <li>
              <a href="mailto:AzureSkyRagdolls@gmail.com" target="_blank">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="copyright">
        Azure Sky Ragdolls &copy;{' '}
        <span id="date">{new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}

export default Footer

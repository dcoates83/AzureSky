import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import { Box, useMediaQuery } from '@mui/material'
import Link from 'next/link'

const Footer = () => {
  const mobile = useMediaQuery((theme: any) => theme.breakpoints.down('sm'))

  return (
    <Box component="footer" sx={{ pb: mobile ? '4em' : 'unset' }}>
    
      <div className="links">
        <nav className="footer-links">
          <ul className="footer-items">
            <li>
              <Link href="/Purchasing#purchasing-form">
                Purchasing a Kitten
              </Link>
            </li>
            <li>
              <Link href="/Purchasing#faq">FAQ</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="copyright">
        Azure Sky Ragdolls &copy;{' '}
        <span id="date">{new Date().getFullYear()}</span>
      </div>
    </Box>
  )
}

export default Footer

import FiberNewRoundedIcon from '@mui/icons-material/FiberNewRounded'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded'
import ShareRoundedIcon from '@mui/icons-material/ShareRounded'
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded'
import { Box } from '@mui/material'

import { useRouter } from 'next/router'
import Footer from './Footer'
import NavBar from './NavBar'
export default function BlogLayout({
  // preview,
  // loading,
  children,
}: {
  // preview: boolean
  // loading?: boolean
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = router.pathname
  if (/\/studio\//.test(pathname)) {
    return (
      <>
        <NavBar
          navItems={[
            { name: 'Home', icon: <HomeRoundedIcon /> },
            { name: 'About', icon: <InfoRoundedIcon /> },
            { name: 'Purchasing', icon: <ShoppingBasketRoundedIcon /> },
            {
              name: 'New Litters',
              icon: <FiberNewRoundedIcon />,
              mobileLabel: 'Litters',
            },
            {
              name: 'Supplies',
              href: '/RecommendedSupplies',
              icon: <LocalMallRoundedIcon />,
            },
            { name: 'Socials', icon: <ShareRoundedIcon /> },
          ]}
        />
        <Box sx={{ pt: 8 }}>{children}</Box>
      </>
    )
  }
  return (
    <>
      <div className="min-h-screen">
        <NavBar
          navItems={[
            { name: 'Home', icon: <HomeRoundedIcon /> },
            { name: 'About', icon: <InfoRoundedIcon /> },
            { name: 'Purchasing', icon: <ShoppingBasketRoundedIcon /> },
            {
              name: 'New Litters',
              icon: <FiberNewRoundedIcon />,
              mobileLabel: 'Litters',
            },
            {
              name: 'Supplies',
              href: '/RecommendedSupplies',
              icon: <LocalMallRoundedIcon />,
            },
            { name: 'Socials', icon: <ShareRoundedIcon /> },
          ]}
        />
        <Box
          sx={{ overflow: 'hidden', pt: 8, scrollMarginTop: '64px' }}
          // sx={{ overflow: 'hidden', pt: 8, pl: 0, pr: 0 }}
        >
          {children}
        </Box>
        <Footer />
      </div>
    </>
  )
}

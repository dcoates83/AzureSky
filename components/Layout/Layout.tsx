import FiberNewRoundedIcon from '@mui/icons-material/FiberNewRounded'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import { Box, Container, useMediaQuery, useTheme } from '@mui/material'
import AlertBanner from 'components/AlertBanner'

import { useRouter } from 'next/router'
import path from 'path'
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
            { name: 'New Litters', icon: <FiberNewRoundedIcon /> },
            { name: "Socials", icon: <FiberNewRoundedIcon /> },
            // { name: 'Shop', icon: <ShoppingCartRoundedIcon /> },
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
            { name: 'New Litters', icon: <FiberNewRoundedIcon /> },
            { name: "Socials", icon: <FiberNewRoundedIcon /> },
            // { name: 'Shop', icon: <ShoppingCartRoundedIcon /> },
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

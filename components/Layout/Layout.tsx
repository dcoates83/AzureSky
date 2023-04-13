import FiberNewRoundedIcon from '@mui/icons-material/FiberNewRounded'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import { Box } from '@mui/material'
import AlertBanner from 'components/AlertBanner'

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
  return (
    <>
      <div className="min-h-screen">
        {/* <AlertBanner preview={preview} loading={loading} /> */}
        {/* <AlertBanner preview={preview} loading={loading} /> */}
        <NavBar
          navItems={[
            { name: 'Home', icon: <HomeRoundedIcon /> },
            { name: 'About', icon: <InfoRoundedIcon /> },
            { name: 'Purchasing', icon: <ShoppingBasketRoundedIcon /> },
            { name: 'New Litters', icon: <FiberNewRoundedIcon /> },
            // { name: 'Shop', icon: <ShoppingCartRoundedIcon /> },
          ]}
        />
        <Box className="page-container">{children}</Box>
        <Footer />
      </div>
    </>
  )
}

import FiberNewRoundedIcon from '@mui/icons-material/FiberNewRounded'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import AlertBanner from 'components/AlertBanner'

import NavBar from './NavBar'
export default function BlogLayout({
  preview,
  loading,
  children,
}: {
  preview: boolean
  loading?: boolean
  children: React.ReactNode
}) {
  return (
    <>
      <div className="min-h-screen">
        <AlertBanner preview={preview} loading={loading} />
        <NavBar
        navItems={[
          { name: 'Home', icon: <HomeRoundedIcon /> },
          { name: 'About', icon: <InfoRoundedIcon /> },
          { name: 'Purchasing', icon: <ShoppingBasketRoundedIcon /> },
          { name: 'New Litters', icon: <FiberNewRoundedIcon /> },
          { name: 'Shop', icon: <ShoppingCartRoundedIcon /> },
        ]}
      />
      {children}
      {/* <Footer /> */}
      </div>
    </>
  )
}

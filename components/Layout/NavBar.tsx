import {
  BottomNavigation,
  BottomNavigationAction,
  IconButton,
  Paper,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import Image from 'next/image'
import { useRouter } from 'next/router'
import * as React from 'react'

import Logo from '../../assets/Logo.svg'
interface INavItems {
  name: string
  icon: React.ReactNode
}

interface Props {
  navItems: INavItems[]
}

function NavBar(props: Props) {
  const { navItems } = props
  const router = useRouter()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [value, setValue] = React.useState(0)

  const _handleNavigate = (item: string) => {
    if (item === 'Home') {
      return router.push(`/`)
    }
    // If the item has a space in it, replace it with a no space
    router.push(`/${item.replace(/\s+/, '')}`)
  }

  React.useEffect(() => {
    const path = window.location.pathname

    switch (path) {
      case '/':
        return setValue(0)
      case '/About':
        return setValue(1)
      case '/Purchasing':
        return setValue(2)
      case '/NewLitters':
        return setValue(3)
      // case '/shop':
      //   return setValue(4)
      default:
        return setValue(0)
    }
  }, [navItems])

  return (
    <>
      <AppBar component="nav" color="inherit" sx={{ boxShadow: 'unset' }}>
        <Toolbar>
          <Box
            component="div"
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              pt: 0.5,
              height: '60px',
            }}
          >
            <IconButton disableRipple onClick={() => router.push(`/`)}>
              <Image src={Logo} height={64} width={120} alt={'Logo'}></Image>
            </IconButton>
          </Box>
          <>
            {!isMobile && (
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    sx={{
                      color: 'text.primary',
                      textTransform: 'capitalize',
                      fontSize: '1.12rem',
                    }}
                    onClick={() => _handleNavigate(item.name)}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
            )}
          </>
        </Toolbar>
      </AppBar>
      {isMobile && (
        <Paper
          sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue)
            }}
          >
            {navItems.map((item) => (
              <BottomNavigationAction
                key={item.name}
                label={
                  item.name === 'New Litters' && isMobile
                    ? 'Litters'
                    : item.name
                }
                icon={item.icon}
                onClick={() => _handleNavigate(item.name)}
              />
            ))}
          </BottomNavigation>
        </Paper>
      )}
    </>
  )
}

export default NavBar

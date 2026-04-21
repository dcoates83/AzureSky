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
  href?: string
  name: string
  icon: React.ReactNode
  mobileLabel?: string
  showInMobile?: boolean
}

interface Props {
  navItems: INavItems[]
}

function NavBar(props: Props) {
  const { navItems } = props
  const router = useRouter()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const mobileNavItems = React.useMemo(
    () => navItems.filter((item) => item.showInMobile !== false),
    [navItems]
  )
  const [value, setValue] = React.useState<number | false>(false)

  const getItemHref = React.useCallback((item: INavItems) => {
    if (item.href) {
      return item.href
    }

    if (item.name === 'Home') {
      return '/'
    }

    return `/${item.name.replace(/\s+/g, '')}`
  }, [])

  const _handleNavigate = (item: INavItems) => {
    router.push(getItemHref(item))
  }

  React.useEffect(() => {
    const activeIndex = mobileNavItems.findIndex(
      (item) => getItemHref(item) === router.pathname
    )

    if (activeIndex === -1) {
      setValue(false)
      return
    }

    setValue(activeIndex)
  }, [getItemHref, mobileNavItems, router.pathname])

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
                    onClick={() => _handleNavigate(item)}
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
            onChange={(_, newValue) => {
              setValue(newValue)
            }}
            sx={{
              '& .MuiBottomNavigationAction-root': {
                minWidth: 0,
                px: 0.25,
              },
              '& .MuiBottomNavigationAction-label': {
                fontSize: '0.68rem',
                lineHeight: 1.15,
                whiteSpace: 'nowrap',
              },
              '& .MuiSvgIcon-root': {
                fontSize: '1.35rem',
              },
            }}
          >
            {mobileNavItems.map((item) => (
              <BottomNavigationAction
                key={item.name}
                label={item.mobileLabel ?? item.name}
                icon={item.icon}
                onClick={() => _handleNavigate(item)}
              />
            ))}
          </BottomNavigation>
        </Paper>
      )}
    </>
  )
}

export default NavBar

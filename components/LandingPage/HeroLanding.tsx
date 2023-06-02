import {
  Box,
  Button,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import Image from 'next/image'

import { useRouter } from 'next/router'
import Balancer from 'react-wrap-balancer'
import cat from '../../assets/Vectorcat.jpg'
import WaveDivider from '../WaveDivider'

const containerSx = (theme: Theme) => ({
  width: '100%',
  display: 'grid',
  gridAutoFlow: 'column',
  gridTemplateColumns: '1fr 1fr',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexDirection: 'column-reverse',
  },
})

const heroItemContainer = {
  width: '100%',
  height: '100%',
  display: 'grid',
  placeItems: 'center',
}

export const HeroLanding = () => {
  const smallScreens = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  )
  const theme = useTheme()
  const router = useRouter()
  const maxWidth = theme.breakpoints.values.lg
  return (
    <>
      <Box
        sx={{
          height: '94dvh',
          display: 'grid',
          gridTemplateRows: '9fr 1fr',
          maxWidth,
          margin: 'auto',
        }}
      >
        <Box sx={containerSx}>
          <Box sx={heroItemContainer}>
            <Box
              sx={{
                width: '80%',
                justifySelf: smallScreens ? 'unset' : 'end',
              }}
            >
              <Balancer>
                <Typography
                  variant="h2"
                  sx={{ textAlign: smallScreens ? 'center' : 'left' }}
                >
                  Fall in love with your new friend
                </Typography>
              </Balancer>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mt: 2,
                  [theme.breakpoints.down('md')]: {
                    flexDirection: 'column',
                    gap: 2,
                  },
                }}
              >
                <Typography
                  sx={{ color: (theme) => theme.palette.text.secondary, mr: 2 }}
                >
                  All of our cats are Tica registered
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    color: '#fff',
                    lineHeight: smallScreens ? '1.5em' : 'undefined',
                    [theme.breakpoints.down('md')]: {
                      width: '100%',
                    },
                  }}
                  onClick={() => router.push(`/Purchasing#purchasing-form`)}
                >
                  Contact Us
                </Button>
              </Box>
            </Box>
          </Box>
          <Box sx={heroItemContainer}>
            <Image src={cat} alt="cat" width={smallScreens ? 350 : undefined} />
          </Box>
        </Box>
        {!smallScreens && (
          <Box>
            <WaveDivider />
          </Box>
        )}
      </Box>
    </>
  )
}

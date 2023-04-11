import { Box, Button, Theme, Typography, useMediaQuery } from '@mui/material'
import Image from 'next/image'

import cat from '../../assets/Vectorcat.jpg'
import WaveDivider from '../../components/WaveDivider'

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
  return (
    <>
      <Box
        sx={{ height: '100dvh', display: 'grid', gridTemplateRows: '9fr 1fr' }}
      >
        <Box sx={containerSx}>
          <Box sx={heroItemContainer}>
            <Box sx={{ width: '80%' }}>
              <Typography variant="h2" sx={{ textAlign: 'left' }}>
                Fall in love with your new friend
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  // justifyContent: 'space-between',
                  mt: 2,
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
                    lineHeight: smallScreens ? '1.15em' : 'undefined',
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            </Box>
          </Box>
          <Box sx={heroItemContainer}>
            <Image src={cat} alt="cat" width={smallScreens ? 380 : undefined} />
          </Box>
        </Box>
        <Box>
          <WaveDivider />
        </Box>
      </Box>
    </>
  )
}

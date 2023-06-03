import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ShareIcon from '@mui/icons-material/Share'
import {
  Box,
  Button,
  CardActions,
  CardHeader,
  Collapse,
  IconButton,
  useTheme,
} from '@mui/material'
import { default as Card } from '@mui/material/Card'
import { default as CardContent } from '@mui/material/CardContent'
import { default as CardMedia } from '@mui/material/CardMedia'
import { IconButtonProps } from '@mui/material/IconButton'
import { default as Typography } from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import { styled } from '@mui/material/styles'
import imageUrlBuilder from '@sanity/image-url'
import dayjs from 'dayjs'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { EmailShareButton, FacebookShareButton } from 'react-share'
import uuid from 'react-uuid'
import cat from '../assets/cat-in-basket.jpg'
import { client } from '../pages'
interface ReservedOrAvailableProps {
  quantityRemaining?: number
  reservedPreConception?: number
  reservedPostConception?: number
}
interface NewLittersProps extends ReservedOrAvailableProps {
  title: string
  image: any
  description?: string
  expected: Date
  colors?: string
  markings?: string
}
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}
const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))
const ReservedPostConception = (props: ReservedOrAvailableProps) => {
  const { quantityRemaining, reservedPostConception } = props
  if (reservedPostConception && quantityRemaining !== 0) {
    return (
      <>
        <Box sx={{ mt: 1, mb: 1 }}>
          <Typography variant="body1" color="text.primary">
            Kittens left:
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {quantityRemaining ? String(quantityRemaining) : ''}
          </Typography>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Typography variant="body1" color="text.primary">
            Reserved:
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {reservedPostConception
              ? String(reservedPostConception)
              : 'All are available'}
          </Typography>
        </Box>
      </>
    )
  }
}
const ReservedPreConception = (props: ReservedOrAvailableProps) => {
  const { reservedPreConception } = props
  if (reservedPreConception) {
    return (
      <Box sx={{ mt: 1 }}>
        <Typography variant="body1" color="text.primary">
          Reserved before conception:
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {reservedPreConception
            ? String(reservedPreConception)
            : 'All are available'}
        </Typography>
      </Box>
    )
  }
}

const NoRemaining = (props: ReservedOrAvailableProps) => {
  const { quantityRemaining } = props
  if (quantityRemaining === 0) {
    return (
      <Box sx={{ mt: 1 }}>
        <Typography variant="body1" color="error">
          All reserved
        </Typography>
      </Box>
    )
  }
}
const ReservedOrAvailable = (props: ReservedOrAvailableProps) => {
  const { quantityRemaining, reservedPreConception, reservedPostConception } =
    props

  const renderReservedOrAvailable = () => {
    if (reservedPostConception && quantityRemaining !== 0) {
      return (
        <>
          <ReservedPostConception
            quantityRemaining={quantityRemaining}
            reservedPostConception={reservedPostConception}
          />
        </>
      )
    }
    if (reservedPostConception && quantityRemaining === 0) {
      return (
        <>
          <NoRemaining quantityRemaining={quantityRemaining} />
        </>
      )
    }
    if (reservedPreConception) {
      return (
        <>
          <ReservedPreConception
            quantityRemaining={quantityRemaining}
            reservedPreConception={reservedPreConception}
          />
        </>
      )
    }
    if (quantityRemaining === 0) {
      return <NoRemaining quantityRemaining={quantityRemaining} />
    } else {
      return (
        <Box sx={{ mt: 1 }}>
          <Typography variant="body1" color="secondary.main">
            Currently taking applications for all kittens
          </Typography>
        </Box>
      )
    }
  }

  const result = renderReservedOrAvailable()
  return result
}
type TextWithSecondaryTextProps = {
  text: string
  secondaryText: string
}

const TextWithSecondaryText = ({
  text,
  secondaryText,
}: TextWithSecondaryTextProps) => {
  return (
    <Box sx={{ mt: 1, mb: 1 }}>
      <Typography variant="body1" color="text.primary">
        {text}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {secondaryText}
      </Typography>
    </Box>
  )
}

const NewLittersCard = (props: NewLittersProps) => {
  const {
    colors,
    description,
    expected,
    image,
    markings,
    quantityRemaining,
    reservedPostConception,
    reservedPreConception,
    title,
  } = props
  const [expanded, setExpanded] = React.useState(false)
  const router = useRouter()
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  const builder = imageUrlBuilder(client)
  function urlFor(source) {
    return builder.image(source)
  }
  const theme = useTheme()
  const cardId = `${title}Card-${uuid()}`
  return (
    <Card sx={{ maxWidth: 345, m: 1, boxShadow: 2 }} id={cardId}>
      <CardHeader title={title} />
      <Image
        height="200"
        width={345}
        src={urlFor(image).image(image).auto('format').url()}
        alt={title}
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <CardContent>
        <TextWithSecondaryText
          text={'Expected:'}
          secondaryText={dayjs(expected).format('MMMM - YYYY').toString()}
        />
        {colors && (
          <TextWithSecondaryText text={'Colors:'} secondaryText={colors} />
        )}
        {markings && (
          <TextWithSecondaryText text={'Markings:'} secondaryText={markings} />
        )}

        <ReservedOrAvailable
          quantityRemaining={quantityRemaining}
          reservedPreConception={reservedPreConception}
          reservedPostConception={reservedPostConception}
        />
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: 'space-between' }}>
        <Box>
          <Typography>Share to</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <FacebookShareButton
              url={`https://azure-sky.vercel.app/NewLitters#${cardId}`}
              style={{ color: 'blue' }}
            >
              <FacebookRoundedIcon />
            </FacebookShareButton>
            <EmailShareButton url={''}>
              <EmailRoundedIcon />
            </EmailShareButton>
          </Box>
        </Box>

        <Box>
          <Button
            aria-label="add to favorites"
            sx={{ textTransform: 'capitalize' }}
            onClick={() => router.replace(`/Purchasing#form-info`)}
          >
            Reserve
          </Button>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </Box>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
export default NewLittersCard

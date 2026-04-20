import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Collapse,
  IconButton,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import imageUrlBuilder from '@sanity/image-url'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { EmailShareButton, FacebookShareButton } from 'react-share'

import { client } from '../lib/sanity.client'
import siteMetadata from '../lib/seoConfig'

interface NewLittersCardProps {
  id: string
  colors?: string
  description?: string
  expected?: string
  image?: any
  markings?: string
  quantityRemaining?: number
  reservedPreConception?: number
  reservedPostConception?: number
  title: string
}

interface ExpandMoreProps {
  expand: boolean
}

const builder = imageUrlBuilder(client)

const ExpandMore = styled(
  ({
    expand,
    ...props
  }: ExpandMoreProps & React.ComponentProps<typeof IconButton>) => (
    <IconButton {...props} />
  )
)(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

const getImageUrl = (image: any) =>
  image ? builder.image(image).width(700).height(430).fit('crop').url() : ''

const getAvailability = ({
  quantityRemaining,
  reservedPostConception,
  reservedPreConception,
}: Pick<
  NewLittersCardProps,
  'quantityRemaining' | 'reservedPostConception' | 'reservedPreConception'
>) => {
  if (quantityRemaining === 0) {
    return {
      color: 'error' as const,
      label: 'All reserved',
      helper: 'Applications are still welcome for future litters.',
    }
  }

  if (typeof quantityRemaining === 'number') {
    return {
      color: 'success' as const,
      label: `${quantityRemaining} kitten${
        quantityRemaining === 1 ? '' : 's'
      } left`,
      helper: reservedPostConception
        ? `${reservedPostConception} already reserved.`
        : 'Availability may change as applications are reviewed.',
    }
  }

  if (reservedPreConception) {
    return {
      color: 'warning' as const,
      label: `${reservedPreConception} reserved before conception`,
      helper: 'Please apply if you would like to be considered.',
    }
  }

  return {
    color: 'success' as const,
    label: 'Taking applications',
    helper: 'Apply to be considered for this or a future litter.',
  }
}

const NewLittersCard = ({
  colors,
  description,
  expected,
  id,
  image,
  markings,
  quantityRemaining,
  reservedPostConception,
  reservedPreConception,
  title,
}: NewLittersCardProps) => {
  const [expanded, setExpanded] = React.useState(false)
  const imageUrl = getImageUrl(image)
  const cardId = id || title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  const shareUrl = `${siteMetadata.siteUrl}/NewLitters#${cardId}`
  const availability = getAvailability({
    quantityRemaining,
    reservedPostConception,
    reservedPreConception,
  })
  const expectedLabel = expected
    ? dayjs(expected).format('MMMM YYYY')
    : 'Timing to be announced'

  return (
    <Card
      id={cardId}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: '0 8px 24px rgba(15, 23, 42, 0.08)',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ position: 'relative', aspectRatio: '16 / 10' }}>
        {imageUrl ? (
          <Image
            fill
            src={imageUrl}
            alt={title}
            sizes="(max-width: 900px) 100vw, 33vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        ) : null}
      </Box>

      <CardHeader
        title={title}
        titleTypographyProps={{ variant: 'h5', fontWeight: 700 }}
        subheader={`Expected ${expectedLabel}`}
      />

      <CardContent sx={{ pt: 0, flex: 1 }}>
        <Chip
          label={availability.label}
          color={availability.color}
          size="small"
          sx={{ mb: 1.5, fontWeight: 700 }}
        />
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {availability.helper}
        </Typography>

        {colors ? (
          <Box sx={{ mb: 1.5 }}>
            <Typography variant="overline" color="text.secondary">
              Expected colors
            </Typography>
            <Typography>{colors}</Typography>
          </Box>
        ) : null}

        {markings ? (
          <Box>
            <Typography variant="overline" color="text.secondary">
              Markings
            </Typography>
            <Typography>{markings}</Typography>
          </Box>
        ) : null}
      </CardContent>

      <CardActions
        sx={{
          px: 2,
          pb: 2,
          pt: 0,
          display: 'flex',
          justifyContent: 'space-between',
          gap: 1,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FacebookShareButton
            quote="Check out this litter from Azure Sky Ragdolls!"
            url={shareUrl}
            style={{ color: '#1093F4', display: 'flex' }}
          >
            <FacebookRoundedIcon />
          </FacebookShareButton>
          <EmailShareButton url={shareUrl} style={{ display: 'flex' }}>
            <EmailRoundedIcon color="action" />
          </EmailShareButton>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Button
            component={Link}
            href="/Purchasing#purchasing-form"
            variant="contained"
            size="small"
          >
            Apply
          </Button>
          {description ? (
            <ExpandMore
              expand={expanded}
              onClick={() => setExpanded((current) => !current)}
              aria-expanded={expanded}
              aria-label={`Show more about ${title}`}
            >
              <ExpandMoreIcon />
            </ExpandMore>
          ) : null}
        </Box>
      </CardActions>

      {description ? (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent sx={{ pt: 0 }}>
            <Typography>{description}</Typography>
          </CardContent>
        </Collapse>
      ) : null}
    </Card>
  )
}

export default NewLittersCard

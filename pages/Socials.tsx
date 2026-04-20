import RateReviewRoundedIcon from '@mui/icons-material/RateReviewRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import {
  Alert,
  Box,
  Button,
  Card,
  CircularProgress,
  Container,
  Typography,
} from '@mui/material'
import { GetStaticProps } from 'next'
import Script from 'next/script'
import React from 'react'

import Seo from '../components/Seo'
import siteMetadata from '../lib/seoConfig'

const ELFSIGHT_SCRIPT_SRC = 'https://static.elfsight.com/platform/platform.js'
const FACEBOOK_SCRIPT_SRC =
  'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v25.0'
const FACEBOOK_PAGE_URL =
  'https://www.facebook.com/profile.php?id=100063761763734'
const GOOGLE_REVIEW_URL = 'https://maps.app.goo.gl/co9Raik461UZVVC88'
const FACEBOOK_PLUGIN_MAX_WIDTH = 500
const FACEBOOK_PLUGIN_MIN_WIDTH = 180
const FACEBOOK_PLUGIN_HEIGHT = 650
const REVIEW_STARS = Array.from({ length: 5 }, (_, index) => index)

const ELFSIGHT_FEEDS = [
  {
    id: 'instagram',
    title: 'Instagram',
    description: 'Current photos, kitten updates, and everyday cattery life.',
    appClassName: 'elfsight-app-66ba7413-b498-4fb9-95f1-383d32859e0a',
  },
  {
    id: 'tiktok',
    title: 'TikTok',
    description: 'Short kitten videos and quick behind-the-scenes moments.',
    appClassName: 'elfsight-app-cf2afa3f-9ea3-43db-9783-e7854c90f076',
  },
] as const

type FeedId = (typeof ELFSIGHT_FEEDS)[number]['id']
type FeedStatus = Record<FeedId, boolean>
type ElfsightWindow = Window & {
  eapps?: {
    init?: () => void
  }
  ElfsightApp?: {
    init?: () => void
  }
}
type FacebookWindow = Window & {
  FB?: {
    XFBML?: {
      parse?: (element?: HTMLElement | null) => void
    }
  }
}

const createInitialFeedStatus = (): FeedStatus =>
  ELFSIGHT_FEEDS.reduce(
    (status, feed) => ({
      ...status,
      [feed.id]: false,
    }),
    {} as FeedStatus
  )

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 180,
  }
}

const Socials = () => {
  const feedRefs = React.useRef<Record<FeedId, HTMLDivElement | null>>({
    instagram: null,
    tiktok: null,
  })
  const facebookContainerRef = React.useRef<HTMLDivElement | null>(null)
  const [scriptReady, setScriptReady] = React.useState(false)
  const [scriptFailed, setScriptFailed] = React.useState(false)
  const [showFallback, setShowFallback] = React.useState(false)
  const [reloadKey, setReloadKey] = React.useState(0)
  const [facebookScriptReady, setFacebookScriptReady] = React.useState(false)
  const [facebookScriptFailed, setFacebookScriptFailed] = React.useState(false)
  const [facebookLoaded, setFacebookLoaded] = React.useState(false)
  const [facebookWidth, setFacebookWidth] = React.useState(
    FACEBOOK_PLUGIN_MAX_WIDTH
  )
  const [feedStatus, setFeedStatus] = React.useState<FeedStatus>(
    createInitialFeedStatus
  )

  const initializeElfsight = React.useCallback(() => {
    if (typeof window === 'undefined') {
      return
    }

    const elfsightWindow = window as ElfsightWindow
    elfsightWindow.eapps?.init?.()
    elfsightWindow.ElfsightApp?.init?.()
  }, [])

  const handleScriptReady = () => {
    setScriptFailed(false)
    setScriptReady(true)
    window.setTimeout(initializeElfsight, 0)
  }

  const parseFacebookPlugin = React.useCallback(() => {
    if (typeof window === 'undefined') {
      return
    }

    const facebookWindow = window as FacebookWindow
    facebookWindow.FB?.XFBML?.parse?.(facebookContainerRef.current)
  }, [])

  const handleFacebookScriptReady = () => {
    setFacebookScriptFailed(false)
    setFacebookScriptReady(true)
    window.setTimeout(parseFacebookPlugin, 0)
  }

  const handleRefreshFeeds = () => {
    if (scriptFailed) {
      window.location.reload()
      return
    }

    setShowFallback(false)
    setFeedStatus(createInitialFeedStatus())
    setFacebookLoaded(false)
    setReloadKey((currentKey) => currentKey + 1)
    window.setTimeout(initializeElfsight, 0)
    window.setTimeout(parseFacebookPlugin, 0)
  }

  React.useEffect(() => {
    setShowFallback(false)

    const fallbackTimer = window.setTimeout(() => {
      setShowFallback(true)
    }, 10000)

    return () => window.clearTimeout(fallbackTimer)
  }, [reloadKey])

  React.useEffect(() => {
    if (!scriptReady) {
      return undefined
    }

    initializeElfsight()

    const observers = ELFSIGHT_FEEDS.map((feed) => {
      const feedElement = feedRefs.current[feed.id]

      if (!feedElement) {
        return undefined
      }

      const markLoaded = () => {
        const hasWidgetContent =
          feedElement.children.length > 0 ||
          Boolean(feedElement.querySelector('iframe'))

        if (!hasWidgetContent) {
          return
        }

        setFeedStatus((currentStatus) => {
          if (currentStatus[feed.id]) {
            return currentStatus
          }

          return {
            ...currentStatus,
            [feed.id]: true,
          }
        })
      }

      markLoaded()

      const observer = new MutationObserver(markLoaded)
      observer.observe(feedElement, {
        childList: true,
        subtree: true,
      })

      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [initializeElfsight, reloadKey, scriptReady])

  React.useEffect(() => {
    const updateFacebookWidth = () => {
      const containerWidth = facebookContainerRef.current?.clientWidth

      if (!containerWidth) {
        return
      }

      const nextWidth = Math.min(
        FACEBOOK_PLUGIN_MAX_WIDTH,
        Math.max(FACEBOOK_PLUGIN_MIN_WIDTH, Math.floor(containerWidth))
      )

      setFacebookWidth((currentWidth) =>
        currentWidth === nextWidth ? currentWidth : nextWidth
      )
    }

    updateFacebookWidth()

    const resizeObserver =
      typeof ResizeObserver === 'undefined'
        ? undefined
        : new ResizeObserver(updateFacebookWidth)

    if (facebookContainerRef.current) {
      resizeObserver?.observe(facebookContainerRef.current)
    }

    window.addEventListener('resize', updateFacebookWidth)

    return () => {
      resizeObserver?.disconnect()
      window.removeEventListener('resize', updateFacebookWidth)
    }
  }, [])

  React.useEffect(() => {
    setFacebookLoaded(false)

    if (!facebookScriptReady) {
      return
    }

    window.setTimeout(parseFacebookPlugin, 0)
  }, [facebookScriptReady, facebookWidth, parseFacebookPlugin, reloadKey])

  React.useEffect(() => {
    const facebookElement = facebookContainerRef.current

    if (!facebookElement) {
      return undefined
    }

    const markLoaded = () => {
      const hasFacebookIframe = Boolean(
        facebookElement.querySelector('iframe[src*="facebook.com"]')
      )

      if (hasFacebookIframe) {
        setFacebookLoaded(true)
      }
    }

    markLoaded()

    const observer = new MutationObserver(markLoaded)
    observer.observe(facebookElement, {
      childList: true,
      subtree: true,
    })

    return () => observer.disconnect()
  }, [facebookWidth, reloadKey])

  const hasUnloadedFeeds = ELFSIGHT_FEEDS.some((feed) => !feedStatus[feed.id])

  return (
    <>
      <Seo
        title="Socials"
        description="Browse the latest Azure Sky Ragdolls Instagram, Facebook, and TikTok posts to follow new kittens, litter announcements, and cattery life."
        keywords={[
          'ragdoll breeder instagram',
          'azure sky ragdolls facebook',
          'ragdoll kittens tiktok',
        ]}
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Azure Sky Ragdolls Socials',
            description:
              'Central hub for Azure Sky Ragdolls social media feeds including Instagram, Facebook, and TikTok updates.',
            url: `${siteMetadata.siteUrl}/Socials`,
          },
        ]}
      />

      <Script
        src={ELFSIGHT_SCRIPT_SRC}
        strategy="afterInteractive"
        onLoad={handleScriptReady}
        onReady={handleScriptReady}
        onError={() => {
          setScriptFailed(true)
          setShowFallback(true)
        }}
      />
      <div id="fb-root" />
      <Script
        id="facebook-jssdk"
        src={FACEBOOK_SCRIPT_SRC}
        strategy="afterInteractive"
        crossOrigin="anonymous"
        onLoad={handleFacebookScriptReady}
        onReady={handleFacebookScriptReady}
        onError={() => {
          setFacebookScriptFailed(true)
          setShowFallback(true)
        }}
      />

      <Container
        id="socials"
        maxWidth="lg"
        sx={{
          py: { xs: 4, md: 6 },
        }}
      >
        <Box
          sx={{
            mb: 4,
            maxWidth: 780,
          }}
        >
          <Typography
            component="h1"
            variant="h3"
            sx={{ fontWeight: 700, mb: 1 }}
          >
            Follow Azure Sky Ragdolls
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            See the newest kitten updates, cattery photos, and short videos from
            our social feeds.
          </Typography>
          <Button
            type="button"
            variant="outlined"
            onClick={handleRefreshFeeds}
            disabled={!scriptReady && !scriptFailed}
          >
            Refresh Feeds
          </Button>
        </Box>

        <Card
          component="section"
          sx={{
            mb: 4,
            p: { xs: 2.5, sm: 3 },
            borderRadius: 2,
            border: '1px solid rgba(234, 179, 8, 0.32)',
            backgroundColor: 'rgba(250, 204, 21, 0.08)',
            boxShadow: '0 8px 24px rgba(15, 23, 42, 0.08)',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr auto' },
            gap: { xs: 2, md: 3 },
            alignItems: 'center',
          }}
        >
          <Box>
            <Box
              aria-label="Five star review prompt"
              sx={{ display: 'flex', gap: 0.25, mb: 1 }}
            >
              {REVIEW_STARS.map((star) => (
                <StarRoundedIcon
                  key={star}
                  aria-hidden="true"
                  sx={{ color: '#F59E0B', fontSize: 28 }}
                />
              ))}
            </Box>
            <Typography
              component="h2"
              variant="h5"
              sx={{ fontWeight: 700, mb: 0.75 }}
            >
              Share your Azure Sky experience
            </Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 720 }}>
              Reviews help new families feel confident when choosing their
              Ragdoll breeder. If you had a great experience, you can leave a
              Google review here.
            </Typography>
          </Box>

          <Button
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noreferrer"
            variant="contained"
            size="large"
            startIcon={<RateReviewRoundedIcon />}
            sx={{ justifySelf: { xs: 'stretch', md: 'end' } }}
          >
            Leave a Google Review
          </Button>
        </Card>

        {scriptFailed ? (
          <Alert severity="warning" sx={{ mb: 3 }}>
            The social feed script could not load. This can happen when a
            browser blocks third-party widgets. Try refreshing the feeds or
            reloading the page.
          </Alert>
        ) : null}

        {showFallback && hasUnloadedFeeds && !scriptFailed ? (
          <Alert severity="info" sx={{ mb: 3 }}>
            Some social feeds are taking longer than usual. They may still
            appear shortly, or you can refresh the feeds without reloading the
            whole page.
          </Alert>
        ) : null}

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: 'repeat(3, 1fr)' },
            gap: 3,
            alignItems: 'start',
          }}
        >
          {ELFSIGHT_FEEDS.map((feed, index) => {
            const isLoaded = feedStatus[feed.id]
            const shouldShowLoading =
              !isLoaded && !showFallback && !scriptFailed

            return (
              <React.Fragment key={feed.id}>
                {index === 1 ? (
                  <Card
                    sx={{
                      p: { xs: 2, sm: 2.5 },
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'divider',
                      boxShadow: '0 8px 24px rgba(15, 23, 42, 0.08)',
                      overflow: 'hidden',
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h5"
                      sx={{ fontWeight: 700, mb: 0.75 }}
                    >
                      Facebook
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      Litter updates, owner tips, and helpful announcements.
                    </Typography>

                    <Box
                      ref={facebookContainerRef}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        minHeight: FACEBOOK_PLUGIN_HEIGHT,
                        width: '100%',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        key={`facebook-${facebookWidth}-${reloadKey}`}
                        className="fb-page"
                        data-href={FACEBOOK_PAGE_URL}
                        data-tabs="timeline"
                        data-width={facebookWidth}
                        data-height={FACEBOOK_PLUGIN_HEIGHT}
                        data-small-header="true"
                        data-adapt-container-width="true"
                        data-hide-cover="false"
                        data-show-facepile="false"
                      >
                        <blockquote
                          cite={FACEBOOK_PAGE_URL}
                          className="fb-xfbml-parse-ignore"
                        >
                          <a
                            href={FACEBOOK_PAGE_URL}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Azure Sky Ragdolls on Facebook
                          </a>
                        </blockquote>
                      </div>
                    </Box>

                    {(facebookScriptFailed ||
                      (showFallback && !facebookLoaded)) && (
                      <Alert severity="info" sx={{ mt: 2 }}>
                        Facebook may be blocked by browser privacy settings. You
                        can still open the Azure Sky Ragdolls Facebook page
                        directly.
                      </Alert>
                    )}

                    <Button
                      href={FACEBOOK_PAGE_URL}
                      target="_blank"
                      rel="noreferrer"
                      variant="outlined"
                      sx={{ mt: 2 }}
                    >
                      Open Facebook Page
                    </Button>
                  </Card>
                ) : null}

                <Card
                  sx={{
                    p: { xs: 2, sm: 2.5 },
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                    boxShadow: '0 8px 24px rgba(15, 23, 42, 0.08)',
                    overflow: 'hidden',
                  }}
                >
                  <Typography
                    component="h2"
                    variant="h5"
                    sx={{ fontWeight: 700, mb: 0.75 }}
                  >
                    {feed.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {feed.description}
                  </Typography>

                  {shouldShowLoading ? (
                    <Box
                      sx={{
                        mb: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.25,
                        color: 'text.secondary',
                      }}
                    >
                      <CircularProgress size={20} color="inherit" />
                      <Typography variant="body2">
                        Loading {feed.title} feed...
                      </Typography>
                    </Box>
                  ) : null}

                  {!isLoaded && showFallback ? (
                    <Alert severity="info" sx={{ mb: 2 }}>
                      {feed.title} is not visible yet. Third-party social
                      widgets can be delayed or blocked by privacy settings.
                    </Alert>
                  ) : null}

                  <Box
                    sx={{
                      minHeight: { xs: 420, md: 520 },
                      width: '100%',
                      '& iframe': {
                        maxWidth: '100% !important',
                      },
                      '& .eapps-widget': {
                        width: '100%',
                      },
                    }}
                  >
                    <div
                      key={`${feed.id}-${reloadKey}`}
                      ref={(element) => {
                        feedRefs.current[feed.id] = element
                      }}
                      className={feed.appClassName}
                    />
                  </Box>
                </Card>
              </React.Fragment>
            )
          })}
        </Box>
      </Container>
    </>
  )
}

export default Socials

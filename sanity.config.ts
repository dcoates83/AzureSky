/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'
import { apiVersion, dataset, previewSecretId, projectId } from 'lib/sanity.api'
import { previewDocumentNode } from 'plugins/previewPane'
import { productionUrl } from 'plugins/productionUrl'
import { settingsPlugin, settingsStructure } from 'plugins/settings'
import { defineConfig } from 'sanity'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { deskTool } from 'sanity/desk'
import aboutPage from 'schemas/aboutPageT'
import authorType from 'schemas/author'
import homeType from 'schemas/homePage'
import postType from 'schemas/post'
import settingsType from 'schemas/settings'

import { pagesStructure } from './plugins/pages'
import newLitters from './schemas/newLitters/newLitters'
import newLittersTest from './schemas/newLitters/newLittersPosts'
import faqType from './schemas/purchasing/faqType'
import purchasing from './schemas/purchasing/purchasing'
import purchasingPage from './schemas/purchasing/purchasingPage'

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Azure Sky Ragdolls'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      // authorType,
      // postType,
      // settingsType,
      purchasing,
      homeType,
      aboutPage,
      purchasingPage,
      faqType,
      newLitters,
      newLittersTest,
    ],
  },
  plugins: [
    deskTool({
      structure: pagesStructure([
        faqType,
        aboutPage,
        purchasing,
        homeType,
        purchasingPage,
        newLitters,
        newLittersTest,
      ]),
      // structure: settingsStructure(settingsType),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    // settingsPlugin({ type: homeType.name }),
    // Add the "Open preview" action
    // productionUrl({
    //   apiVersion,
    //   previewSecretId,
    //   // types: [postType.name],
    //   // types: [postType.name, settingsType.name],
    // }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})

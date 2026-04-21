import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded'
import { defineField, defineType } from 'sanity'

const productCategories = [
  'Kitten Starter Kit',
  'Food & Treats',
  'Litter & Boxes',
  'Grooming',
  'Carriers & Travel',
  'Toys & Enrichment',
  'Cleaning',
  'Health & Safety',
]

export default defineType({
  name: 'recommendedProduct',
  title: 'Recommended Product',
  icon: Inventory2RoundedIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Product name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: productCategories.map((category) => ({
          title: category,
          value: category,
        })),
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Product image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          description:
            'Describe the product image for screen readers and search engines.',
        }),
      ],
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required().max(240),
    }),
    defineField({
      name: 'whyRecommended',
      title: 'Why we recommend it',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.max(420),
    }),
    defineField({
      name: 'bestFor',
      title: 'Best for',
      type: 'string',
      description: 'Example: New kitten setup, long-haired coats, travel days.',
    }),
    defineField({
      name: 'amazonAffiliateUrl',
      title: 'Amazon affiliate URL',
      type: 'url',
      description:
        'Paste the Amazon Associates SiteStripe link for this product.',
      validation: (rule) =>
        rule.required().uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'buttonLabel',
      title: 'Button label',
      type: 'string',
      initialValue: 'View on Amazon',
    }),
    defineField({
      name: 'featured',
      title: 'Feature this product',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'active',
      title: 'Show on website',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort order',
      type: 'number',
      description: 'Lower numbers appear first.',
      initialValue: 100,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
      active: 'active',
    },
    prepare({ active, media, subtitle, title }) {
      return {
        title,
        subtitle: `${subtitle ?? 'Uncategorized'}${
          active === false ? ' - hidden' : ''
        }`,
        media,
      }
    },
  },
})

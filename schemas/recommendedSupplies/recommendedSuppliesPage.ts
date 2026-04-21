import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'recommendedSuppliesPage',
  title: 'Recommended Supplies Page',
  icon: LocalMallRoundedIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page title',
      type: 'string',
      initialValue: 'Recommended Supplies',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Intro content',
      type: 'array',
      of: [{ type: 'block' }],
      description:
        'Short intro shown above the product recommendations. Keep it helpful and concise.',
    }),
    defineField({
      name: 'disclosure',
      title: 'Affiliate disclosure',
      type: 'text',
      rows: 2,
      initialValue: 'As an Amazon Associate I earn from qualifying purchases.',
      validation: (rule) => rule.required(),
    }),
  ],
})

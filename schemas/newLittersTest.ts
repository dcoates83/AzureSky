import { HomeIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'newLittersTest',
  title: 'New Litters Page test',
  icon: HomeIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title_AboutUs',
      title: 'Header - "About us" ',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content_AboutUs',
      title: 'Content - "About us" ',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
  ],
})

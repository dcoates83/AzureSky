import { HomeIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'newLittersPost',
  title: 'Post new litters here',
  icon: HomeIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',

      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'expected',
      title: 'Expected date',
      options: { dateFormat: 'MMMM - YYYY' },
      type: 'date',

      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'colors',
      title: 'Colors',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'reservedPreConception',
      title: 'Reserved pre-conception',
      description: 'Leave blank if taking reservations for all kittens',
      type: 'number',
    }),
    defineField({
      name: 'reservedPostConception',
      title: 'Reserved post-conception',
      description: 'Leave blank if taking reservations for all kittens',
      type: 'number',
    }),
    defineField({
      name: 'quantityRemaining',
      title: 'Kittens remaining',
      description: 'Leave blank if taking reservations for all kittens',
      type: 'number',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      description: '(Optional)',
      type: 'text',
    }),
    defineField({
      name: 'expirationDate',
      title: 'Expiration date',
      description:
        'When to remove this post from the website - 1 month after expected date is recommended',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
  ],
})

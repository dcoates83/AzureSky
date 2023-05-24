import { HomeIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
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
    defineField({
      name: 'title_KingsQueens',
      title: 'Header - "Kings & Queens" ',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content_KingsQueens',
      title: 'Content - "Kings & Queens" ',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content_KingsQueensImages',
      title: 'Current - "Kings and Queens" ',
      type: 'array',
      of: [
        {
          type: 'image',
          validation: (rule) => rule.required(),
          of: [{ type: 'array' }],
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Name',
              validation: (rule) => rule.required(),
            },
            {
              name: 'gender',
              type: 'boolean',
              title:
                'If the cat is a boy, set this to true, otherwise leave it false',
              initialValue: false,
              validation: (rule) => rule.required(),
            },

            // {
            //   name: 'description',
            //   type: 'string',
            //   title: 'Description',
            // },
          ],
        },
      ],
    }),
    defineField({
      name: 'title_Assistants',
      title: 'Header - "Assistants"',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content_Assistants',
      title: 'Content - "Assistants" ',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'content_ImageAssistants',
      title: 'Content - "Images Assistants" ',
      type: 'array',
      of: [
        {
          type: 'image',
          of: [{ type: 'array' }],
        },
      ],
    }),
  ],
})

import InfoRoundedIcon from '@mui/icons-material/InfoRounded'
import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  icon: InfoRoundedIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title_AboutRagdolls',
      title: 'Header - "About Ragdolls" ',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content_AboutRagdolls',
      title: 'Content - "About Ragdolls" ',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title_RagdollHistory',
      title: 'Header - "Ragdoll History" ',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content_RagdollHistory',
      title: 'Content - "Ragdolls History" ',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content_RagdollHistoryImages',
      title: 'Current - "History Images" ',
      type: 'array',
      of: [
        {
          type: 'image',
          validation: (rule) => rule.required(),
          of: [{ type: 'array' }],
        },
      ],
    }),
    defineField({
      name: 'title_GrumpyCat',
      title: 'Header - "Grumpy Cat" ',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content_GrumpyCat',
      title: 'Content - "Grumpy Cat" ',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title_AppearanceRagdolls',
      title: 'Header - "Appearance Ragdolls" ',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content_AppearanceRagdolls',
      title: 'Content - "Appearance Ragdolls" ',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title_ColorPatterns',
      title: 'Header - "Color Patterns" ',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content_ColorPatterns',
      title: 'Content - "Color Patterns" ',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title_ColorPoints',
      title: 'Header - "Color Points" ',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content_ColorPoints',
      title: 'Content - "Color Points (Optional)" ',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'content_ColorPointsImages',
      title: 'Current - "Color Points Images" ',
      type: 'array',
      of: [
        {
          type: 'image',
          validation: (rule) => rule.required(),
          of: [{ type: 'array' }],
          fields: [
            {
              name: 'color',
              type: 'string',
              title: 'Color',
              validation: (rule) => rule.required(),
            },
            {
              name: 'description',
              type: 'string',
              title: 'Description',
              validation: (rule) => rule.max(200),
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'title_ColorVariations',
      title: 'Header - "White Variations" ',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content_ColorVariations',
      title: 'Content - "White Variations (Optional)" ',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'content_ColorVariationsImages',
      title: 'Current - "White Variations Images" ',
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
              title: 'Color Type',
              validation: (rule) => rule.required(),
            },
            {
              name: 'description',
              type: 'string',
              title: 'Description',
              validation: (rule) => rule.max(200),
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'title_Minks',
      title: 'Header - "Minks" ',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content_MinksDescription',
      title: 'Content - "Minks (Optional)" ',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'content_MinksImages',
      title: 'Current - "Mink Images" ',
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
              name: 'description',
              type: 'string',
              title: 'Description',
              validation: (rule) => rule.max(200),
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'title_BeCareful',
      title: 'Header - "Be Careful!" ',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content_BeCareful',
      title: 'Content - "Be Careful!" ',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
  ],
})

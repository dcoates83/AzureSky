import PetsRoundedIcon from '@mui/icons-material/PetsRounded'
import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'newLitters',
  title: 'New Litters',
  icon: PetsRoundedIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title_newLitters',
      title: 'Header - "Whatever you want" ',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content_newLitters',
      title: 'Content - "Whatever you want" ',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
  ],
})

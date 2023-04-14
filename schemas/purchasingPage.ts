import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded'
import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'purchasingPage',
  title: 'Purchasing Page',
  icon: AttachMoneyRoundedIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title_purchasingKittens',
      title: 'Header - "Whatever you want" ',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content_purchasingKittens',
      title: 'Content - "Whatever you want" ',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
  ],
})

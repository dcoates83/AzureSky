import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded'
import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'faqType',
  title: 'FAQ',
  icon: LiveHelpRoundedIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title_faqs',
      title: 'Question',
      type: 'string',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'content_faqs',
      title: 'Answer',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})

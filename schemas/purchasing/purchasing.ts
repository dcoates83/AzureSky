import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'purchasing',
  title: 'Content - Purchasing',
  icon: AttachMoneyRoundedIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title_purchasingAgreement',
      title: 'Header - "Purchasing a Kitten"',
      initialValue: 'Purchasing a Kitten',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content_purchasingAgreement',
      title: 'Content - "Purchasing a Kitten / Purchasing agreement" ',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title_purchasingComesWith',
      title: 'Header - "What does my Ragdoll kitten come with?"',
      initialValue: 'What does my Ragdoll kitten come with?',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'list_purchasingComesWith',
      title: 'List - "What does my Ragdoll kitten come with?"',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content_purchasingComesWith',
      title: 'Content - "Going Home" ',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title_purchasingGoingHome',
      title: 'Header - "Going Home"',
      initialValue: 'Going Home',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content_purchasingGoingHome',
      title: 'Content - "Going Home" ',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title_AdoptionForm',
      title: 'Header - "Adoption Form"',
      initialValue: 'Adoption Form',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content_AdoptionForm',
      title: 'Content - "Adoption Form" ',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
  ],
})

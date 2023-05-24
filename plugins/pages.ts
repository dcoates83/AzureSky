/**
 * This plugin contains all the logic for setting up the `Settings` singleton
 */
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'
import PetsRoundedIcon from '@mui/icons-material/PetsRounded'
import { HomeIcon } from '@sanity/icons'
import { definePlugin, type DocumentDefinition } from 'sanity'
import { type StructureResolver } from 'sanity/desk'
// export const settingsPlugin = definePlugin<{ type: string }>(({ type }) => {
//   return {
//     name: 'newLitters',
//     document: {
//       // Hide 'Settings' from new document options
//       // https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
//       newDocumentOptions: (prev, { creationContext }) => {
//         if (creationContext.type === 'global') {
//           return prev.filter((templateItem) => templateItem.templateId !== type)
//         }

//         return prev
//       },
//       // Removes the "duplicate" action on the "settings" singleton
//       actions: (prev, { schemaType }) => {
//         if (schemaType === type) {
//           return prev.filter(({ action }) => action !== 'duplicate')
//         }

//         return prev
//       },
//     },
//   }
// })

// This code filters the list of pages in the content studio to only show pages that are in the pages array. It does this by checking the ID of the list item, and checking if the ID matches any of the pages in the array. If the ID matches the ID of a page in the array, the code will not display the list item. If the ID does not match the ID of a page in the array, the code will display the list item.

export const pagesStructure = (
  pages: DocumentDefinition[]
): StructureResolver => {
  return (S) => {
    const defaultListItems = S.documentTypeListItems().filter((listItem) => {
      // Get the ID of the list item
      const id = listItem.getId()

      // Check if the page already exists in the pages list
      const pageExists = pages.find((page) => page.name === id)

      // If it exists, return
      if (pageExists) {
        return
      }
      // Otherwise, return the list item
      return listItem
    })

    const newLittersPage = S.listItem()
      .title('New Litters Page')
      .icon(PetsRoundedIcon)
      .child(
        S.list()
          .title('Manage new litters page')
          .items([
            S.listItem()
              .title('Upcoming litters')
              .child(
                S.document().schemaType('newLitters').documentId('newLitters')
              ),
            S.listItem()
              .title('Post new litters')
              .child(S.documentTypeList('newLittersPost')),
          ])
          .id('testId')
      )

    const purchasingPage = S.listItem()
      .title('Purchasing Page')
      .icon(AttachMoneyRoundedIcon)
      .child(
        S.list()
          .title('Manage purchasing page')
          .items([
            S.listItem()
              .title('Purchasing page content/agreement')
              .child(
                S.document().schemaType('purchasing').documentId('purchasing')
              ),
            S.listItem()
              .title('Frequently asked questions')
              .child(S.documentTypeList('faqType')),
            S.listItem()
              .title('Post new purchasing page content')
              .child(S.documentTypeList('purchasingPage')),
          ])
          .id('testId')
      )
    // .child(
    //   S.document().schemaType('purchasingPage').documentId('purchasingPage')
    // )

    const pagesList = S.list()
      .title('Pages')
      .items([
        S.listItem()
          .title('Home Page')
          .icon(HomeIcon)
          .child(S.document().schemaType('homePage').documentId('homePage')),
        S.listItem()
          .title('About Page')
          .icon(InfoRoundedIcon)
          .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
        purchasingPage,
        newLittersPage,
        ...defaultListItems,
      ])
    return pagesList
  }
}

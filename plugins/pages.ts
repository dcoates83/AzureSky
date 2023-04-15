/**
 * This plugin contains all the logic for setting up the `Settings` singleton
 */

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

// The StructureResolver is how we're changing the DeskTool structure to linking to a single "Settings" document, instead of rendering "settings" in a list
// like how "Post" and "Author" is handled.
export const pagesStructure = (
  pages: DocumentDefinition[]
): // typeDef: DocumentDefinition
StructureResolver => {
  return (S) => {
    // The `Settings` root list item
    // const settingsListItem = // A singleton not using `documentListItem`, eg no built-in preview
    //   S.listItem()
    //     .title(typeDef.title)
    //     .icon(typeDef.icon)
    //     .child(
    //       S.editor()
    //         .id(typeDef.name)
    //         .schemaType(typeDef.name)
    //         .documentId(typeDef.name)
    //     )

    // // The default root list items (except custom ones)

    const defaultListItems = S.documentTypeListItems().filter((listItem) => {
      console.log(listItem)
      const duplicatePageType = pages.find(
        (page) => page.name === listItem.getId()
      )
      if (duplicatePageType && duplicatePageType.name === listItem.getId()) {
        return
      }
      return listItem
      // filter the list items to only include the ones that are in the pages array
      // and not the ones that are in the pages array
      // const typeDef = pages.filter((page) => page.name === listItem.getId())
      // if (listItem.getId() !== typeDef?.name) {
      //   return listItem
      // }
      // return typeDef
      // return listItem.getId() !== typeDef.name
    })

    const pagesList = S.list()
      .title('Pages')
      .items([
        S.listItem()
          .title('Home Page')
          .child(S.document().schemaType('homePage').documentId('homePage')),
        S.listItem()
          .title('Purchasing Page')
          .child(
            S.document()
              .schemaType('purchasingPage')
              .documentId('purchasingPage')
          ),
        S.listItem()
          .title('New Litters')
          .child(
            S.document().schemaType('newLitters').documentId('newLitters')
          ),
        // S.listItem()
        //   .title('Purchasing Page')
        //   .child(S.document().schemaType('purchasingPage')),
        ...defaultListItems,
        // ...S.documentTypeListItems(),
      ])
    return pagesList
    // return S.list()
    //   .title('Website')
    //   .items([...defaultListItems, pagesList])
  }
}

## Supabase Data model
  - user_id
  - item - text
  - quantity - integer
  - purchase - boolean (set default to false)

## HTML Elements
  - A form with 2 inputs
    * item
    * quantity
  - Add Item button
  - Delete All Items Button
    * stretch - delete single item somehow?
  - empty div to display items

## Events
1. On page load 
    * fetch and display the logged in users list - `getItems()`
    * display the list
        - loop through the items, create and append DOM elements 
          - `displayShoppingListItems()`
        - render items differently if purchased === true 
          - `renderItem(item)`
2. On submit of Add Item form, 
    * update the item and quantity in supabase with a new row
       - `createItem(item)`
    * clear the old list from the DOM
    * fetch the user's list
        - `getItems()`
    * loop through the items, create and append DOM elements.
        - `renderItem(item)`
        - `displayShoppingListItems()`
3. On clicking the item
    * update item from purchased false to true
        - `buyItem(id)`
    * clear the old list from the DOM
    * fetch the user's list
        - `getItems()`
    * loop through the items, create and append DOM elements.
    * render items differently if purchased === true
        - `renderItem(item)`
        - `displayShoppingListItems()`
4. On clicking the delete items button
    * delete the items in supabase
        - `deleteAllItems()`
    * display the items (an empty list)
        - `displayShoppingListItems()`


  


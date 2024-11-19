# Dropdown menu
## Requirement
 - Can there be multiple dropdown at once? Could be
 - What contents will menu contain? Text
 - maximum items allow in menu? up to 20 
 - flexibility user have in customizing the design? Color, fonts, padding to match branding
 - What device? All
## Architech / High level design
```
    <DropdownMenu> - Root component to coordiate events for inners
        <DropdownButton>Action</> - button to toggle menu
        <DropdownList> - contains list of items
            <DropdownMenuItem>A</DropdownMenuItem> - individual item
            <DropdownMenuItem>B</DropdownMenuItem>
            <DropdownMenuItem>C</DropdownMenuItem>
        </DropdownList>
    </DropdownMenu>
```
- context as composition model <DropdownMenu> contain context provider provdes the state value for children 
## Data Model
  - These state value within <DropdownMenu> and provided to all components via React context
  - isOpen     | boolean | menu is open or closed
  - activeItem | string  | item focused, hovering over item change the active item by keep track of value in state we can respond to keyboard interaction, either focusing on the prev/next or activting it
## Interface / API
- General props
  - Children | React.Node         | enforce specific components to be used as children
  - as       | string / Component | customize the underlying DOM element
  - className| string             | visual customization may,maynot needed
- DropdownMenu
  - isInitiallyOpen | boolean | initial open or close
  - size            | string  | customize desired size
- Button
  - onClick            | Function | althought open and close design on DropdownMenu, we have onClick for further logic if needed
  - other button props | * | while it's button any button's prop should be allowed
- List
  - maxHeight | number / undefiend | sensible default of 200-300 px
  - position  | string             | relative to the button
- Item
  - onClick | function | trigger when item actived and might resposible for another action
  - disabled | boolean | disable an item which not able to activated
## Optimization 
### Rendering
  - Menu being 'floating' not exactly following the normal flow of page elements
    #### Layout
    - Relative to Page
    - menu is rendered as direct child of <body>
    - position absolutely to the page with offsetTop and offsetLeft to get the coordinates of the <button> relative to hte page
    - adding height to get the final Y position to render the menu
    - React Portals
      - render outside the DOM hierachey of parent component
      - when parnet has overflow: hidden or z-index style but need child visully breakout its container. common exampls includes dropown, tooltip, modals
      - watch window for height changes and re render the menu with the correct position
    - Position
      - Supporting more aligment is a matter of finding the right valus for top/left/right/bottom CSS translations to use
    - Maximum height can be customized, we can check number of items if excess we set maximum height for scroll items
    - Render in HTML
      - better runtime due to fewer DOM operations needed to show menu,
    - Automatic flipping near the edge
      - smart dropown knows the position relative to the viewport can flip itself when there's insuffcient space to display full menu in current position. 
      - Optionally, scrolling can be disable when menu is open (adding overflow:hidden to <body>)
      - main idea is to know the tall of menu will be and autoflip the bottom when exceed the viewport
        - viewport heigth: window.innerHeight
        - Position of menu's bottom edge:
          - Button position relative to viewport
          - Button height
          - Menu height
          - spacing between button and menu
    #### Accessibility
        - Click outside of mean will close the menu
        - React Hook useOnClickOutsite
        ```
        function clickListener(e) {
            if ($buttonElement.contains(e.target) || $menuElement.contains(e.target)) return
            closeMenu()
        }
        document.addEventListener('mousedown',clickListener);
        document.addEventListener('touchstart', clickListener);
        ```
        - Focus management
          - when menu open focus is tradpper and pressing tab shouldn't shift focus to another element when menu closed, focus returns to the button
          - keyboard interaction
            - when focus on botton
              - Enter | open menu and place focus on the first item
              - Space | open menu and place focus on the first item
            - when focus on the item
              - Enter - Activate item and close menu
              - ArrowDown - move focus to next item
              - ArrowUp - move focus on prev item
          - ARIA roles
            - Button
              - role button
              - aria-haspopup true
              - when displayed aria-expanded set to true / hidden - no aria-expanded presnet
            - Menu
              - role menu
              - items are conatined in menu are child element
              - when menu item disable, aria-disabled true
              - item with aria-label
    #### Internationzalization (i18n)
        - For RTL we need horizontally filpped, menu component can take in a direction fing and render contents depending the value
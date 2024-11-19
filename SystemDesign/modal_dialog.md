# Modal / Dialog
- Design a Modal / Dialog shows content in a window overlaying the page
## R - Requriment
1. What are components on the modal?
  - Up to decide, but basic level of content, close button, title, footer action
2. What amount of flexibility does user have
  - User should be able to customize color, fonts, padding to match their branding
3. What kind of device?
  - All device.
## A - Architcture
1. Modal open thru user action or background actions. so we should decouple the trigger source from modal content
2. Basic modal includes, Header, Body, Footer
3. We can use context as composition modal. Modal contain a context provider that provide config option
   - Modal's prop is avalaible for all it's child components in case needed
4. Architecture 
   - <Overlay> - modal-overlay - render background overlay usually dimming out the page contents
   - <Modal> - Root component, coordinate the events between inner components
     - <Header></Header> - Top section of modal contains titel and close button
     - <Body> - main contents of modal
       - <p></p>
     - </Body>
     - <Footer> - Optional bottom section of modal, usually close/submit buttons
       - <Button></Button>
       - <Button></Button>
     - </Footer>
   - </Modal>
## D - Data / Model
- Modal components do not need much state, we build as a controlled component 
- the close / open state control ooutside the componet
- 'previousFocusElement' 'HTMLElement' - DOM element focused before the modal shown 
## I - Interface / API
1. General Props
   -  children  | React.Node        | typescript enforce speicifc component to be used as children
   -  as        | string, component | customize underlying DOM element (optional)
   -  className | string            | visual customization is needed
2. Modal
   - isOpen     | boolean           | modal close / open flag
   - onClose    | function          | callback to trigger when modal closed, to be pressing or hitting escape key
   - maxHeight  | number / undefind | sensible, 80% of viewport height
   - width      | number / undefind | sensible 500px
3. Header - basic version doesnt need any prop other than children
4. Body - basic version doesnt need any prop other than children
5. Footer - basic version doesnt need any prop other than children
6. customizing appearance content's in the header/body/footer will be provided by the user
## O - Optimaitic / Deep Dive
   1. Rendering
      1. DOM hierachy
         - Modal displayed over the page and doesn't follow the normal flow of page element
         - render modal outside the DOM hierachy of parants because parent's style might affect
      2. Overlay - help user to focus content within the modal. overlay/backdrop to dim out the page content
            ```
            .modal-overlay {
            background-color: rgba(0,0,0,0.7);
            position: fixed;
            top:0, left:0, bottom:0, right:0}
            ```
      1. Centered
            ```
            .modal-overlay {
                display:flex;
                justify-content: center;
                padding:20px;
            }
            ```
      2. Maximum Height
         - set default max height for modal if content excess the modal it will be scrollable within modal body 
         - maxHeight prop for customized
      3. Scroll Lock
         - when modal shows, we lock the page scrolling, adding overflow:hidden to <body> 
      4. Rendering in HTML or JavaScript
         - Rendering in HTML with display: none/opacity:0/hidden attribute and these style toggle when modal is to be shown
         - no require on SEO on modal, doesnt need to be SSR
   2. Accessibility
      - Ensure clicking outside to close the modal
        ```
        clickListener(e) =>{
            if ($modalContentsElement.contains(e.target)) return
            closeModal()
        }
        document.addEvenListener(`mousedown`, clickListener);
        document.addEvenListener(`touchstart`, clickListener);
        ```
       - Focus Management
         - focus trapping, Tab key cycler thru focusable elements within the dialog only and focus never be on elements outside of componet as long as modal showing. 
         1. when modal opened, we keep reference to element that opened in the modal state
         2. focus element in the modal
         3. add keydown logic that
            - when tab pressed, determin if focus should be shifted to next or perv element by checking if shift also pressed
            - find all table element within modal
            - from current focus element, find the next/prev tabbable element
            - focus on new element
         4. when modal closed, hide modal and move focus to the reference element earlier
         5. Using react-focus-lock can help, React solution
        - Keyboard interaction
            - Tab - move focus to next tabbable elemnt inside the modal, if last we move to first element in the modal
            - ShiftTab - Move focus to pervious tabbable element inside the modal
            - Esc - Close modal
        - Aria roles
          - role 'dialog'
          -  all elements descendants of element has role dialog
          -  aria-modal - true
          -  aria-label for all children element
          -  note <dialog> tag has less complelling for browser
       -  Animation
            ```
            <div>
                <div className="modal-overlay" aria-hidden="true"></div>
                <div class="modal-container">
                    <div class="modal-content"></div>
                </div>
            </div>
            ```
            - for React, consditional rendering cause the DOM elements to be removed from document when no longer needed on page
       - Internationalize (i18n)
         - overflowing text need to be truncated or wrapped, it shouldn't overflow out the modal
         - for RTL, needs horizontally flipped, we can provide the direction config for render content
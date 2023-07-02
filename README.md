# DeliveryPoint

## Injected React into my application

**Using CDN links from React official page**

- There are two CDN links

  1. React - "react.development.js" - This javascript file will have core program of React. This can be used in React-Native also.
  2. ReactDOM - "react-dom.development.js" - This javascript file will have logic for rendering. Connection between browser and React.
  3. React will run only inside the below **root** element

     "<div id="root"> </div>"

  4. **createElement** method is used to create a HTML element in React.
  5. **createRoot** is used to create root element from ReactDOM

### Added CSS file and attributes to an empty object

- Added **id** attribute in createElement
- Just linked the index.css in HTML file
- Logged the React Element : this will end up with an **Javascript Object**
- Provided attributes in {}, will became any props

### root.render function

- this render function will take the object(react element) and create the browser undestandable HTML code and puts it into root element. Finally DOM gets updated and displayed on browser.

### Other information

- Used **Emmet** to get the boiler plate code.
  **CDN** - Content Delivery Network
  Basically CDN links are used to access the library/code in a faster way, React is hosted on some server, we can get the required code into our app much fasterway using these links.
  **crossorign** - CORS

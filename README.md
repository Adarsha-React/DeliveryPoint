# DeliveryPoint

### Injected React into my application

#### Using CDN links from React official page

- There are two CDN links
- React - "react.development.js" - This javascript file will have core program of React. This can be used in React-Native also.
- ReactDOM - "react-dom.development.js" - This javascript file will have logic for rendering. Connection between browser and React.
- React will run only inside the below **root** element

```ruby
    <div id="root">Not Rendered</div>
```

- **createElement** method is used to create a HTML element in React.
- **createRoot** is used to create root element from ReactDOM

### Added CSS file and attributes to an empty object

- Added **id** attribute in createElement
- Just linked the index.css in HTML file
- Logged the React Element : this will end up with an **Javascript Object**
- Provided attributes in {}, will became any props

#### root.render function

- this render function will take the object(react element) and create the browser undestandable HTML code and puts it into root element. Finally DOM gets updated and displayed on browser.

- We can create complex html tree also using React.createElement itself - we can put them as children in third parameter. If we have siblings then we put them in an array.

### Library and Framework

- React is a **Javascript Library** not a full fleged framework.
- React can be used in any small portion of the existing application as well.
- React will run in respective root elemenet without affecting other part of the application.
- React library is very is to get into application just by importing React and ReactDOM.

- Normally **Framework** will enfore to use provided feature from it.

### Configuring NPM (Package Manager) and Installed Bundler - Parcel

- **_NPM_** does not stands for Node Package Manager
- It just manages all the packages/libraries which we can install required packages into our application.
- npm init - this will ask few questions and creates package.json file.
- package.json is configuration file for NPM
- After this, we can install/get any packages/dependencies to our project.
  - There are two dependencies
    1. Normal Dependency - these are required on production as well
    2. Dev Dependency - these dependencies only required during development phase
  - This can be done using: npm install -D parcel
  - If we need dev dependency to our project, we need to speciy "-D" or "--save-dev" while installing the package.
  - When we install the first dependency, it will get added to package.json under dev dependcy ("-D") else it will added under Dependecies
  - Example. "parcel": "^2.9.3" or "parcel": "~2.9.3" or "parcel": "2.9.3"
  - "~" symbol is used to upgrade the patches automatically
  - "^" symbol is used to upgrade the Minor and patches automatically
  - If we need exact version then no need to specify any symbol.
  - If we need to upgrade Major version, then we have to do it manually.
  - Also, package-lock.json file will be created
  - this will be used to track the exact version of the packages and transitive dependencies information. - node_modules will have all the required packages code and that is why it huge in size.
  - If we have package.json and package-lock.json - we can re-create the node_modules. -
  - Put all file names into .gitignore which can be re-generated and not to push to github.

### Bundler - Parcel

- Parcel is one of the Bundler like Webpack, Vite
- Almost all bundler will do the similar jobs like
  1.  Development Build
  2.  Create Local host
  3.  HMR - Hot Module Replacement
      - When we save on editor, automatically refresh the page on browser to reflect the changes.
  4.  File watcher algorithm (written in C++)
  5.  Image optimization
  6.  Bundling all files
  7.  Code splitting/chunking and Lazy loading
  8.  Minification - reducing the vairable/fuction names
  9.  Compressing the whole code to have less bundler size
  10. Tree shaking - remove the unwanted/unused code while build
  11. Separte Build for Dev and Production
      - Production build will take more time

### Other information

- Used **Emmet** to get the boiler plate code.
  **CDN** - Content Delivery Network
  Basically CDN links are used to access the library/code in a faster way, React is hosted on some server, we can get the required code into our app much fasterway using these links.
  **crossorign** - CORS

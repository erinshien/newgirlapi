# Building My Own RESTful API

## Set Up

### Initialise Project

1. Generate my initial project with `npm init`
2. Create a `.gitignore` file to include `node_modules`

### Install Packages

1. Install nodemon as a development dependency with `npm install --save-dev nodemon`
2. Install Express with `npm install express`
3. Install UUID with `npm install uuid`
4. Install morgan with `npm install morgan`

### Create Files

1. Create JSON file to store the API's data
2. Create `app.js` file to store the logic
3. Create `index.js` file as default file

### Update package.json File

1. Add `"type": "module"` to `package.json`
2. Add `"start": "node index.js"` to `package.json` scripts
3. Add `"dev": "nodemon index.js"` to `package.json` scripts

### Link Files and Packages

1. Import Express to `app.js`
2. Add lines to parse JSON -> [const app = express(); & app.use(express.json());]
3. Import UUID to `app.js`
4. Import morgan to `app.js`
5. Import JSON file to `app.js`
6. Import `app.js` to `index.js`
7. Add PORT to and `app.listen` function to `index.js`

## Generate Data

## Create Requirements Table

1. Write row for GET request - get all objects
2. Write row for GET request - get object by id
3. Write row for POST request - add new object
4. Write row for PUT request - replace object
5. Write row for PATCH request - update object
6. Write row for DELETE request - delete object

## Create Functions for Requirements

1. Create function to return all objects
2. Create function to return object by id
3. Create function to add new object
4. Create function to replace object by id
5. Create function to update object by id
6. Create function to delete object by id

## Create Route Handlers

1. Create GET route handler
2. Create GET by id route handler
3. Create POST route handler
4. Create PUT by id route handler
5. Create PATCH by id route handler
6. Create DELETE by id route handler

## Stretch Goals

### Query Parameters

1. Add a search feature on the /objects endpoint to return objects with names matching the query

### Middleware

1. Implement middleware for error handling

### Front End

1. Create a front end for the API
2. Use a UI and fetch to interact with the API

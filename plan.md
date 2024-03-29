# Building My Own RESTful API

## Set Up

### Initialise Project

1. Generate my initial project with `npm init` ✅
2. Create a `.gitignore` file to include `node_modules` ✅

### Install Packages

1. Install nodemon as a development dependency with `npm install --save-dev nodemon` ✅
2. Install Express with `npm install express` ✅
3. Install UUID with `npm install uuid` ✅
4. Install morgan with `npm install morgan` ✅

### Create Files

1. Create JSON file to store the API's data ✅
2. Create `app.js` file to store the logic ✅
3. Create `index.js` file as default file ✅

### Update package.json File

1. Add `"type": "module"` to `package.json` ✅
2. Add `"start": "node index.js"` to `package.json` scripts ✅
3. Add `"dev": "nodemon index.js"` to `package.json` scripts ✅

### Link Modules

1. Import Express to `app.js` ✅
2. Add lines to parse JSON -> [const app = express(); & app.use(express.json());] ✅
3. Import fs module from node ✅
4. Import UUID to `app.js` ✅
5. Import morgan to `app.js` ✅
6. Import JSON file to `app.js` ✅
7. Import `app.js` to `index.js` ✅
8. Add PORT to and `app.listen` function to `app.js` ✅

## Generate Data ✅

## Create Requirements Table

1. Write row for GET request - get all objects ✅
2. Write row for GET request - get object by id ✅
3. Write row for POST request - add new object ✅
4. ~~Write row for PUT request - replace object~~
5. Write row for PATCH request - update object ✅
6. Write row for DELETE request - delete object ✅

| HTTP Method | Path            | Request Body (JSON) | Response Body (JSON)    | Status Code | Description                               |
| ----------- | --------------- | ------------------- | ----------------------- | ----------- | ----------------------------------------- |
| GET         | /characters     | N/A                 | List of characters      | 200         | Retrieve all characters                   |
| GET         | /characters/:id | N/A                 | A specific character    | 200         | Retrieve a specific character by their ID |
| POST        | /characters     | New character       | Newly created character | 201         | Create and add a new character            |
| PATCH       | /characters/:id | Character updates   | Updated character       | 200         | Update an existing character              |
| DELETE      | /characters/:id | N/A                 | Deleted character       | 200         | Delete an existing character              |

## Create Functions for Requirements

Working File: `characters.js`

1. Create function to return all objects - `export async function getCharacters() {}`
2. Create function to return object by id - `export async function getCharacterByID() {}`
3. Create function to add new object - `export async function createCharacter() {}`
4. ~~Create function to replace object by id~~
5. Create function to update object by id - `export async function updateCharacterByID() {}`
6. Create function to delete object by id - `export async function deleteCharacterByID() {}`

7. Import these functions to `app.js`

## Create Route Handlers

Working File: `app.js`

1. Create GET route handler
2. Create GET by id route handler
3. Create POST route handler
4. ~~Create PUT by id route handler~~
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

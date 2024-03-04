import express from "express";
import morgan from "morgan";

import {
  getCharacters,
  getCharacterByID,
  createCharacter,
  updateCharacterByID,
  deleteCharacterByID,
} from "./characters.js";

const app = express();

app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});

// Listen for a GET request to /characters
// Use the getCharacters function to retrieve the characters data and store it in a variable
// Return a status 200 success message and all characters
// If there is a server error, respond with a status 500 error message

// Listen for a GET request to /characters/:id
// Locate the ID from the request parameters and store in a variable
// Use the getCharacterByID function to locate the character with the corresponding id
// If there is a corresponding character, return a status 200 success message and the requested character
// If there is no corresponding character, respond with a status 404 error message
// If there is a server error, respond with a status 500 error message

// Listen for a POST request to /characters
// Locate the body of the POST request and store in a variable called newCharacter
// Use the createCharacter function to append newCharacter to characters array
// Return a status 201 success message and new character
// If there is a server error, respond with a status 500 error message

// Listen for a PATCH request to /characters/:id
// Locate the ID from the request parameters and store in a variable
// Store the request body in a variable
// Use the updateCharacterByID function to update the corresponding character
// If there is a corresponding character, return a status 200 success message and the updated character
// If there is no corresponding character, respond with a status 404 error message
// If there is a server error, respond with a status 500 error message

// Listen for a DELETE request to /characters/:id
// Locate the ID from the request parameters and store in a variable
// Use the deleteCharacterByID function to delete the corresponding character
// If there is a corresponding character, return a status 200 success message and the remaining characters
// If there is no corresponding character, respond with a status 404 error message
// If there is a server error, respond with a status 500 error message

export default app;

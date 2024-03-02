import express from "express";
import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";
import morgan from "morgan";

const app = express();
app.use(express.json());

const charactersFile = "characters.json";

export default app;

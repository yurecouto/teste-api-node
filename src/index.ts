import "dotenv/config"
import express from "express";
import logger from "./utils/logger";
import cluster, { Worker } from "cluster";
import os from "os";
import cors from "cors";

import { router } from "./routes/index.routes";
import { connection } from "./database";

const port = process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: true, }));
app.use(express.json());
app.use(cors());

app.use(router);

connection
  .sync()
  .then(() => {
    console.log('Connected to PostgreSQL');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to PostgreSQL:', err);
  });
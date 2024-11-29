// src/index.ts
import express, { NextFunction, Request, Response } from 'express';
import mainRoute from './routes/allRoutes';
import mongoose from "mongoose";
import errorMiddleware  from './services/error/errorMiddleware';

import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use("/api/v1/", mainRoute);

app.use(
    errorMiddleware as (
      err: Error,
      req: Request,
      res: Response,
      next: NextFunction
    ) => void
  );

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/iwash";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `connected to db & Server is running on http://localhost:${PORT}`
      );
    });
  })
  .catch((error: Error) => {
    console.log(error);
  });
// src/index.ts
import express, { Request, Response } from 'express';
import mainRoute from './routes/allRoutes';

const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use("/api/v1/", mainRoute);


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

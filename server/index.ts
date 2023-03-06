import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './lib/routes';

const app = express();
const port = 4000;
const serv = require('http').createServer(app);

dotenv.config();

app.use(cors({ origin: '*' }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);

app.listen(port, async () => {
  const db = await mongoose.connect(`${process.env.DATABASE_CONNECTION}`);

  console.log(`Server is running ${port}`);
});

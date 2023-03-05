import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();
const port = 4000;
const serv = require('http').createServer(app);

dotenv.config();

app.listen(port, async () => {
  const db = await mongoose.connect(`${process.env.DATABASE_CONNECTION}`);

  console.log(`Server is running ${port}`);
});

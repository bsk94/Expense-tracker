import express from 'express';

const app = express();
const port = 4000;
const serv = require('http').createServer(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

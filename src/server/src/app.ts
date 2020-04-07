import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Vienna is working 🥳');
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on http://localhost:${port}`);
});

import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Vienna is working 🥳');
});

app.post('/login', (req, res) => {
  res.send(req.body);
});

app.listen(port, () => {
  return console.log(`server is listening on http://localhost:${port}`);
});

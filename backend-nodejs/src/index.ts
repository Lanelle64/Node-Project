import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());


const flashcards = require('./flashcards.json');

app.get('/api/flashcards', (req, res) => {
  res.json(flashcards);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

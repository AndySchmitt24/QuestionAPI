const express = require(`express`);
const { v4: uuidv4 } = require(`uuid`);
const bodyParser = require(`body-parser`);
const app = express();
const port = 3000;
const http = require("http");
const questions = require("./questions");

app.use(bodyParser.json());

const server = http.createServer((req, res) => {
  const { method, url } = req;
});

app.get(`/questions`, (req, res) => {
  res.json(questions);
});

app.get(`/questions/:questionId`, (req, res) => {
  const question = questions.find((q) => {
    return q.id === req.params.questionId;
  });
  if (question) {
    res.json(question);
  } else {
    res.status(404).json({ message: `Question not found` });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

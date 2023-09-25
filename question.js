const express = require(`express`);
const { v4: uuidv4 } = require(`uuid`);
const bodyParser = require(`body-parser`);
const app = express();
const port = 3000;
const http = require("http");
const question = require("./questions");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: `All Questions` });
});

app.get("/questionabc", (req, res) => {
  res.json({ message: `one question!` });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");
const bodyPaser = require("body-parser");

const app = express();

app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: false }));

app.route("/").get((req, res) => {
  res.send("rota principal");
});

app.use(express.static(__dirname + "client"));

const Port = 3001;

app.listen(Port, () => {
  console.log("servidor rodadando em http://localhost:", Port);
});

const express = require("express");
const bodyPaser = require("body-parser");
require('./src/database/index');
const Postage = require("./router/Postage");

const app = express();



app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: true }));

app.route("/").get((req, res) => {
  res.send("rota principal");
});

app.use(express.static(__dirname + "client"));

app.use("/postage",Postage);

const Port = 3001;

app.listen(Port, () => {
  console.log("servidor rodadando em http://localhost:", Port);
});

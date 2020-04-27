const express = require("express");
const bodyPaser = require("body-parser");
const Post = require("./router/Postagens");
const Coment = require("./router/Comentario");

const app = express();

app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: false }));

app.route("/").get((req, res) => {
  res.send("rota principal");
});

app.use("/api", Post);
app.use("/coment", Coment);

app.use(express.static(__dirname + "client"));

const Port = 3001;

app.listen(Port, () => {
  console.log("servidor rodadando em http://localhost:", Port);
});

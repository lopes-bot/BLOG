const express = require("express");
const router = express.Router();

router.route("/list").get((req, res) => {
  res.json({
    title: "primeira postagem",
    description: "Meu primeiro post",
    author: "André lopes",
  });
});

module.exports = router;

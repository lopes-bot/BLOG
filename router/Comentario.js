const express = require("express");
const router = express.Router();
router.route("/coment/userid").get((req, res) => {
  res.json({
    description: "Meu primeiro post",
    author: "André lopes",
  });
});

module.exports = router;

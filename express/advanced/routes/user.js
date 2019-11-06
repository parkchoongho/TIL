const express = require("express");
const router = express.Router();

const users = [
  { id: 1, name: "park" },
  { id: 2, name: "choi" },
  { id: 3, name: "kong" }
];

router.get("/", (req, res) => {
  res.send(users);
});

module.exports = router;

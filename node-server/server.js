const express = require("express");
const app = express();

app.get("/", (_, res, __) => {
  res.status(200).send("helo world");
});

app.listen(3000, () => {
  console.log("server up");
});

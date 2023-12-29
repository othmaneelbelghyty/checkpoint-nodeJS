const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello Node!!!!</h1>\n");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

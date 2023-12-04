const express = require("express");
const bodyParser = require("body-parser");
const itemRoutes = require("./routes/items");


const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!! this is veeru how are you iam fine");
});

app.listen(port, () => {
  console.log(`Server started at port http://localhost:${port}`);
});
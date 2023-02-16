// Express Application setup
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); /* bodyParser.json() is deprecated from express 4 */

//Express route definitions
app.get("/", (req, res) => {
  res.send("Hi");
});

app.listen(5000, err => {
  console.log("Listening");
});
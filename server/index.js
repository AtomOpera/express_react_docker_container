// Express Application setup
const express = require("express");
const cors = require("cors");

const PORT = 5000;
const app = express();
app.use(cors());
app.use(express.json()); /* bodyParser.json() is deprecated from express 4 */

//Express route definitions
app.get("/", (req, res) => {
  res.send("Hi");
});

app.get('/articles', (req, res) => {
  res.json([
    {
      "id": "1",
      "title": "Movie Review: The Perk of Being a Wallflower"
    },
    {
      "id": "2",
      "title": "Game Review: Need for Speed"
    },
    {
      "id": "3",
      "title": "Show Review: Looking for Alaska"
    }
  ])
})

app.listen(PORT, err => {
  console.log(`...listening for requests on port ${PORT}`);
});
const queries = require("./query/queries.js")
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
let tags = require('./models/tags_model.js')
const PORT = process.env.PORT || 8080;

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Rest API starts" });
});

app.get("/election_db/count/:name", async (req, res) => {
  const tag = req.params.name;
  const results = await queries.executeQueryCountIds(tags.Tags[tag]).then(data => data);
  res.json({ message: `Number of records for tag: ${tag}` , result: results});
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const connection = require("./models/db.js");

const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.json({message: "Initialize Rest API"})
});

app.listen(3000, () => {
    console.log("Server is running");
})

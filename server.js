const express = require("express")
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 3200
const bodyParser = require("body-parser")
const scrape = express()
const mongoose = require("mongoose");
// for body Parser
scrape.use(bodyParser.urlencoded({ extended: true }));
scrape.use(bodyParser.json());

//Middleware
scrape.use(express.urlencoded({ extended: false }));
scrape.use(express.json());
scrape.use(express.static("public"));

// Handlebars
scrape.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main"
    })
);
scrape.set("view engine", "handlebars");

//Mongo Database
mongoose.connect("mongodb://localhost/27017/scraper", { useNewUrlParser: true });

scrape.listen(PORT, err => {
    if (err) {
        console.log("There was a error", err)
    } else {
        console.log("The server connection was succesful")
    }
})

module.exports = scrape
const express = require("express")
const expbs = require("express-handlebars");
const PORT = process.env.PORT || 3200
const bodyParser = require("body-parser")
const scrape = express()
// for body Parser
scrape.use(bodyParser.urlencoded({ extended: true }));
scrape.use(bodyParser.json());

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
scrape.engine(
    "handlebars",
    exphbs({
      defaultLayout: "main"
    })
  );
  scrape.set("view engine", "handlebars");

scrape.listen(PORT, err =>{
   if (err) {
       console.log("There was a error",err)
   } else {
       console.log("The server connection was succesful")
   }
})

module.exports = scrape
const express = require("express")
const expbs = require("express-handlebars");
const PORT = process.env.PORT || 3200
const scrape = express()


scrape.listen(PORT, err =>{
   if (err) {
       console.log("There was a error",err)
   } else {
       console.log("The server connection was succesful")
   }
})
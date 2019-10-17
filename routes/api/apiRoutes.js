const mongojs = require('mongojs');
const database = "scrape";
const collection = ["Comment", "News"]
const db = mongojs(database, collection)

module.exports = (scrape) => {
    scrape.get("/All", (req, res) => {
        db.News.find({},function(err,data){
            if (err) {
                console.log(err)
                res.sendStatus(500)
            } else {
                res.sendStatus(200)
                res.json(data)
            }
        })
    })
}
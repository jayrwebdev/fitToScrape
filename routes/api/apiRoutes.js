const mongojs = require('mongojs');
const database = "scrape";
const collection = ["Comment", "News"]
const db = mongojs(database, collection)

module.exports = (scrape) => {
    scrape.post("/all", (req, res) => {
    })
    scrape.get("/news", (req, res) => {
        db.News.find({}, (err, data) => {
            if (err) {
                console.log(err)
                res.sendStatus(500)
            } else {
                res.sendStatus(200)
                res.json(data)
            }
        })
    })
    scrape.post("/comments/:id", (req, res) => {
        db.News.create({}, (err, data) => {
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
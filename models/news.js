const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    Headline: String,
    Summary: String,
    URL: String,
    Date: {
        type: Date,
        default: Date.now
    }
})
const News = mongoose.model("News",newsSchema)
module.exports = News
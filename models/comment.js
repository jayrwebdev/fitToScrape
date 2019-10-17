const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    Comment: String,
    Date: {
        type: Date,
        default: Date.now
    }
})
const Comment = mongoose.model("Comment",commentSchema)
module.exports = Comment
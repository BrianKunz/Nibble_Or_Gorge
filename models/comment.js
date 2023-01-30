const { Schema, model} = require("mongoose");

const commentSchema = new Schema({
    body: {type: String, required: true},
    rating: {type: Number, required: true, min: 1, max: 5},
    recipe: {type: Schema. Types.ObjectId, ref: "Recipe"},
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
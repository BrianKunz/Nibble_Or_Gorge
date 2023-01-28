const { Schema, model} = require("mongoose");

const commentSchema = new Schema({
    name: {type: String, required: true},
    body: {type: String, required: true},
    recipe: {type: Schema. Types.ObjectId, ref: "Recipe"},
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unqiue: true },
    password: { type: String, required: true, min: 8},
    createdBy: { type:mongoose.Schema.Types.ObjectId, ref: 'User'},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
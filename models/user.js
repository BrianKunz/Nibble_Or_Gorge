const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, min: 8},
    lactoseIntolerant: { type: Boolean, default: false},
    glutenFree: { type: Boolean, default: false},
    vegetarian: { type: Boolean, default: false},
    vegan: { type: Boolean, default: false},
    kosher: { type: Boolean, default: false},
    keto: { type: Boolean, default: false},
    diabetic: { type: Boolean, default: false},
    dairyFree: { type: Boolean, default: false},
    lowCarb: { type: Boolean, default: false},
    nutAllergy: { type: Boolean, default: false},
    wheatAllergy: { type: Boolean, default: false},
    fishShellfishAllergy: { type: Boolean, default: false},
    eggAllergy: { type: Boolean, default: false},
    soyAllergy: { type: Boolean, default: false},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
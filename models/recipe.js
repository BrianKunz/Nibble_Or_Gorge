const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    prepTime: { type: Number, required: true},
    cookTime: { type: Number, required: true},
    totalTime: { type: Number, required: true},
    servingSize: { type: Number, required: true},
    ingredients: { type: Array, required: true},
    directions: { type: String, required: true},
    calories: { type: Number },
    fat: { type: Number },
    carbs: { type: Number },
    protein: { type: Number },
    nationality: { type: String},
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

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
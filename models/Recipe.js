const mongoose = require('mongoose');


const recipeSchema = new mongoose.Schema({
title: { type: String, required: true, trim: true },
description: { type: String, trim: true },
ingredients: { type: [String], default: [] },
instructions: { type: String, required: true },
cookingTime: { type: Number, min: 0 },
servings: { type: Number, min: 1 },
}, { timestamps: true });


module.exports = mongoose.model('Recipe', recipeSchema);

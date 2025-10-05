// src/models/Recipe.js

import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Recipe title is required"],
      trim: true,
    },
    ingredients: {
      type: [String],
      required: [true, "Ingredients list is required"],
    },
    instructions: {
      type: String,
      required: [true, "Instructions are required"],
    },
    cookingTime: {
      type: Number,
      required: false,
      min: [1, "Cooking time must be at least 1 minute"],
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      default: "easy",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;

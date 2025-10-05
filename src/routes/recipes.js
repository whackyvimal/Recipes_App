// src/routes/recipes.js

import express from "express";
import Recipe from "../models/Recipe.js";

const router = express.Router();

/**
 * @route   GET /api/recipes
 * @desc    Get all recipes
 */
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
});

/**
 * @route   POST /api/recipes
 * @desc    Create a new recipe
 */
router.post("/", async (req, res) => {
  try {
    const { title, ingredients, instructions, cookingTime, difficulty } = req.body;

    const newRecipe = new Recipe({
      title,
      ingredients,
      instructions,
      cookingTime,
      difficulty,
    });

    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * @route   GET /api/recipes/:id
 * @desc    Get a recipe by ID
 */
router.get("/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ error: "Recipe not found" });
    res.status(200).json(recipe);
  } catch (err) {
    res.status(400).json({ error: "Invalid recipe ID" });
  }
});

/**
 * @route   PUT /api/recipes/:id
 * @desc    Update a recipe by ID
 */
router.put("/:id", async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedRecipe)
      return res.status(404).json({ error: "Recipe not found" });
    res.status(200).json(updatedRecipe);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * @route   DELETE /api/recipes/:id
 * @desc    Delete a recipe by ID
 */
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Recipe.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Recipe not found" });
    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: "Invalid recipe ID" });
  }
});

export default router;

const Recipe = require('../models/Recipe');

// Create a new recipe
exports.createRecipe = async (req, res, next) => {
  try {
	const { title, description, ingredients, instructions, cookingTime, servings } = req.body;

	const recipe = new Recipe({
	  title,
	  description,
	  ingredients,
	  instructions,
	  cookingTime,
	  servings
	});

	await recipe.save();

	return res.status(201).json({ success: true, data: recipe });
  } catch (err) {
	next(err);
  }
};


// Get all recipes
exports.getAllRecipes = async (req, res, next) => {
try {
// Optional: simple pagination
const page = parseInt(req.query.page) || 1;
const limit = parseInt(req.query.limit) || 20;
const skip = (page - 1) * limit;


const [recipes, total] = await Promise.all([
Recipe.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
Recipe.countDocuments()
]);


return res.json({ success: true, count: recipes.length, total, page, data: recipes });
} catch (err) {
next(err);
}
};


// Get single recipe by ID
exports.getRecipeById = async (req, res, next) => {
try {
const { id } = req.params;
const recipe = await Recipe.findById(id);
if (!recipe) return res.status(404).json({ success: false, message: 'Recipe not found' });
return res.json({ success: true, data: recipe });
} catch (err) {
next(err);
}
};


// Update recipe
exports.updateRecipe = async (req, res, next) => {
try {
const { id } = req.params;
const updates = req.body;


const recipe = await Recipe.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
if (!recipe) return res.status(404).json({ success: false, message: 'Recipe not found' });


return res.json({ success: true, data: recipe });
} catch (err) {
next(err);
}
};


// Delete recipe
exports.deleteRecipe = async (req, res, next) => {
try {
const { id } = req.params;
const recipe = await Recipe.findByIdAndDelete(id);
if (!recipe) return res.status(404).json({ success: false, message: 'Recipe not found' });


return res.json({ success: true, message: 'Recipe deleted successfully' });
} catch (err) {
next(err);
}
};
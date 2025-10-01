const express = require('express');
const router = express.Router();
const { body, param } = require('express-validator');
const validateRequest = require('../middleware/validateRequest');
const recipeController = require('../controllers/recipeController');


// Validation rules
const createValidators = [
body('title').notEmpty().withMessage('Title is required'),
body('instructions').notEmpty().withMessage('Instructions are required'),
body('ingredients').optional().isArray().withMessage('Ingredients must be an array of strings'),
body('cookingTime').optional().isNumeric().withMessage('cookingTime must be a number'),
body('servings').optional().isInt({ min: 1 }).withMessage('servings must be an integer >= 1'),
validateRequest
];


const updateValidators = [
body('title').optional().notEmpty().withMessage('Title must not be empty'),
body('instructions').optional().notEmpty().withMessage('Instructions must not be empty'),
body('ingredients').optional().isArray().withMessage('Ingredients must be an array of strings'),
validateRequest
];


const idParam = [
param('id').isMongoId().withMessage('Invalid recipe id'),
validateRequest
];


// Routes
router.post('/', createValidators, recipeController.createRecipe);
router.get('/', recipeController.getAllRecipes);
router.get('/:id', idParam, recipeController.getRecipeById);
router.put('/:id', idParam.concat(updateValidators), recipeController.updateRecipe);
router.delete('/:id', idParam, recipeController.deleteRecipe);


module.exports = router;
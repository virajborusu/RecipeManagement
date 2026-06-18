const Recipe = require("../models/Recipe");
const cloudinary = require("../config/cloudinary");

exports.addRecipe = async (req, res) => {
  try {
    let imageUrl = "";

if(req.file){

    const result = await cloudinary.uploader.upload(
        req.file.path
    );

    imageUrl = result.secure_url;
}

const recipe = await Recipe.create({

    recipeName: req.body.recipeName,

    category: req.body.category,

    ingredients: req.body.ingredients,

    instructions: req.body.instructions,

    image: imageUrl

});

    res.status(201).json({
      success: true,
      message: "Recipe Added",
      recipe
    });

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};

exports.getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();

    res.status(200).json({
      success: true,
      recipes
    });

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};

exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({
        message: "Recipe Not Found"
      });
    }

    res.status(200).json(recipe);

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};

exports.updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!recipe) {
      return res.status(404).json({
        message: "Recipe Not Found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Recipe Updated",
      recipe
    });

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};


exports.deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);

    if (!recipe) {
      return res.status(404).json({
        message: "Recipe Not Found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Recipe Deleted"
    });

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};
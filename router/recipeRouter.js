const express = require("express");
const router = express.Router();
const upload = require("../config/multer");

const {
  addRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe
} = require("../controller/recipeController");

// CREATE
router.post("/add", upload.single("image"), addRecipe);

// READ ALL
router.get("/", getRecipes);

// READ ONE
router.get("/:id", getRecipeById);

// UPDATE
router.put("/:id", upload.single("image"), updateRecipe);

// DELETE
router.delete("/:id", deleteRecipe);

module.exports = router;
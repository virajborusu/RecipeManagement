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

router.post("/add", upload.single("image"), addRecipe);


router.get("/", getRecipes);

router.get("/:id", getRecipeById);

router.put("/:id", upload.single("image"), updateRecipe);

router.delete("/:id", deleteRecipe);

module.exports = router;
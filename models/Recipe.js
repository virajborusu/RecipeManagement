const mongoose = require("mongoose")

const RecipeSchema = new mongoose.Schema({

    recipeName:{
        type:String
    },

    category:{
        type:String
    },

    ingredients:{
    type:String
    },

    instructions:{
        type:String
    },

    image:{
        type:String
    }

})

module.exports = mongoose.model(
    "Recipe",
    RecipeSchema
)
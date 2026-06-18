const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const authRoutes = require("./router/authRouter");
const recipeRoutes = require("./router/recipeRouter");
console.log("Recipe Routes Loaded");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Recipe Management API Running");
});

app.use("/api/auth", authRoutes);
console.log("Auth Routes Mounted");

app.use("/api/recipes", recipeRoutes);
console.log("Recipe Routes Mounted");

app.get("/test", (req, res) => {
  res.send("Test Route Working");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
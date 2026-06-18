# Recipe Management API

A RESTful Recipe Management API built using Node.js, Express.js, MongoDB Atlas, Cloudinary, and Multer. This application allows users to manage recipes with complete CRUD operations and image uploads.

## Live Demo

**Render Deployment:**

https://recipemanagement-2y1o.onrender.com

## GitHub Repository

https://github.com/virajborusu/RecipeManagement

---

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Cloudinary
- Multer
- JWT Authentication
- bcryptjs
- dotenv
- CORS

---

## Features

- Add new recipes
- Upload recipe images using Cloudinary
- View all recipes
- View a recipe by ID
- Update recipe details
- Delete recipes
- MongoDB Atlas integration
- RESTful API architecture
- Deployed on Render

---

## Project Structure

```text
RecipeManagement/
│
├── config/
│   ├── cloudinary.js
│   ├── db.js
│   └── multer.js
│
├── controller/
│   ├── authController.js
│   └── recipeController.js
│
├── models/
│   ├── Auth.js
│   └── Recipe.js
│
├── router/
│   ├── authRouter.js
│   └── recipeRouter.js
│
├── uploads/
│
├── .env
├── index.js
├── package.json
└── README.md
```

---

## API Endpoints

### Home Route

```http
GET /
```

Response:

```json
Recipe Management API Running
```

---

### Create Recipe

```http
POST /api/recipes/add
```

Body (form-data):

| Field | Type |
|---------|---------|
| recipeName | Text |
| category | Text |
| ingredients | Text |
| instructions | Text |
| image | File |

---

### Get All Recipes

```http
GET /api/recipes
```

---

### Get Recipe By ID

```http
GET /api/recipes/:id
```

---

### Update Recipe

```http
PUT /api/recipes/:id
```

---

### Delete Recipe

```http
DELETE /api/recipes/:id
```

---

## Environment Variables

Create a `.env` file and add:

```env
PORT=3002

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## Installation & Setup

Clone the repository:

```bash
git clone https://github.com/virajborusu/RecipeManagement.git
```

Move into the project directory:

```bash
cd RecipeManagement
```

Install dependencies:

```bash
npm install
```

Run the server:

```bash
node index.js
```

Server will start at:

```text
http://localhost:3002
```

---

## Testing

The API was tested using:

- Postman
- MongoDB Atlas
- Cloudinary

---

##  Author

**Borusu Naga Viraj**

B.Tech CSE in Cloud Computing  |
SRM University AP

---

## License

This project is developed for educational and academic purposes .
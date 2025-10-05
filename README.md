# 🍲 Recipes App (CRUD with Node.js, Express & MongoDB)

A simple REST API for managing recipes.  
Built with **Node.js**, **Express.js**, **Mongoose (MongoDB)**, and tested with **Postman**.  
Follows the **MVC pattern** for clean code organization.

---

## 🚀 Features
- Create a new recipe  
- Retrieve all recipes  
- Retrieve a recipe by ID  
- Update a recipe by ID  
- Delete a recipe by ID  
- MongoDB integration with Mongoose  
- Error handling and validation  
- Postman collection + environment for easy testing  
---

/recipes-app
│
├── src/
│   ├── config/                # DB connection
│   ├── controllers/           # Route logic
│   ├── middleware/            # Custom middlewares
│   ├── models/                # Mongoose schemas (Recipe.js)
│   ├── routes/                # Express routes (recipes.js)
│   ├── views/                 # Optional HTML templates
│   ├── app.js                 # Express app setup
│   └── server.js              # Server entry point
│
├── .env                       # Environment variables
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── node_modules/

Clone the repository:
git clone <https://github.com/whackyvimal/Recipes_App>
cd recipes-app

Install dependencies:
npm install

Create a .env file in the root folder:
MONGO_URI=<your MongoDB URI>
PORT=8080

Run locally:
npm run dev

http://localhost:8080/api/recipes
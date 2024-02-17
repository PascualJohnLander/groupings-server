# Group Name: ApiWorks
# Members:
 >John Lander M. Pascual,
 >James Tan,
 >John Christian Laririt
# Overview
>The Recipe Sharing API is a web service that allows users to share, create, modify, and delete recipes. It provides endpoints for managing breakfast, lunch, dinner, and dessert recipes and includes features such as authentication, recipe retrieval, addition, modification, and deletion.
# Purpose
>The purpose of this project is to create a platform where users can share their favorite recipes with others. It aims to facilitate recipe sharing and collaboration among food enthusiasts.
# Features
>User authentication
>Get all recipes for breakfast, lunch, dinner, and dessert
>Get a specific recipe by name or id for each category
>Add a new recipe for each category
>Modify an existing recipe for each category
>Delete a recipe for each category
# Setup
Clone the repository:
git clone https://github.com/PascualJohnLander/groupings-server.git
, Install dependencies:
, npm install express nodemon
, Run the server: -nodemon app.js
Access the API endpoints using Postman or any other API testing tool.
# API Endpoints
GET /api/users - get all recipes
GET /api/users/:id - get a specific recipe by id
POST /api/users/addNewRecipe: - Add a new lunch recipe

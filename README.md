# To-Do List Application - Backend

## Overview
This is the backend for a To-Do list application built with Node.js and MongoDB. It provides API endpoints for user registration, login, and to-do item management.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Tokens)
- bcrypt for password hashing

## Setup

### Prerequisites
- Node.js and npm installed
- MongoDB server running or MongoDB Atlas account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/todo-backend.git
   cd todo-backend
2. Install dependencies:
   ```bash
   npm install
3. Create a .env file in the root directory and add the following environment variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
4. Start the Sever:
   ```bash
   npm start
The server will be running at `http://localhost:5000`

# API Endpoints
## User Registration
- Endpoint: POST /api/auth/register
- Description: Register a new user.
- Request Body:
  ```json
  {
  "email": "testuser@example.com",
  "password": "password123"
  }
- Response:
	```json
	   {
	     "token": "your_jwt_token"
	   }
## User Login
- Endpoint: POST /api/auth/login
- Description: Log in an existing user.
- Request Body:
	```json
	{
	  "email": "testuser@example.com",
	  "password": "password123"
	}
- Response:
	```json
	{
	  "token": "your_jwt_token"
	}
#### Create To-Do Item
- **Endpoint:** `POST /api/todos`
-   **Description:** Create a new to-do item.
-   **Headers:**
		- Authorization: Bearer `your_jwt_token`
- **Request Body:**
	```json 
	{
	  "title": "Buy groceries",
	  "description": "Milk, Bread, Eggs"
	}
- Response:
	```json
	{
	  "_id": "todo_id",
	  "userId": "user_id",
	  "title": "Buy groceries",
	  "description": "Milk, Bread, Eggs",
	  "status": "pending",
	  "createdAt": "date",
	  "__v": 0
	}
#### Get All To-Do Items
- **Endpoint:** `GET /api/todos`
-   **Description:** Retrieve all to-do items for the logged-in user.
-   **Headers:**
		- Authorization: Bearer `your_jwt_token`
-  **Response**:
	```json
	[
	  {
	    "_id": "todo_id",
	    "userId": "user_id",
	    "title": "Buy groceries",
	    "description": "Milk, Bread, Eggs",
	    "status": "pending",
	    "createdAt": "date",
	    "__v": 0
	  }
	]
#### Delete To-Do Item
- **Endpoint:** `DELETE /api/todos/:id`
-   **Description:** Delete a to-do item by ID.
-   **Headers:**
		- Authorization: Bearer `your_jwt_token`
-  **Response**:
	```json
	{
	  "message": "Todo deleted"
	}
## Deployment

-   **Deploy to Render:** Follow the Render documentation to deploy your Node.js application.
	



# Frontend Documentation


## To-Do List Application - Frontend

## Overview
This is the frontend for a To-Do list application built with ReactJS. It provides a user interface to manage to-do items by interacting with the backend API.

## Technologies Used
- ReactJS
- Axios for HTTP requests
- CSS for styling

## Setup

### Prerequisites
- Node.js and npm installed

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/todo-frontend.git
   cd todo-frontend
2. Install dependencies:
	```json
	npm install
3. Start the development server:
	```json 
	npm start
The React application will be running at `http://localhost:3000`.
## Components

### `Auth`

Handles user registration and login.

### `TodoList`

Displays the list of to-do items and allows users to create, update, and delete items.

### `TodoItem`

Represents a single to-do item and allows editing or deleting.

## API Integration

The frontend communicates with the backend API using the following endpoints:
### User Registration

-   **Endpoint:** `POST /api/auth/register`
-   **Request Body:**
	```json
	{
	  "email": "testuser@example.com",
	  "password": "password123"
	}
- **Response**:
	```json
	{
	  "token": "your_jwt_token"
	}
### User Login

-   **Endpoint:** `POST /api/auth/login`
-   **Request Body:**
	```json
	{
	  "email": "testuser@example.com",
	  "password": "password123"
	}
- **Response:**
	```json
	{
	  "token": "your_jwt_token"
	}
### To-Do Operations

-   **Create To-Do Item:** `POST /api/todos`
-   **Get All To-Do Items:** `GET /api/todos`
-   **Update To-Do Item:** `PUT /api/todos/:id`
-   **Delete To-Do Item:** `DELETE /api/todos/:id`
## Deployment

1.  **Deploy the React app to Netlify:**
    
    -   Create an account on [Netlify](https://www.netlify.com/).
    -   Connect your GitHub repository containing the React project.
    -   Deploy the site directly from the repository.
2.  **Alternative Deployment:**
    
    -   Build the React app: `npm run build`.
    -   Deploy the contents of the `build` directory to a static site hosting service like Vercel, GitHub Pages, or others.


Feel free to adjust the URLs, repository links, and other specifics to match your project setup.

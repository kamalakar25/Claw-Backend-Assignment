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




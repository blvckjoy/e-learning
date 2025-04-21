# E-Learning Platform API

A robust RESTful API for an e-learning platform that enables course management, student enrollment, and progress tracking. Built with Node.js, Express, and MongoDB.

## Table of Contents

-  [Features](#features)
-  [Installation](#installation)
-  [API Documentation](#api-documentation)
-  [Authentication](#authentication)
-  [Error Handling](#error-handling)
-  [Deployment](#deployment)

## Features

-  **User Management**

   -  Role-based access control (Student, Instructor)
   -  JWT and Bcrypt authentication
   -  Secure password handling

-  **Course Management**

   -  Create, read, update, and delete courses
   -  Course enrollment system

-  **Student Management**
   -  Student enrollment
   -  Course removal

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/e-learning.git
cd e-learning
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Start the development server:

```bash
npm run dev
```

## API Documentation

## Authentication

### Overview

The API uses JWT (JSON Web Tokens) for authentication and Bcrypt for password hashing. All protected routes require a valid JWT token in the Authorization header.

### Authentication Endpoints

#### Register User

```http
POST /api/auth/signup
```

Request Body:

```json
{
   "username": "johndoe",
   "email": "john@example.com",
   "password": "securepassword123",
   "role": "student" // or "instructor"
}
```

Response:

```json
{
   "message": "User registered successfully",
   "user": {
      "id": "user_id",
      "username": "johndoe",
      "email": "john@example.com",
      "role": "student"
   }
}
```

#### Login User

```http
POST /api/auth/login
```

Request Body:

```json
{
   "email": "john@example.com",
   "password": "securepassword123"
}
```

Response:

```json
{
   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Error Responses

#### Authentication Errors

```json
{
   "message": "Invalid credentials"
}
```

Status: 400

```json
{
   "message": "Invalid token"
}
```

All protected routes require a valid JWT token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

### Course Endpoints

#### Get All Courses

```http
GET /api/courses
```

Returns a list of all available courses.

#### Create Course (Instructor Only)

```http
POST /api/courses
```

Request Body:

```json
{
   "title": "Web Development",
   "description": "Learn web development",
   "duration": "3 months",
   "price": 99.99
}
```

Response:

```json
{
   "message": "Course created successfully"
}
```

#### Update Course (Instructor Only)

```http
PATCH /api/courses/:courseId
```

Request Body:

```json
{
   "duration": "2 months",
   "price": 69.99
}
```

Response:

```json
{
   "message": "Course updated successfully"
}
```

#### Delete Course (Instructor Only)

```http
DELETE /api/courses/:courseId
```

Response:

```json
{
   "message": "Course deleted successfully"
}
```

### Student Management Endpoints

#### Enroll in Course (Student Only)

```http
POST /api/courses/:courseId/enroll
```

Response:

```json
{
   "message": "Enrolled successfully"
}
```

#### Remove Student from Course (Instructor and Student)

```http
DELETE /api/courses/:courseId/students/:studentId
```

Response:

```json
{
   "message": "Student removed successfully"
}
```

## Error Handling

The API uses standard HTTP status codes and returns JSON error responses:

```json
{
   "message": "Error description"
}
```

Common status codes:

-  200: Success
-  201: Created
-  400: Bad Request
-  401: Unauthorized
-  403: Forbidden
-  404: Not Found
-  500: Internal Server Error

## Postman Documentation

-  Link: https://documenter.getpostman.com/view/32577214/2sB2cbbKK5
-  Variables:
   -  {{baseUrl}}: Change it to your API URL or http://localhost:3002
   -  {{authToken}}: Change after successful login.
   -  {{courseId}}: Change to a valid course ID.
   -  {{studentId}}: Change to a valid student ID.

## Deployment

-  This API is deployed on Render at https://e-learning-api-x08q.onrender.com/

## Acknowledgments

-  Express.js
-  MongoDB
-  JWT
-  Mongoose
-  Bcrypt

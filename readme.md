# node-API-Auth-crud

A simple Node.js REST API with user authentication and CRUD operations for items.  
Built with Express, MongoDB (Mongoose), and JWT for secure token-based authentication.

---

## Features

- User registration and login with JWT authentication  
- Protected routes for creating, reading, updating, and deleting user-specific items  
- Secure password hashing with bcrypt  
- Request logging with Winston  
- Basic error handling and validation  
- Modular structure with separate routes, controllers, and models  
- Environment configuration for secrets and database connection  

---

## Technologies Used

- Node.js  
- Express  
- MongoDB with Mongoose  
- JSON Web Tokens (JWT)  
- bcrypt for password hashing  
- Winston for logging  
- dotenv for environment variables  

---

## Getting Started

### Prerequisites

- Node.js and npm installed  
- MongoDB running locally or a MongoDB Atlas URI  

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/node-API-Auth-crud.git
   cd node-API-Auth-crud

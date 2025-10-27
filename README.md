# 🧾 Customer CRUD API  
**A simple and modern REST API built with Node.js, TypeScript, Express, and MongoDB (Mongoose).**

![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)
![Express](https://img.shields.io/badge/Express.js-Framework-black?logo=express)
![License](https://img.shields.io/badge/license-MIT-brightgreen)

---

## 🚀 Overview
The **Customer CRUD API** is a backend application that demonstrates how to build a clean, maintainable, and strongly-typed REST API using **Node.js**, **TypeScript**, and **MongoDB**.  
It provides basic CRUD (Create, Read, Update, Delete) operations for managing customer data.

You can use this as a starter project for building more complex business applications or integrating with a frontend (React, Angular, Vue, etc.).

---

## 📦 Tech Stack
- **Backend:** Node.js, Express.js  
- **Language:** TypeScript  
- **Database:** MongoDB (Mongoose ODM)  
- **Environment:** dotenv  
- **Dev Tools:** ts-node-dev, nodemon, GitHub Desktop  
- **Version Control:** Git & GitHub  

---

## 📁 Folder Structure

customer-crud-api/
├─ .env
├─ .gitignore
├─ package.json
├─ tsconfig.json
├─ src/
│ ├─ index.ts # App entry
│ ├─ config/
│ │ └─ db.ts # MongoDB connection
│ ├─ models/
│ │ └─ customer.model.ts # Customer schema
│ ├─ controllers/
│ │ └─ customer.controller.ts# CRUD logic
│ ├─ routes/
│ │ └─ customer.routes.ts # Express routes
│ ├─ middlewares/
│ │ └─ errorHandler.ts # Centralized error handler
│ └─ utils/
│ └─ validators.ts # (optional) custom validators
└─ README.md


---

## ⚙️ Installation & Setup

### 1️⃣ Prerequisites
Make sure the following are installed:
- [Node.js 18+](https://nodejs.org)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)
- [GitHub Desktop](https://desktop.github.com/)
- [Git](https://git-scm.com/)

---

### 2️⃣ Clone the Repository
Using **GitHub Desktop**:
- Click **“Clone Repository” → “URL”**
- Paste your repo URL and choose a local folder.

Or using terminal:
```bash
git clone https://github.com/retrac18/customer-crud-api.git
cd customer-crud-api

API Endpoints
| Method     | Endpoint             | Description                 |
| :--------- | :------------------- | :-------------------------- |
| **POST**   | `/api/customers`     | Create a new customer       |
| **GET**    | `/api/customers`     | Get all customers           |
| **GET**    | `/api/customers/:id` | Get a single customer by ID |
| **PUT**    | `/api/customers/:id` | Update customer details     |
| **DELETE** | `/api/customers/:id` | Delete a customer           |

🧠 Key Features
    ✅ Full CRUD operations
    ✅ Type-safe models and routes
    ✅ MongoDB integration with Mongoose
    ✅ Environment-based configuration
    ✅ Centralized error handling
    ✅ Hot reload using ts-node-dev
    ✅ Ready for Docker or cloud deployment

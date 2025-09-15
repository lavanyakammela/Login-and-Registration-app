# MERN Login and Registration App

A full-stack **Login and Registration system** built with the **MERN (MongoDB, Express.js, React.js, Node.js) stack**.
This project demonstrates user authentication, registration, and secure login functionality with integration of frontend and backend.

---

## 🚀 Features

* 🔑 User Registration with validation
* 🔐 User Login with authentication
* 📦 Backend API built with **Node.js + Express.js**
* 🗄️ Database using **MongoDB + Mongoose**
* ⚛️ Frontend with **React.js**
* 🎨 Styled with **HTML, CSS, and JavaScript**
* 🔄 Full stack integration

---

## 🛠️ Tech Stack

**Frontend:**

* React.js
* HTML
* CSS
* JavaScript

**Backend:**

* Node.js
* Express.js

**Database:**

* MongoDB (with Mongoose ORM)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/mern-auth-app.git
cd mern-auth-app
```

### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the **backend** folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Run the backend server:

```bash
npm start
```

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
npm start
```

The React app will run on **[http://localhost:3000](http://localhost:3000)** and backend on **[http://localhost:5000](http://localhost:5000)**.

---

## 🔐 API Endpoints

### Authentication Routes

* `POST /api/auth/register` → Register a new user
* `POST /api/auth/login` → Login user and return JWT


## 📌 Future Enhancements

* ✅ Email verification
* ✅ Admin dashboard
* ✅ Profile management




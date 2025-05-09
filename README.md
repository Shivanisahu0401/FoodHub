# Full-Stack-Food-Delivery-Project (TOMATO)

Build Full Stack Food Ordering Website using React JS, MongoDB, Express, Node JS &amp; Strip

****Home Page****

![img1](https://github.com/VaishnaviSingh1/Food-Ordering-Website/assets/98222001/161e7baa-bb9d-4f2f-9383-072f122d3d13)

**Menu page**

![img2](https://github.com/VaishnaviSingh1/Food-Ordering-Website/assets/98222001/01532cec-7368-4378-ba3d-8189f7c6d323)
**Cart Page**

![img3](https://github.com/VaishnaviSingh1/Food-Ordering-Website/assets/98222001/d4747eba-2d25-4db6-8492-ad497374138e)
**Admin Panel**

![img 4](https://github.com/VaishnaviSingh1/Food-Ordering-Website/assets/98222001/d84b53d7-b0e1-463f-a6bf-2b1ed2536a92)



Project Overview
------------------------

This project implements a complete food ordering website using React JS, MongoDB, Express, Node JS, and Stripe payment gateway. Key features include:

**Frontend Website**: Allows users to browse food items, add them to the cart, and place orders.

**Admin Panel**: Enables administrators to manage food items and view orders.

**Backend Server**: Handles API requests, user authentication, shopping cart functionality, and interacts with MongoDB for data storage.

**User Authentication**: Supports user registration, login, and maintains session-based shopping carts.

**Shopping Cart Functionality**: Users can add/remove food items from their carts.

**Stripe Payment Integration**: Facilitates secure online payments for orders.

**Order Status Updates**: Provides real-time updates on order processing.



Dependencies
---------------------------------------------------------------

express: Web framework for Node.js

mongoose: MongoDB object modeling for Node.js

jsonwebtoken: JSON Web Token implementation for authentication

bcrypt: Password hashing library

cors: Cross-Origin Resource Sharing middleware

dotenv: Environment variable management

stripe: Stripe API for payment processing

multer: Middleware for handling file uploads

react: JavaScript library for building user interfaces

react-dom: React package for DOM rendering

react-router-dom: Declarative routing for React applications

axios: Promise-based HTTP client for the browser and Node.js

Environment Variables
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Ensure you have a .env file in your backend directory with the following variables:

JWT_SECRET: Secret key for JWT token generation

STRIPE_SECRET_KEY: Secret key for Stripe API integration



MongoDB Schemas
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
```
const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true }
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;

Order Model
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: { type: Array, required: true },
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  status: { type: String, default: "Food processing" },
  date: { type: Date, default: Date.now() },
  payment: { type: Boolean, default: false }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
User Model
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cartData: { type: Object, default: {} }
}, { minimize: false });

const User = mongoose.model("User", userSchema);

module.exports = User;
```


Deployment
-------------------


1.Deploy the backend (Node.js / Express) and frontend (React) to your preferred hosting services.

2.Configure environment variables (JWT_SECRET, STRIPE_SECRET_KEY) in your hosting environment.

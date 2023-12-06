# AirBlog - Explore the Skies 🛫

🚀 Welcome to AirBlog, your exclusive destination for sharing and exploring captivating stories from the skies. AirBlog is more than just a flight blogging platform; it's a community that celebrates the joy of aviation, connecting pilots, travelers, and aviation enthusiasts worldwide.

## Overview

AirBlog is a flight blogging website that provides a space for aviation aficionados to share their unique flight experiences, travel stories, and insights into the fascinating world of aviation. Whether you're a seasoned pilot, a frequent traveler, or someone with a passion for flight, AirBlog invites you to take off and join our community.

## Purpose and Features
✈️ Connect Aviation Enthusiasts
Create a profile, connect with fellow aviators, and build a network of like-minded individuals who share your love for flight.

📖 Celebrate Flight Experiences
Document and celebrate your memorable flight experiences, whether it's a breathtaking view from the cockpit or a travel adventure that left a lasting impression.

🌍 Explore Diverse Stories
Dive into a vast collection of flight blogs covering a range of topics, from technical insights into aviation to personal narratives of global travel adventures.

🚀 Educate and Inspire
Share your knowledge, insights, and passion for aviation to educate and inspire others. Engage in discussions, leave comments, and foster a community of learning.

## Table of Contents

- [Basic Setup](#basic-setup)
- [How to Initialize](#how-to-initialize)
- [Required Modules and Their Importance](#required-modules-and-their-importance)
- [User Navigation](#user-navigation)
- [Screenshots](#screenshots)
- [Security Measures](#security-measures)
- [Future Scope and Upgrades](#future-scope-and-upgrades)


## Basic Setup

Before you start, make sure you have the following prerequisites:

- Node.js installed
- npm package manager
- MongoDB installed

## How to Initialize

Follow these steps to initialize the project:

```bash
# Clone the repository
git clone https://github.com/SDeBAS/AirBook.git

# Change to project directory
cd AirBook

# Install dependencies for BackEnd Connection
cd backend
npm install

# Install dependencies for FrontEnd Connection
cd backend
npm install
```
# Required Modules and Their Importance

#Frontend
1. React: React is the core library for building user interfaces in a declarative and component-based manner. It's fundamental for developing interactive and dynamic web applications.
2. Redux Toolkit: Redux Toolkit simplifies and streamlines the usage of Redux in React applications. It provides a set of conventions and abstractions that make state management more efficient and developer-friendly.
axios: Axios is a widely used HTTP client library for making asynchronous requests. It's crucial for handling data fetching and interacting with APIs in a React application.
3. React Router: React Router enables navigation and routing in React applications. It's essential for building single-page applications with multiple views.

#Backend

1. Express: Express is a fast, unopinionated, minimalist web framework for Node.js. It simplifies the process of building robust and scalable web applications by providing a set of features and middleware.
2. Mongoose: Mongoose is an ODM (Object-Document Mapping) library for MongoDB and Node.js. It provides a schema-based solution to model application data and includes features like validation, middleware, and query building.
3. bcryptjs: bcryptjs is a library for hashing and salting passwords. It helps securely store and manage user passwords by providing a way to hash and compare passwords.
4. body-parser: body-parser is middleware for Express that extracts the body of an incoming HTTP request and parses it into a format that is easy to work with, such as JSON or URL-encoded data.
5. cors: cors is middleware for Express that enables Cross-Origin Resource Sharing (CORS) on the server. It allows or restricts cross-origin requests based on the server's configuration, preventing unauthorized access.
6. dotenv: dotenv is a zero-dependency module that loads environment variables from a .env file into the process.env object. It's commonly used to manage configuration settings in Node.js applications.

# User Navigation

```bash
#Frontend App Structure 

  src
│
├──components
│ │
│ ├──AllComments
│ ├──CommentBox
│ ├──CommentForm
│ ├──Footer
│ ├──Footer
│ ├──Form
│ ├──Post
│ ├──Posts
│ ├──Sidebar
│ ├──SingleComment
│ ├──Footer
│
├──pages
│ │
│ ├──AboutUS
│ ├──Blogs
│ ├──Edit
│ ├──Home
│ ├──Login
│ ├──Profile
│ ├──SignUp
│ ├──SinglePage
│ ├──SinglePost
│ ├──Write
├──app.js
├──config.js
├──index.js

# Backend App Structure
User Routes:
Get User by ID: GET /user/:userId
Post Routes:
Create New Post: POST /posts
Get Post by ID: GET /posts/:id
Get All Posts: GET /posts
Post Comment: POST /posts/:id/comments
Get Comments for a Post: GET /posts/:id/comments
Get Posts by User ID: GET /posts/user/:userId
Get Posts by User Email: GET /posts/user/email/:userEmail
Update Post by ID:
PUT /posts/:id Delete Post by ID:
DELETE /posts/:id
Authentication Routes:
User Registration: POST /auth/register
User Login: POST /auth/login

```

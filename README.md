
#  A Blog API
## About the app
A Blog API, with full CRUD using NodeJS, Express, Mongoose, and MongoDB.  Allows user to register though the auth route, where the user receives a token.  With the token the user can view and create blogs.  The user can update and create the user's own blogs.  The user can also add comments and like a blog.
This game is deployed on Heroku at [BlogAPI](https://jmui-blog.herokuapp.com/ "BlogAPI")
 

## Technologies Used
### Server
* Node.js - an open source asynchronous event-driven server environment that executes JavaScript code outside a web browser. 
* Express - a back end web application framework for Node.js
* nodemon -  a monitoring tool that automatically restart  node application when file changes in the directory are detected

### Database 
* MongoDB - a non-relational document database that stores data in a format similar to Javascript Object Notation.
* Mongoose - a JavaScript library that creates a connection between MongoDB and the Express web application framework.

### Midddleware
* MORGAN  - an Express middleware to log HTTP requests and errors, and simplifies the process.
* HELMET  - an Express middleware that helps secure HTTP headers returned by an Express apps.
* Express-Validator - an express middleware that provides validation and sanitization functions

### Encryption
* Bcrypt  - a library to help you hash passwords.

### Tokens
* jsonwebtoken - an implementation of JSON Web Tokens.

### Loading Environmental Variables
* dotenv - module that loads environment variables from a .env file into process.env

### Testing API
* Postman - an API platform for developers to design, build, test and iterate their APIs.

## Environmental Variables
These variables are needed in the .env file
* MONGODB_URI
* SECRET_KEY

## Installation Instructions

### Get Git Bash 
1. Download the Git Bash setup from: https://git-scm.com/
2. Download the installer.
3. Run the .exe file you just downloaded and follow the instructions in the installer.​
4. Run Git Bash by right-clicking on any folder and selecting the Git Bash Here option from the context menu

### Clone the project 
1. Create a folder for project.
2. Open a Git Bash terminal.
3. cd into folder that was created in step 1
3. In the terminal type  git clone https://github.com/jsnmui/blogapi.git

### Node.js
1. Go to https://nodejs.org/en/download/
2. Download the correct installer for your system
3. Run the installer

### Nodemon
Install nodemon globally with npm install -g nodemon

### Install dependencies
1. In Git Bash terminal, type npm init -y
2. type npm install and then the following:
* express
* mongoose
* bcrypt
* dotenv
* jsonwebtoken
* morgan
* helmet
* express-validator

## Endpoints, Parameters, Schema
### Routes
In server.js, root route for the app.get(/) returns "Welcome to my API"

#### Auth route for login and registration
* router.post('/registration') - register new users. userSchema is used.
* 


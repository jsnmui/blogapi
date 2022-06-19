
#  A Blog API
## About the app
A Blog API, with full CRUD using NodeJS, Express, Mongoose, and MongoDB.  Allows user to register though the auth route, where the user receives a token.  With the token the user can view and create blogs.  The user can update and create the user's own blogs.  The user can also add comments and like a blog.
This app is deployed on Heroku at [BlogAPI](https://jmui-blog.herokuapp.com/ "BlogAPI")
 

## Technologies Used
### Server
* Node.js - an open source asynchronous event-driven server environment that executes JavaScript code outside a web browser. 
* Express - a back end web application framework for Node.js

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
* jsonwebtoken - an implementation of JSON Web Token (JWT), which is encoded data that is cryptographically signed with a secret value that can act like a "key". It can be sent to a client as proof of authenticity and sent back to the server on subsequent requests as proof of the client's authenticity.

### Loading Environmental Variables
* dotenv - module that loads environment variables from a .env file into process.env

### Testing API
* Postman - an API platform for developers to design, build, test and iterate their APIs.

## Environmental Variables
These variables are needed in the .env file
* MONGODB_URI
* SECRET_KEY

## Installation Instructions to Run Locally

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

### MongoDB
1. Create account on https://www.mongodb.com/
2. Create a new cluster.
3. Click connect to get connection string,
4. Add connection string to MONGODB_URI in .env file.

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

#### auth route for login and registration
* router.post('/registration') - Register new users. userSchema is used. Password hasehd with bcrypt.hash. Token generated with jwt.sign. 
* router.post('/login') - Login with user's email and password. Token generated with jwt.sign

#### users route
* router.get('/') - Must be a registered user with a valid token to get all users.
* router.get('/:id') - Get a user by setting parameter id to the user's id. Must be a registered user with a valid token.
* router.put('/:id') - Updates a user. Must be a registered user with a valid token. Check id parameter to see if the user is owner of the account and updates user information. 
* router.delete('/:id') - Deletes a user.  Protected with token. Check id parameter to see if the user is owner of the account and deletes user account.


#### blogs route
* route.get('/') - Retrieves all blogs. User must be registered and have a valid token
* router.get('/nonprivate') - Gets public blogs. Doesn't require registration token.
* router.post('/') - Creates a new blog post. User needs to be registered and have a valid token.
* router.get('/:id') - Get a blogs by sending the blog id as the parameter. User needs to be registered and have a valid token.
* router.put('/:id') - Update a blog by sending the blog id as the parameter. User needs to be registered and have a valid token.
* router.delete('/:id') - Delete a blog by sending the blog id as the parameter. User needs to be registered and have a valid token.
* router.put('/like/:id') - Allows a registered user to like a blog post and increase the like counter for a post.  Each user can like a post only once. Takes the blog id as the parameter. A user can like a post by sending the id. A user can remove the same like by sending the id again. 

### Schemas
## userSchema
* username: type: String, required: true
* email: type: String, required: true, unique: true
* birthday: type: Date, required: true
* age:  type: Number
* password: type: String, required: true

## blogSchema
* creator_id: type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true 
* created_by: type: String, required: true
* created_at: type: Date, required: true, default: Date.now()
* blog_title: type: String,required: true
* blog_content: type: String,required: true
* comments: [creator_id: type: mongoose.Schema.Types.ObjectId, ref:'user', created_at: type: Date, default: Date.now(), comment: type: String]
* likesHistory:[user_id: type: mongoose.Schema.Types.ObjectId, ref: 'user', like: type: Boolean]
* likes: type: Number, default: 0
* private: type: Boolean, required: true
    
## authMiddleware
* Token taken from req.header('x-auth-token'). In Postman, x-auth-token was set to the token generated at users/login or users/registration routes.
* Token is verified using the jwt.verify method and the unique SECRET_KEY.
* Decoded data that is returned from jwt.verify is saved in req.user to be used in other routes.
  

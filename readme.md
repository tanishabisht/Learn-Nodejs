# Learn - Node.js
Welcome to the Node.js learning repository. Here, you will find a variety of branches dedicated to different aspects of using Node.js for web development, including working with Express.js, templating engines, the MVC architecture, and interacting with MongoDB and Mongoose.


## Instructions to run the application
Follow these instructions to get the application running:
1. Click the green **Code** button on the GitHub repository page and download the ZIP file.
2. Extract the contents of the ZIP file.
3. Open the extracted folder in your preferred IDE (such as VS Code).
4. Install Node.js version 14.21.3:
   - `nvm install v14.21.3`
   - `nvm use v14.21.3`
5. Install necessary packages:
   - `npm install`
6. Start the application:
   - To run the project : `npm start`
   - Go to `localhost:3000` to see the website contents


## Branch Descriptions
- **expressJs**: Explore the basics of setting up an Express.js application.

- **templating_engine**: Learn how to integrate various templating engines like EJS, Pug, and Handlebars into your projects.
- **MVC**:
  - **Model**: Manages data and business logic.
  - **View**: Handles layout and display.
  - **Controller**: Routes commands to the model and view parts.
  - **Routes**: Defines URLs to different parts of the application.
- **MongoDB**:
  - Set up and use database connections.
  - Implement basic CRUD operations:
    - `insertOne()` | `insertMany()`: Add new documents.
    - `find().toArray()`: Retrieve all documents.
    - `find({ _id: new mongodb.ObjectId(id) }).next()`: Fetch a single document by ID.
    - `updateOne({ _id: new mongodb.ObjectId(id) }, {$set:{title, desc}})`: Update a document.
    - `deleteOne({ _id: new mongodb.ObjectId(id) })`: Remove a document.
- **Mongoose**:
  - Comprehensive examples and techniques from the [Mongoose documentation](https://mongoosejs.com/docs/).
  - Establish database connections, define schemas, and create models.
  - Perform document operations such as add, fetch, delete, and update.
  - Utilize Mongoose methods like `populate()` and `select()` for more complex queries.
    ```javascript
    .populate('fieldName', 'what field to keep and what not')
    .populate('userId', 'name -_id').execPopulate()
    ```


## Technologies used
`express` `mongodb` `mongoose` `ejs` `body-parser` `bcryptjs`
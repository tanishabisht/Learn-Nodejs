# Node Js

## Branches
- expressJs
- templating_engine
  - Examples: (ejs, pug, handlebars)
- MVC
  - Modal: Represents data structure and data manipulation functions
  - View: What user sees
  - Controller: The in between logic that tells which Model to work with and which View to render
  - Routes: on what path which controller should execute
- MongoDB
  - Creating db connection
  - Setting up db connection
  - `insertOne() | insertMany()`: Save documents in collection of db
  - `find().toArray()`: Fetch all data from collection
  - `find({ _id:new mondodb.ObjectId(id) }).next()`: Fetch data by id from collection
  - `updateOne({ _id:new mondodb.ObjectId(id) }, {$set:{title,desc})`: Update data by id from collection
  - `deleteOne({ _id:new mondodb.ObjectId(id) })`: Delete document by id from collection
// imports
const express = require("express");
const app = express();
const { connect } = require("mongoose");
require("dotenv").config();
// Routers
const adminRouter = require("./routers/adminRouter");
const searchRouter = require("./routers/searchRouter");
const userRouter = require("./routers/userRouter");

// middleware imports
require("express-async-errors");
const errorHandlerMiddleware = require("./middlewares/errorHandler");
const notFoundMiddleware = require("./middlewares/notFound");

// home route
app.get("/", (req, res) => {
  res.send(
    "<h2>Welcome to the official database server for BUC.</h2><p>If you are an admin or have the right permissions, you'd know the routes to navigate in order to make proper HTTP requests... :)</>"
  );
});

// ROUTES
// search route
//app.use("/api/v1/search", searchRouter); //This route handles only all Http GET requests i.e. Retrieval of data from the database, mainly for display of data on the UI.

// admin route
app.use("/api/v1/dashboard", adminRouter); //This route is restricted to only admin users, and it handles Creating, Updating, and Deleting of data in the database i.e. Http POST, PUT/PATCH, and DELETE requests. Will be mostly used in the admin dashboard.

// users route
//app.use("/api/v1/user", userRouter); //This route is used to handle order requests from users. Since "orders" is a collection on the database of which instances/models of it can only be created by a user, users are able to Create, Update, and Delete unique orders by sending the corresponding Http requests which will be handled on the frontend.

// functional middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// Start app
const port = process.env.PORT || 4000;
const start = async () => {
  try {
    // Listen on port only if connection to databse is successful.
    await connect(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening on port: ${port}`));
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
    process.exit(1);
  }
};

start();

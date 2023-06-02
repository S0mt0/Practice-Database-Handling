// imports
require("dotenv").config();
const app = require("express")();
const { connect } = require("mongoose");
// Routers
const adminRouter = require("./routers/adminRouter");
const blogRouter = require("./routers/blogRouter");
const orderRouter = require("./routers/orderRouter");
const staffRouter = require("./routers/staffRouter");
const userRouter = require("./routers/userRouter");
// middleware imports
require("express-async-errors");
const errorHandlerMiddleware = require("./middlewares/errorHandler");
const notFoundMiddleware = require("./middlewares/notFound");

// Home route
app.get("/", (req, res) => {
  res.send(
    "<h2>Welcome to the official database server for BUC.</h2><p>If you are an admin or have the right permissions, you'd know the routes to navigate in order to make proper HTTP requests... :)</>"
  );
});

// custom functional middlewares
app.use(errorHandlerMiddleware);

// Routes
app.use("/admin", adminRouter);
app.use("/blogs", blogRouter);
app.use("/orders", orderRouter);
app.use("/staff", staffRouter);
app.use("/users", userRouter);

// custom functional middlewares
app.use(notFoundMiddleware);

const port = process.env.PORT || 4000;

const start = async () => {
  try {
    // Listen on port only if connection to databse is successful.
    await connect(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is up and listening on port: ${port}`)
    );
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  }
};

start();

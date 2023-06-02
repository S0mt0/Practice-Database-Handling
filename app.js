require("dotenv").config();
const express = require("express");
const app = express();
const adminRouter = require("./routers/adminRouter");

app.get("/", (req, res) => {
  res.send("hello world");
});

// Routes
app.use("/admin", adminRouter);

const port = process.env.PORT || 4000;

app.listen(port, () =>
  console.log(`Server is up and Listening on port: ${port}`)
);

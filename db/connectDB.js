const { admin } = require("../models/models");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const { connect } = require("mongoose");

let firstAdmin = {
  username: "Mariam Spice",
  password: "testingPassword123...yeso",
  role: "manager",
  imgURL: "http://myimages.com/jsh",
};

const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI);
    const admin1 = await admin.create(firstAdmin);
    console.log(
      `Successfully connected to the database and created your first admin user: ${admin1}`
    );
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB();

// connect(process.env.MONGO_URI)
//   .then(() => {
//     const admin1 = new admin(firstAdmin);
//     admin1
//       .save()
//       .then((instanceofAdmin) => {
//         console.log(
//           `Successfully connected to the database and created your first admin user: ${instanceofAdmin}`
//         );
//         process.exit(0);
//       })
//       .catch((error) => {
//         console.log(error.errors);
//         process.exit(1);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

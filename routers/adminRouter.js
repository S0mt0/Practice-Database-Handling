const express = require("express");
const router = express.Router();
// import controllers
const {
  getAdminController,
  createAdminController,
  updateAdminController,
  deleteAdminController,
} = require("../controllers");

router.use(express.json());

//route to handle getting admin by id.
router.route("/admin/:id").get(getAdminController);
// route to handle requests to the 'admins collection'.
router
  .route("/admin")
  .get(getAdminController)
  .post(createAdminController)
  .patch(updateAdminController)
  .delete(deleteAdminController);

// route to handle 'blogs collection' requests
// router
//   .route("/blog")
//   .get(getBlogController)
//   .post(createBlogController)
//   .patch(updateBlogController)
//   .delete(deleteBlogController);

// route to handle 'orders collection' requests
// router
//   .route("/order")
//   .get(getOrderController)
//   .post(createOrderController)
//   .patch(updateOrderController)
//   .delete(deleteOrderController);

// route to handle 'products collection' requests
// router
//   .route("/product")
//   .get(getProductController)
//   .post(createProductController)
//   .patch(updateProductController)
//   .delete(deleteProductController);

// route to handle 'staff collection' requests
// router
//   .route("/staff")
//   .get(getStaffController)
//   .post(createStaffController)
//   .patch(updateStaffController)
//   .delete(deleteStaffController);

// route to handle 'users collection' requests
// router
//   .route("/user")
//   .get(getUserController)
//   .post(createUserController)
//   .patch(updateUserController)
//   .delete(deleteUserController);

module.exports = router;

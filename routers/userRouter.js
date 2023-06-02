const { Router } = require("express");
const router = Router();
const getUsersController = require("../controllers/userController");

// router.get("/static", (req, res) => {
//   res.status(200).json({ status: "success", users });
// });

router.route("/static").get(getUsersController);
// .post(createAdmin)
// .delete(removeAdmin)
// .patch(updateAdmin);

module.exports = router;

const { Router } = require("express");
const router = Router();
const getStaffController = require("../controllers/staffController");

router.route("/").get(getStaffController);
// .post(createAdmin)
// .delete(removeAdmin)
// .patch(updateAdmin);

module.exports = router;

const { Router } = require("express");
const router = Router();
const getAdminController = require("../controllers/adminController");

router.route("/static").get(getAdminController);
// .post(createAdmin)
// .delete(removeAdmin)
// .patch(updateAdmin);

module.exports = router;

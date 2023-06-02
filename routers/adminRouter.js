const { Router } = require("express");
const router = Router();
const getAdmin = require("../controllers/adminController");

router.route("/").get(getAdmin);
// .post(createAdmin)
// .delete(removeAdmin)
// .patch(updateAdmin);

module.exports = router;

const { Router } = require("express");
const router = Router();
const getBlogController = require("../controllers/blogController");

router.route("/").get(getBlogController);
// .post(createAdmin)
// .delete(removeAdmin)
// .patch(updateAdmin);

module.exports = router;

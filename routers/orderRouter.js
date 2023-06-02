const { Router } = require("express");
const router = Router();
const getOrderController = require("../controllers/orderController");

router.route("/").get(getOrderController);
// .post(createAdmin)
// .delete(removeAdmin)
// .patch(updateAdmin);

module.exports = router;

const router = require('express').Router();
const controller = require('./controllers/controller');


router.get("/deliveries", controller.listDeliveries);
router.post("/deliveries", controller.createDeliveries );
router.delete("/deliveries/:id", controller.deleteDeliveries);

module.exports = router;
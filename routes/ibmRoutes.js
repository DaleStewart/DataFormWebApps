const express = require("express");
const router = express.Router();
const ibmController = require('../controllers/ibmController');

router.post('/', ibmController.postIntakeForm);
router.post('/confirmation', ibmController.postRequestForm);
module.exports = router;
const express = require("express");
const router = express.Router();
const ibmController = require('../controllers/ibmController');

router.post('/', ibmController.postForm);
module.exports = router;
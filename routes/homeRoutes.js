const express = require("express");
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.getIndex);
router.get('/index', homeController.getIndex);
router.get('/afterFormSubmission', homeController.getAfterForm)
module.exports = router;
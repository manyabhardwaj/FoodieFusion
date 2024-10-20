const express = require('express');
const router = express.Router();
const { getDishes } = require('../controllers/dishController');

router.get('/', getDishes); // GET request to fetch dishes

module.exports = router;

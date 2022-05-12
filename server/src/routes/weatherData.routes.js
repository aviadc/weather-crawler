const express = require('express');
const router = express.Router();
const { getWeatherDataBySearch } = require('../controllers/mainRouteControls');

router.get('/', getSongBySearch);

module.exports = router;
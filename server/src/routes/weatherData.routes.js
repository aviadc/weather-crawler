const express = require('express');
const router = express.Router();
const { getWeatherDataBySearch } = require('../controllers/weatherData.controllers');

router.get('/:location', getWeatherDataBySearch);

module.exports = router;
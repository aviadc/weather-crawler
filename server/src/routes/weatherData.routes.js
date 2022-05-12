const express = require('express');
const router = express.Router();
const { getWeatherDataBySearch } = require('../controllers/weatherData.controllers');

router.get('/', getWeatherDataBySearch);

module.exports = router;
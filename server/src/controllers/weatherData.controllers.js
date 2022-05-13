const getWeatherData = require('../utils/puppeteer');


const getWeatherDataBySearch = async (req, res) => {
    try {
        console.log(req.params);
        const data = await getWeatherData(req.params.location);
        // console.log('im here', data);
        res.send(data);
    } catch (err) {
        res.send(err.message);
    }
};

module.exports = { getWeatherDataBySearch };
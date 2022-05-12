const getWeatherData = require('../utils/puppeteer');


const getWeatherDataBySearch = async (req, res) => {
    try {
        console.log(req.body);
        const data = await getWeatherData('tel aviv');
        // console.log('im here', data);
        res.send(data);
    } catch (err) {
        res.send(err.message);
    }
};

module.exports = { getWeatherDataBySearch };
const getWeatherData = require('../utils/puppeteer');


const getWeatherDataBySearch = async (req, res) => {
    try {
        const { search } = req.body;
        const song = await Song.findOne({ song: search });
        if (song) return res.send(song);
        const songs = await Song.find({ artist: search });
        if (songs.length) return res.send(songs);
        /* puppteer part*/
        const details = await getSongDetails(search);
       
        res.send(newSong);
    } catch (e) {
        res.send(e.message);
    }
};

module.exports = { getSongBySearch };
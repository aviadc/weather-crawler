const express = require('express');
const cors = require('cors');

const weatherDataRoute = require('./src/routes/weatherData.routes')


const app = express();

app.use(cors());
app.use(express.json());

app.use(weatherDataRoute);

app.use(express.static(path.join(__dirname, '../client/build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', '../client/build/index.html'));
});



const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
  console.log(`server is up on PORT ${PORT}`)
})
import React, { useState } from 'react'
import weatherApi from '../../utils/api'
import WeatherCard from '../../WeatherCard';
import "./style.scss"

const Home = () => {

  const [location, setLocation] = useState('');
  const [weatherDetails, setWeatherDetails] = useState({});

  const getWeatherData = async (searchVal) => {
    try {
      const { data } = await weatherApi.get(`/${searchVal}`);
      setWeatherDetails({
        location: data.Location,
        temperature: data.temperature,
        humidity: data.Humidity,
        // windspeed: data.windspeed,
        imgUrl: data.imgUrl,
      })
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className='home-container'>
      <div className='home-inner-top'>
        <WeatherCard weatherDetails={weatherDetails} />
        {/* <WeatherCard weatherDetails={weatherDetails}/> */}
      </div>
      <div className='home-inner-body'>
        <input placeholder='enter location' onChange={(e) => setLocation(e.target.value)} />
        <button onClick={() => getWeatherData(location)}>Click Me!</button>
      </div>
    </div>
  )
}

export default Home
import React, { useState, useEffect } from 'react'
import weatherApi from '../utils/api'
import Spinner from '../Spinner'
import "./style.scss"

const WeatherCard = ({ location }) => {

  const [weatherDetails, setWeatherDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getWeatherData = async (searchVal) => {
      try {
        setIsLoading(true);
        const { data } = await weatherApi.get(`/${searchVal}`);
        setWeatherDetails({
          location: data.Location,
          temperature: data.temperature,
          humidity: data.Humidity,
          moreDetails: data.moreDetails,
          imgUrl: data.imgUrl,
        })
        console.log(data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    }
    getWeatherData(location);
  }, [location])

  return (
    <>
      <div className='card-container'>
        {(isLoading && <Spinner />) ||
          (weatherDetails &&
            <>
              <div className='card-top'>
                  <h3>{weatherDetails.temperature}</h3>
                  <h3>{weatherDetails.humidity}</h3>
                <img src={weatherDetails.imgUrl} alt="weather" />
              </div>
              {(weatherDetails.moreDetails).split("C").map((row)=>{
                return <h3 key={Math.random()}>{row}</h3> 
              })}
              <h3 className='location'>{weatherDetails.location}</h3>
            </>)
        }
      </div>
    </>
  )
}

export default WeatherCard
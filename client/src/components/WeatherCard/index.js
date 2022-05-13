import React from 'react'
import "./style.scss"

const WeatherCard = ({weatherDetails}) => {
  return (
    <div className='card-container'>
      <div className='card-top'>
        <h3>{weatherDetails.temperature}</h3>
        <img src={weatherDetails.imgUrl} alt="weather-image" />
      </div>
      <h3>{weatherDetails.humidity}</h3>
      {/* <h3>{weatherDetails.windspeed}</h3> */}
      <h3>{weatherDetails.location}</h3>
    </div>
  )
}

export default WeatherCard
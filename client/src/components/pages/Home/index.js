import React, { useState, useRef, useEffect } from 'react'
import WeatherCard from '../../WeatherCard';
import "./style.scss"

const Home = () => {

  const [location, setLocation] = useState(null);

  const inputRef = useRef();

  const handleClick = ()=>{
    setLocation(inputRef.current.value)
  }

  useEffect(()=>{
    inputRef.current.value = '';
  },[location])


  return (
    <div className='home-container'>
      <div className='home-top'>
        <h2>weather crawler</h2>
      </div>
      <div className='home-inner-top'>
        <WeatherCard location="tel aviv" />
        <WeatherCard location="manhattan" />
      </div>
      <div className='home-inner-body'>
        <div className='home-inner-body-top'>
          <input placeholder='enter location' ref={inputRef} />
          <button onClick={handleClick}>submit</button>
        </div>
        <h4>type specific location in order to get full weather details</h4>
        <div className='home-inner-body-bottom'>
          {location && <WeatherCard location={location} />}
        </div>
      </div>
    </div>
  )
}

export default Home
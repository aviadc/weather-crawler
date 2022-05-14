import React, { useState, useRef, useEffect } from 'react'
import WeatherCard from '../../WeatherCard';
import "./style.scss"

const Home = () => {

  const [location, setLocation] = useState(null);

  const inputRef = useRef();

  const handleClick = () => {
    setLocation(null)
    setLocation(null)
  }

  useEffect(() => {
    inputRef.current.value = '';
  }, [location])

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
          <button onClick={() => setLocation(inputRef.current.value)}>submit</button>
        </div>
        <div className='home-inner-body-bottom'>
          {location && <WeatherCard location={location} />}
        </div>
      </div>
    </div>
  )
}

export default Home
import React from 'react'
import weatherApi from '../../utils/api'

const Home = () => {
  const getWeatherData = async(searchVal)=>{
    try{
      const {data} = await weatherApi.get('/');
      console.log(data);
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div>
      <button onClick={()=>getWeatherData('tel aviv')}>Click Me!</button>
      </div>
  )
}

export default Home
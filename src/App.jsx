import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import imagenes from './assets/imagenes';

function App() {
  const [weather, setWeasther] = useState({});
  const [isCenti, setIscenti] = useState(true)
  const mainback=weather.weather?.[0].main
  console.log(mainback);
  const backgroundChange =()=>{
    if(mainback=='Thunderstorm'){
      document.body.style = `background-image: url(${imagenes?.[8]?.img9})`;
    }if(mainback=='Drizzle'){
      document.body.style = `background-image: url(${imagenes?.[1]?.img2})`;
    }if(mainback=='Rain'){
      document.body.style = `background-image: url(${imagenes?.[3]?.img4})`;
    }if(mainback=='Snow'){
      document.body.style = `background-image: url(${imagenes?.[5]?.img6})`;
    }if(mainback=='Atmosphere'){
      document.body.style = `background-image: url(${imagenes?.[4]?.img5})`;
    }if(mainback=='Clear'){
      document.body.style = `background-image: url(${imagenes?.[0]?.img1})`;
    }if(mainback=='Clouds'){
      document.body.style = `background-image: url(${imagenes?.[6]?.img7})`;
    }
  }

  useEffect(() => {
    const success = pos => {
      const latitud = pos.coords.latitude
      const longitud = pos.coords.longitude
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=1d2bedcc27588e5541e899d4d87c68da`)
        .then(res => setWeasther(res.data))
    }
    backgroundChange();
    navigator.geolocation.getCurrentPosition(success);
  }, [])
  {/*
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"
lo que esta en llaves es codigo dinamico y se debe llenar con ciertos pparametros  */}
  console.log(weather);
  let temp=weather.main?.temp
  const centi=Math.round((temp-273.15))
  const fharen=Math.round((centi*9/5)+32)
  console.log(fharen);
  console.log(imagenes);
  return (
    <div className="App">
      <h1>Wheather App</h1>
      <h2>{weather.name}.{weather.sys?.country} </h2>
      <div className='card'>
        <div className='imgcard'>

        <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="" />
        <div className='pharagraph' >

        <p>
          <b>
            <h4>Wind speed:</h4>{weather.wind?.speed} m/s
          </b>
        </p>
        
        <p>
          <b>
            <h4>Clouds:</h4>{weather.clouds?.all} %
          </b>
        </p>
        <p>
          <b>
            <h4>Pressure:</h4>{weather.main?.pressure} mb
          </b>
        </p>
        </div>
        </div>
        <h3 className='temp'>{isCenti? centi:fharen}{isCenti?"°C":"°F"}</h3>
      </div>
      
      
      <button onClick={() => setIscenti(!isCenti)}>
      °C / °F</button>
    </div>
  )
}

export default App

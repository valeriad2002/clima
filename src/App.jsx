import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import imagenes from './assets/imagenes';
import { Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HashLoader from "react-spinners/HashLoader";
import Looding from './assets/components/Looding';

function App() {
  const [loding, setLoding] = useState(false)

  useEffect(() => {
    setLoding(true)
    setTimeout(() => {
      setLoding(false)
    }, 5000)

    
  }, [])
  {/*
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"
lo que esta en llaves es codigo dinamico y se debe llenar con ciertos pparametros  */}
  
  return (
    <div className="App">
      {
        loding ?
        <HashLoader

            color={"#1edddde6"}
            loading={loding}
            size={150}
        />
        :
        <Looding/>
          
        
      }

    </div>
  )
}

export default App

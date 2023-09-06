import { useState, useRef, useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

import WeatherCard from "./components/WeatherCard";

function App() {
  const [cityName, setCityName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  const [data, setData] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        console.log("position: ", position);

        const response = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=3ccbbf01ea7148599c1154007220608&q=${position.coords.latitude},${position.coords.longitude}&aqi=no`
        );
        console.log("response: ", response.data);

        setCurrentWeather(response.data);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
    return () => {
      // socket.close();
    }
  }, []);

  const getWeather = async (event) => {
    event.preventDefault();

    // const cityName = document.querySelector("#cityName").value;
    // console.log(`getting weather of ${cityName}...`);
    // console.log(`getting weather of ${cityName}...`);
    console.log(`getting weather of ${inputRef.current.value}...`);

    try {
      setIsLoading(true);

      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=38a9ab72fa4044218e075627230807&q=${inputRef.current.value}&aqi=no`
        `https://api.weatherapi.com/v1/forecast.json?key=38a9ab72fa4044218e075627230807&q=${inputRef.current.value}&days=7&aqi=no&alerts=no`
      );
      console.log("response: ", response.data);

      setIsLoading(false);



      
      // setData([response.data, ...data]);
      setData((prev) => [response.data, ...prev]);

      event.target.reset();

      console.log(data);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };

  const changeHandler = (event) => {
    setCityName(event.target.value);
    // console.log("changeHandler: ", event.target.value);
  };

  return (
    <><div class="navbar">
      <div class="navbar-logo">
        <img src="./logo192.png" alt="logo" hieght="6%" width="6%"></img>
        <a href="#">Weather App</a>
      </div>
      <div class="navbar-menu">
        <ul>
          <li><a href="https://www.google.com/">Precipitation |</a></li>
          <li><a href="https://www.google.com/">Insights |</a></li>
          <li><a href="https://www.google.com/">Forecast |</a></li>
          <li><a href="https://www.google.com/">Overcast |</a></li>
          <li><a href="https://www.google.com/">3D Maps |</a></li>
          <li><a href="https://www.weatherapi.com/my/">Resource</a></li>

        </ul>
      </div>
    </div><div>
        <h1 align="center">Weather App</h1>

        <form onSubmit={getWeather}>
          <label htmlFor="cityName">City: </label>
          <input
            type="text"
            id="cityName"
            maxLength={20}
            minLength={2}
            required
            onChange={changeHandler}
            ref={inputRef} />
          <br />

          <button type="submit" class="submit-button"><i class="fas fa-search"></i>Get Weather</button>
        </form>

        <br />
        <hr />
        <br />

        {isLoading ? <div>Loading...</div> : null}
        {data.length || currentWeather ? null : <div>No Data</div>}

        {(data.length) ? (

          data.map((eachWeatherData, index) => <WeatherCard key={index} data={eachWeatherData} />)

        ) : null}

        {currentWeather && <WeatherCard data={currentWeather} />}
      </div></>
  );
}

export default App;
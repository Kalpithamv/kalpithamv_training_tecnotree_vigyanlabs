import React, { useState } from 'react';

const Weather = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const API_KEY = '2bc09c898973d33c3b585075829ee4c0';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric&exclude=current,minutely,hourly`;

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setWeather({
          city: data.name,
          country: data.sys.country,
          temperature: Math.round(data.main.temp),
          description: data.weather[0].description,
          feelsLike: Math.round(data.main.feels_like),
          humidity: data.main.humidity,
          wind: Math.round(data.wind.speed),
          sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
          sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
        });
        setQuery('');
      })
      .catch((err) => console.log(err));
  };

  return (
    <center>
    <div className="weather-container">
      <form onSubmit={handleSearch} className="weather-form">
        <input
          type="text"
          placeholder="Enter city name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="weather-input"
        /><br></br>
        <button type="submit" className="weather-button">
          Search
        </button>
      </form>

      {weather.city && (
        <div className="weather-info">
          <h2 className="weather-city">
            {weather.city}, {weather.country}
          </h2>
          <div className="weather-temp">{weather.temperature}&deg;C</div>
          <p className="weather-description">{weather.description}</p>
          <div className="weather-details">
            <p className="weather-feels-like">
              Feels like: {weather.feelsLike}&deg;C
            </p>
            <p className="weather-humidity">Humidity: {weather.humidity}%</p><br></br>
            <p className="weather-wind">Wind: {weather.wind} km/h</p>
            
          </div>
        </div>
      )}
    </div>
    </center>
  );
};

export default Weather
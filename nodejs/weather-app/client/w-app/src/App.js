import { useState } from 'react';
import axios from 'axios';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `http://localhost:4000/weather/${location.lat}/${location.lon}`;
    try {
      const response = await axios.get(url);
      const data = response.data;
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLocation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Latitude:
          <input type="text" name="lat" onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Longitude:
          <input type="text" name="lon" onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Get Weather</button>
     </form>
     </div>
  )
}

export default App;
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

const API_KEY = '0ec137a97bcb3f90aedd68cebc125f9c';

app.get('/weather/:lat/:lon', async (req, res) => {
  const { lat, lon } = req.params;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  try {
    const response = await axios.get(url);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.log(error);h
  }
});

app.listen(4000, () => console.log('Server running on port 4000'));
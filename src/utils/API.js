import axios from 'axios';
const weatherBitKey = process.env.REACT_APP_WEATHERBIT_KEY;
// const geocodingKey = `AIzaSyC6HzREB1jogrz8EDUPXvYflDxAi5sKpHE`;
const geocodingKey = process.env.REACT_APP_GEOCODING_KEY;

export default {
  getWeather(location) { 
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${geocodingKey}`)
      .then(res => {
        const { lat, lng } = res.data.results[0].geometry.location;
        return axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${weatherBitKey}&days=7&units=I`)
      })
      .catch(err => console.log(err))
  }
}
import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather'
// Had to generate my own API key 
const API_KEY = '64891ad2e52c5d38ef0ae335accfbb01'

export const fetchWeather = async (query) => {
    const data = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    })
    return data
}

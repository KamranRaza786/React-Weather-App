import fetch from 'node-fetch';

const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';
const WEATHER_API_KEY = '53134ec34f2670fa380d439f0f7813b4';

export async function fetchWeatherDataByCoordinates(latitude, longitude) {
  try {
    const response = await fetch(
      `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error('Request failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error.message);
    throw new Error('Error fetching weather data');
  }
}

export async function fetchWeatherDataByCityAndCountry(city, country) {
  try {
    const response = await fetch(
      `${WEATHER_API_URL}/weather?q=${city},${country}&appid=${WEATHER_API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error('Request failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}

// You can implement the fetchWeatherData and fetchCities functions based on your requirements
export async function fetchWeatherData(cityName) {
  // Implement this function
}

export async function fetchCities(input) {
  // Implement this function
}

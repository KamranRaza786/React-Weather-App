// OpenWeatherService.js
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';
const WEATHER_API_KEY = '53134ec34f2670fa380d439f0f7813b4'; // Replace with your actual API key

export async function fetchWeatherDataByCoordinates(lat, lon) {
  try {
    const response = await fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error('Request failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error:', error.message);
    throw error;
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
    console.log('Error:', error.message);
    throw error;
  }
}

export async function fetchCities(input) {
  // Implementation here
}

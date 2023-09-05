const API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_API_KEY;

export const directGeocoding = async (location) => {
  const res = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=3&appid=${API_KEY}`
  );
  const data = await res.json();
  return data;
};

export const fetchWeather = async (lat, lon) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
  const data = await res.json();
  const info = {
    name: data.name,
    country: data.sys.country,
    temp: data.main.temp,
    feels_like: data.main.feels_like,
    temp_min: data.main.temp_min,
    temp_max: data.main.temp_max,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    wind: data.wind.speed,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    description: data.weather[0].description,
    main: data.weather[0].main,
    icon: data.weather[0].icon,
    timezone: data.timezone,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
  }
  return info;
};

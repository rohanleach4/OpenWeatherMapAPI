import React, { useState, useEffect } from "react";
import axios from "axios";

type WeatherData = {
  description: string;
  temperature: number;
  temp_max: number;
  temp_min: number;
  feels_like: number;
  sunrise: string;
  sunset: string;
  cityname: string;
};

const WeatherApp: React.FC = () => {
  const [location, setLocation] = useState("London");
  const [inputValue, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const fetchWeather = async (location: string) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
    );
    // console.log(response.data); // console log the data to see what it looks like - left here for reference
    const data = response.data;
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
    const cityname = data.name;

    setWeatherData({
      description: data.weather[0].description,
      temperature: data.main.temp,
      temp_max: data.main.temp_max,
      temp_min: data.main.temp_min,
      feels_like: data.main.feels_like,
      sunrise,
      sunset,
      cityname,
    });
  };

  useEffect(() => {
    fetchWeather(location);
  }, [location]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLocation(inputValue);
  };

  const handleButtonClick = (city: string) => {
    fetchWeather(city);
  };

  return (
    <>
      <main>
        <section>
          {weatherData && (
            <div>
              <p>
                {weatherData.cityname} weather: {weatherData.description}
              </p>
              <p>
                Temperature: {weatherData.temperature}°C, but it feels like:{" "}
                {weatherData.feels_like}°C
              </p>
              <p>
                Min temperature: {weatherData.temp_min}°C, Max temperature:{" "}
                {weatherData.temp_max}°C
              </p>
              <p>
                Sunrise: {weatherData.sunrise} | Sunset: {weatherData.sunset}
              </p>
            </div>
          )}
        </section>

        <section className="button-holder">
          <button onClick={() => handleButtonClick("London")}>London</button>
          <button onClick={() => handleButtonClick("Dublin")}>Dublin</button>
          <button onClick={() => handleButtonClick("Exeter")}>Exeter</button>
          <button onClick={() => handleButtonClick("Cardiff")}>Cardiff</button>
        </section>

        <section>
          <p>Additional locations:</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="Enter location"
            />
            <button type="submit">Get Weather</button>
          </form>
        </section>
      </main>
    </>
  );
};

export default WeatherApp;

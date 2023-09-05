'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Welcome from "./components/welcome/welcome";
import WeatherCard from "./components/weatherCard/weatherCard";
import LocationSearch from "./components/locationSearch/locationSearch";
import { directGeocoding, fetchWeather } from "./api/api";
import AdditionalInfoCard from "./components/addittionalInfoCard/additionalInfoCard";

const Home = () => {
  const [location, setLocation] = useState("");
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);

  const fetchForecast = async () => {
    setLocation("");
    setError(null);
    setForecast(null);
    setLoading(true);
    try {
      const city = await directGeocoding(location);
      const weatherData = await fetchWeather(city[0].lat, city[0].lon);
      console.log(weatherData);
      setForecast(weatherData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (location) {
      const handleSuggestions = async () => {
        try {
          const city = await directGeocoding(location);
          const reducedCity = city.reduce((acc, curr) => {
            const { name, state, country } = curr;
            acc.push({ name, state, country });
            return acc;
          }, []);
          setSuggestions(reducedCity);
        } catch (error) {
          setError(error);
        }
      }
      handleSuggestions();
    }
  }, [location]);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <a href="/" rel="noopener noreferrer">
            <Image
              className={styles.logo}
              src="/logo.svg"
              alt="typeWeather logo"
              width={180}
              height={37}
              priority
            />
          </a>
          
        </div>
      </div>
      <div className={styles.center}>
      {!forecast && <Welcome />}
      <LocationSearch
        location={location}
        setLocation={setLocation}
        suggestions={suggestions}
        loading={loading}
        fetchForecast={fetchForecast}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      {error && <p className={styles.paragraphError}>The location you entered is not valid</p>}
      {forecast && <>
        <WeatherCard forecast={forecast} />
        <AdditionalInfoCard forecast={forecast} />
      </>}
      </div>
      <div><p className={styles.paragraph}>© 2023 built with 💙 by Mimmo</p></div>
    </main>
  );
}

export default Home;

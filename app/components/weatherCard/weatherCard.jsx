import React, { useEffect, useState } from "react";
import styles from "./weatherCard.module.css";
import unitConverter from "@/app/utils/unitConverter";
import getWeatherAssets from "@/app/utils/getWeatherAssets";
import Image from "next/image";
import { dateAndTimeConverter } from "@/app/utils/dateAndTimeConverter";

const WeatherCard = ({ forecast }) => {
  const {
    name,
    country,
    temp,
    temp_min,
    temp_max,
    description,
    main,
    timezone,
    sunrise,
    sunset,
  } = forecast;

  const date = new Date();
  
  const [time, setTime] = useState("");
  const { bg, icon } = getWeatherAssets(main, sunrise, sunset);

  const celsiusTemp = unitConverter(temp, "K", "C");
  const celsiusMinTemp = unitConverter(temp_min, "K", "C");
  const celsiusMaxTemp = unitConverter(temp_max, "K", "C");
  
  useEffect(() => {
    const time = dateAndTimeConverter(timezone);
    setTime(time)
  }, []);

  return (
    <div 
      className={styles.card} 
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles.cardHeader}>
        <div>
          <h5 className={styles.cardTitle}>
            {name}, {country}
          </h5>
          <p className={styles.cardText}>
           {date.toLocaleString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <div>{time}</div>
      </div>
      <div className={styles.cardBody}>
        <div>
          <div className={styles.cardLineItem}>
            <p className={styles.textLg}>{celsiusTemp}°C</p>
          </div>
          <div className={styles.cardLineItem}>
            <p className={styles.textSm}>
              {celsiusMinTemp}°C / {celsiusMaxTemp}°C
            </p>
          </div>
          <div className={styles.cardLineItem}>
            <p className={styles.textSm}>{description}</p>
          </div>
        </div>
        <div>
          <Image src={icon} width={150} height={150} alt="" aria-hidden={true} />
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

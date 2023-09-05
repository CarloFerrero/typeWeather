import React from "react";
import styles from "../../page.module.css";

const Welcome = () => {
  return (
    <>
      <h2>
        Welcome to <span className={styles.blue}>TypeWeather</span>
      </h2>
      <p className={styles.paragraph}>Choose a location to see the weather forecast</p>
    </>
  );
};

export default Welcome;

import React from "react";
import styles from "./additionalInfoCard.module.css";
import WeatherAttribute from "./weatherAttribute";
import { attributes } from "@/app/utils/attributesWeather";

const AdditionalInfoCard = ({ forecast }) => (
  <div className={styles.adCard}>
    {attributes.map((attribute, i) => (
      <div 
      key={i}
      style={{ 
        width: '100%', 
        borderBottom: i === attributes.length - 1 ? "none" : "1px solid var(--gray400)",
        paddingBottom: i === attributes.length - 1 ? "none" : "15px", 
        paddingTop: i === 0 ? "none" : "15px"
      }}>
        <WeatherAttribute
          key={attribute.key}
          attribute={attribute}
          value={forecast[attribute.key]}
        />
      </div>
    ))}
  </div>
);

export default AdditionalInfoCard;

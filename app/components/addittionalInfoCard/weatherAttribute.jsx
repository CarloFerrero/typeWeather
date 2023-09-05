import styles from "./additionalInfoCard.module.css";
import unitConverter from "@/app/utils/unitConverter";
import Image from "next/image";

const WeatherAttribute = ({ attribute, value }) => {
    return (
        <div className={styles.adLineItem}>
            <div className={styles.itemWrapper}>
                <Image src={attribute.icon} alt={attribute.name} width={20} height={20} />
                <p className={styles.item}>{attribute.name}</p>
            </div>
            <p>{attribute.key === "feels_like" ? unitConverter(value, attribute.unit, attribute.label) : `${value} ${attribute.unit}`}</p>
        </div>
    )
};

export default WeatherAttribute
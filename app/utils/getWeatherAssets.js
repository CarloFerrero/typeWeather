const getWeatherAssets = (type, sunrise, sunset) => {
    const DAY = (Date.now() > sunrise * 1000 && Date.now() < sunset * 1000) ? 'day' : 'night';
    switch (type) {
        case 'Clouds':
        return {bg: `/images/clouds-${DAY}.png`, icon: `/icons/clouds-${DAY}.svg`};
        case 'Thunderstorm':
        return {bg: `/images/thunderstorm-${DAY}.png`, icon: `/icons/thunderstorm-${DAY}.svg`};
        case 'Drizzle':
        return {bg: `/images/drizzle-${DAY}.png`, icon: `/icons/drizzle-${DAY}.svg`};
        case 'Rain':
        return {bg: `/images/rain-${DAY}.png`, icon: `/icons/rain-${DAY}.svg`};
        case 'Snow':
        return {bg: `/images/snow-${DAY}.png`, icon: `/icons/snow-${DAY}.svg`};
        case 'Clear':
        return {bg: `/images/clear-${DAY}.png`, icon: `/icons/clear-${DAY}.svg`};
        default:
        return {bg: `/images/clear-${DAY}.png`, icon: `/icons/clear-${DAY}.svg`};
    }
}

export default getWeatherAssets;
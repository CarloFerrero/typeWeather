const unitConverter = (temperature, unit, unitToConvertTo) => {
  switch (unit) {
    case "C":
      if (unitToConvertTo === "F") {
        return Math.trunc((temperature * 9) / 5 + 32);
      } else if (unitToConvertTo === "K") {
        return Math.trunc(temperature + 273.15);
      } else {
        return Math.trunc(temperature);
      }
    case "F":
      if (unitToConvertTo === "C") {
        return Math.trunc(((temperature - 32) * 5) / 9);
      } else if (unitToConvertTo === "K") {
        return Math.trunc(((temperature - 32) * 5) / 9 + 273.15);
      } else {
        return Math.trunc(temperature);
      }
    case "K":
      if (unitToConvertTo === "C") {
        return Math.trunc(temperature - 273.15);
      } else if (unitToConvertTo === "F") {
        return Math.trunc(((temperature - 273.15) * 9) / 5 + 32);
      } else {
        return Math.trunc(temperature);
      }
    default:
      return Math.trunc(temperature);
  }
};

export default unitConverter;

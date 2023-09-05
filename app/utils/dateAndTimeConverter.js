
export const dateAndTimeConverter = (timezone) => {
    const date = new Date();
    const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
    const localTime = utcTime + (timezone * 1000);
    const localDate = new Date(localTime);
    const hours = localDate.getHours();
    const minutes = localDate.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const time = `${hours}:${minutes} ${ampm}`;
    return time;
}
export function timeFormat(timestamp) {
    const date = new Date(timestamp);
    const hour = date.getHours();
    const minute = date.getMinutes();

    const formattedHour = hour < 10 ? '0' + hour : hour;
    const formattedMinute = minute < 10 ? '0' + minute : minute;

    return `${formattedHour}:${formattedMinute}`;
}
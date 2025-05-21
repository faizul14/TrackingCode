// FMP Track Coding Chalenge 2025
// Day 36/365
// https://www.codewars.com/kata/52685f7382004e774f0001f7/

const secondUpdate = (s, minus) => {
    return Math.floor(s - minus)
}
const formatTime = (data) => {
    return data.length < 2 ? `0${data}` : data
}
function humanReadable(seconds) {
    if (seconds === 0) return '00:00:00'
    const divisor = {
        hours: 3600,
        minutes: 60,
        seconds: 6
    }
    let [hours, minute, second] = [0, 0, 0]
    hours = seconds < divisor.hours ? 0 : Math.floor(seconds / divisor.hours)
    seconds = hours !== 0 ? secondUpdate(seconds, (hours * divisor.hours)) : seconds
    minute = seconds < divisor.minutes ? 0 : Math.floor(seconds / divisor.minutes)
    seconds = minute !== 0 ? secondUpdate(seconds, (minute * divisor.minutes)) : seconds
    second = seconds

    return `${formatTime(hours.toString())}:${formatTime(minute.toString())}:${formatTime(second.toString())}`;
}


console.log(
    // humanReadable(85400),
    // humanReadable(3599),
    // humanReadable(45296),
    // humanReadable(86399)
    humanReadable(59)
);

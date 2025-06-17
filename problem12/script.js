const fs = require('fs');

fs.readFile('inp.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log("error: " + err);
        return;
    }
    ProcessData(data);
});
var collector = [];
function ProcessData(data) {
    const lines = data.trim().split("\n");
    const lineCount = parseInt(lines[0], 10);
    
    for (let i = 1; i <= lineCount; ++i) {
        const [day1, hour1, min1, sec1, day2, hour2, min2, sec2] = lines[i].split(' ').map(Number);
        const startInSeconds = convertToSeconds(day1, hour1, min1, sec1);
        const endInSeconds = convertToSeconds(day2, hour2, min2, sec2);
        const diffInSeconds = endInSeconds - startInSeconds;
        const result = convertFromSeconds(diffInSeconds);
        collector.push(result);
    }
    console.log(collector.join(' '));
}

function convertToSeconds(day, hour, minute, second) {
    return second + minute * 60 + hour * 3600 + (day - 1) * 86400;
}

function convertFromSeconds(totalSeconds) {
    const days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `(${days} ${hours} ${minutes} ${seconds})`;
}

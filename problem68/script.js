const fs = require('fs');

fs.readFile('inp.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(`Error: ${err}`);
        return;
    }
    processData(data);
});

function processData(data) {
    const lines = data.trim().split('\n');
    const testCount = parseInt(lines[0]);
    const output = [];

    for (let i = 1; i <= testCount; i++) {
        const [S, A, B] = lines[i].split(" ").map(Number);
        const meetingPoint = (A / (A + B)) * S;
        output.push(meetingPoint.toFixed(10));
    }

    console.log(output.join(" "));
}

const fs = require('fs');

fs.readFile('inp.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(`error: ${err}`);
        return;
    }
    processData(data);
});

var results = [];

function processData(data) {
    const lines = data.trim().split('\n');
    const lineCount = parseInt(lines[0], 10);

    for (let i = 1; i <= lineCount; i++) {
        const [x1, y1, x2, y2] = lines[i].split(' ').map(Number);
        calculateLinear(x1, y1, x2, y2);
    }

    logResults();
}

function calculateLinear(x1, y1, x2, y2) {
    const a = (y2 - y1) / (x2 - x1);
    const b = y1 - a * x1;
    results.push(`(${a} ${b})`);
}

function logResults() {
    console.log(results.join(' '));
}

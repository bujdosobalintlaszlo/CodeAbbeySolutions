const { exec } = require('child_process');

function openWiki() {
    exec('start https://en.wikipedia.org/wiki/Josephus_problem', (err, stdout, stderr) => {
        if (err) {
            console.error(`Error opening Wikipedia: ${err}`);
            return;
        }
        console.log(`Opened Wikipedia`);
    });
}
const userInput = process.argv[2];
if (userInput && userInput.toLowerCase() === 'wiki') {
    openWiki();
} else {
    const fs = require('fs');

fs.readFile('inp.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(`Error reading file: ${err}`);
        return;
    }
    processData(data);
});

async function processData(data) {
    var values = data.trim().split(' ').map(Number);
    var result = josephus(values[0], values[1]);
    var cliboardy = await import('clipboardy');
    cliboardy.default.writeSync(String(result));
    console.log('Kesz!');
}

function josephus(N, K) {
    if (N === 1) {
        return 1;
    } else {
        return (josephus(N - 1, K) + K - 1) % N + 1;
    }
}
}

const fs = require('fs');

fs.readFile('inp.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(`Err.:${err}`);
        return;
    }
    processData(data);
});

async function processData(input) {
    let lines = input.trim().split('\n');
    let testCases = parseInt(lines[0]);
    let results = [];

    for (let i = 1; i <= testCases; i++) {
        let [num1, num2] = lines[i].split(' ').map(Number);
        results.push(((num1 % 6) + 1) +((num2 % 6) + 1));
    }
    const clipboardy = await import('clipboardy');
    clipboardy.default.writeSync(results.join(' '));
    console.log("Kesz!");
}

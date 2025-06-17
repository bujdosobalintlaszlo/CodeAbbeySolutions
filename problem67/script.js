const fs = require('fs');

fs.readFile('inp.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(`Error: ${err}`);
        return;
    }
    processData(data);
});

async function processData(data) {
    const lines = data.trim().split('\n');
    const count = parseInt(lines[0], 10);
    const fibNumbers = lines.slice(1, count + 1).map(BigInt);
    
    const fibIndexMap = generateFibonacciIndexMap(1000);

    const result = fibNumbers.map(num => fibIndexMap[num]).join(' ');
    const clipboardy = await import('clipboardy');
    clipboardy.default.writeSync(result);
    console.log("Kesz!");
}

function generateFibonacciIndexMap(limit) {
    const fibIndexMap = {};
    let a = 0n, b = 1n;

    for (let i = 0; i < limit; i++) {
        if (i === 0) {
            fibIndexMap[a] = i;
        } else if (i === 1) {
            fibIndexMap[b] = i;
        } else {
            const next = a + b;
            a = b;
            b = next;
            fibIndexMap[next] = i;
        }
    }

    return fibIndexMap;
}

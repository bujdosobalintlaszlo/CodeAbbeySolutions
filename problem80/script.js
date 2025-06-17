const fs = require('fs');

fs.readFile('inp.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    processData(data);
});

async function processData(data) {
    const lines = data.trim().split('\n');
    const numCases = parseInt(lines[0]);
    const results = [];
    for (let i = 1; i <= numCases; i++) {
        const [pA, pB] = lines[i].split(' ').map(Number);
        const result = calculateWinProbability(pA, pB);
        results.push(result);
    }
    var clipboardy = await import('clipboardy');
    clipboardy.default.writeSync(results.join(' '));
}

function calculateWinProbability(pA, pB) {
    pA /= 100;
    pB /= 100;
    if (pA === 1) {
        return 100; 
    }
    if (pB === 1) {
        return 0;
    }
    const PA = pA / (1 - (1 - pA) * (1 - pB));
    return Math.round(PA * 100);
}

const fs = require('fs');

fs.readFile('inp.txt', 'utf8', async (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    await ProcessData(data);
});

async function ProcessData(data) {
    const lines = data.trim().split('\n');
    const testCaseCount = parseInt(lines[0], 10);
    let results = [];

    for (let i = 1; i <= testCaseCount; i++) {
        const [X, N] = lines[i].split(' ').map(Number);
        results.push(SquareRoot(X, N));
    }

    const resultString = results.join(' ');
    console.log(resultString);

    //vagolapra
    const clipboardy = await import('clipboardy');
    clipboardy.default.writeSync(resultString);
}

function SquareRoot(X, N) {
    let r = 1;
    for (let i = 0; i < N; i++) {
        r = (r + X / r) / 2;
    }
    return parseFloat(r.toFixed(7));
}

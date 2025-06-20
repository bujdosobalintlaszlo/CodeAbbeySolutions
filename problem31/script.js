const fs = require('fs');

fs.readFile('inp.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(`Err.: ${err}`);
        return;
    }
    processData(data);
});

async function processData(input) {
    const lines = input.split('\n').map(x => x.trim()).filter(x => x);
    RotateItems(lines);
}

function RotateItems(lines) {
    const lineCount = parseInt(lines[0], 10);
    const result = [];

    for (let i = 1; i <= lineCount; ++i) {
        if (lines[i] !== undefined) {
            const [kStr, s] = lines[i].split(" ");
            const k = parseInt(kStr, 10);
            result.push(rotate(s, k));
        }
    }

    console.log(result.join(" "));
}

function rotate(s, k) {
    const len = s.length;
    k = ((k % len) + len) % len;

    return s.slice(k) + s.slice(0, k);
}


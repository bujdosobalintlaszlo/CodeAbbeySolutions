const { Console } = require('console');
const fs = require('fs');

fs.readFile('inp.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(`Error: ${err}`);
        return;
    }
    processData(data);
});

function processData(input) {
    const lines = input.trim().split('\n');
    const n = parseInt(lines[0].trim());
    const integers = lines[1].trim().split(' ').map(Number);
    const results = [];
    for (let i = 0; i < n; i++) {
        let count = countNonZeroBits(integers[i]);
        results.push(count);
    }
    ToClipBoard(results.join(' '));
}
function countNonZeroBits(num) {
    num = num >>> 0;
    let binary = num.toString(2);
    binary = binary.padStart(32, '0');
    let count = 0;
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '1') {
            count++;
        }
    }
    return count;
}

async function ToClipBoard(str){
    const clipboardy = await import('clipboardy');
    clipboardy.default.writeSync(str);
    console.log("kesz!");
}
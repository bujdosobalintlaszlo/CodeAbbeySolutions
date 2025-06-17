const fs = require('fs');
fs.readFile('inp.txt','utf8',(err,data)=>{
    if(err){
        console.log(`Err.:${err}`);
        return;
    }
    processData(data);
});

async function processData(input) {
    const lines = input.trim().split('\n');
    const count = parseInt(lines[0]);
    const initialValues = lines[1].split(' ').map(Number);
    const results = initialValues.map(findLoopIterations);
    const clipboardy = await import('clipboardy');
    clipboardy.default.writeSync(results.join(' '));
    console.log("kesz");
}

function findLoopIterations(initial) {
    let current = initial, seen = new Set(), iterations = 0;
    while (!seen.has(current)) {
        seen.add(current);
        iterations++;
        current = getNextValue(current);
    }
    return iterations;
}

function getNextValue(num) {
    let squared = num * num;
    let padded = ('00000000' + squared).slice(-8);
    return parseInt(padded.substring(2, 6));
}
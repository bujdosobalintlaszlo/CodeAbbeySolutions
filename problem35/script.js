const fs = require('fs');

fs.readFile('inp.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(`Err.:${err}`);
        return;
    }
    ProcessData(data);
});

var lineCount = 0;
async function ProcessData(data) {
    var temp = data.split('\n');
    lineCount = parseInt(temp[0]);
    var results = [];
    for (let i = 1; i < lineCount + 1; ++i) {
        var vals = temp[i].split(' ').map(Number);
        results.push(SavingsCalculator(vals[0], vals[1], vals[2]));
    }
    const clipboardy = await import('clipboardy');
    clipboardy.default.writeSync(results.join(' '));
    console.log("Kesz!");
}

function SavingsCalculator(S, R, P) {
    var yearCount = 0;
    var money = S;
    while (money < R) {
        money = money * (1 + P / 100);
        money = Math.floor(money * 100) / 100;
        yearCount++;
    }
    return yearCount;
}

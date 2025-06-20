const fs = require('fs');

fs.readFile('inp.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(`Err: ${err}`);
        return;
    }
    processData(data);
});

function checkSum(data) {
    let result = 0;
    for (let i = 0; i < data.length; i++) {
        result += data[i];
        result *= 113;
        result %= 10000007;
    }
    return result;
}

function processData(data) {
    const input = data.trim().split(/\s+/).map(Number)
    const numbers = input.slice(0, input.indexOf(-1))
    let swapCount = 0;

    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] > numbers[i + 1]) {
            [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
            swapCount++;
        }
    }

    console.log(`${swapCount} ${checkSum(numbers)}`)
}

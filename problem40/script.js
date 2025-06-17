const fs = require('fs');

fs.readFile('inp.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(`Error:${err}`);
        return;
    }
    createMatrix(data);
});

let x = 0;
let y = 0;
let matrix = [];

function createMatrix(data) {
    const arr = data.split('\n');
    x = parseInt(arr[0].split(' ')[0]);
    y = parseInt(arr[0].split(' ')[1]);

    for (let i = 1; i < arr.length; ++i) {
        const row = arr[i].trim().split(' ');
        matrix.push(row);
    }

    console.log(findWays());
}

function findWays() {
    const dp = new Array(x).fill(0).map(() => new Array(y).fill(0));
    dp[0][0] = 1;

    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            if (matrix[i][j] === 'X') {
                dp[i][j] = 0;
                continue;
            }
            if (i > 0) {
                dp[i][j] += dp[i - 1][j];
            }
            if (j > 0) {
                dp[i][j] += dp[i][j - 1];
            }
        }
    }
    return dp[x - 1][y - 1];
}

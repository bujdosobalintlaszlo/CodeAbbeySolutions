const fs = require('fs');

fs.readFile('inp.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(`Error: ${err}`);
        return;
    }
    processData(data);
});

function processData(data) {
    const lines = data.trim().split('\n');
    const T = parseInt(lines[0], 10);
    const results = [];

    for (let i = 1; i <= T; ++i) {
        const currentWord = lines[i].trim();
        const lcsLength = longestCommonSubsequence(currentWord, currentWord.split('').reverse().join(''));
        results.push(lcsLength);
    }

    console.log(results.join(' '));
}

function longestCommonSubsequence(s1, s2) {
    const m = s1.length;
    const n = s2.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; ++i) {
        for (let j = 1; j <= n; ++j) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
}

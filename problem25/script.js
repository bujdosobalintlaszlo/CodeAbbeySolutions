const fs = require('fs');

fs.readFile("inp.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    processData(data);
});

function processData(data) {
    const splitData = data.trim().split('\n');
    const lineCount = parseInt(splitData[0]);
    const results = [];

    for (let i = 1; i <= lineCount; i++) {
        const [A, C, M, X0, N] = splitData[i].split(" ").map(Number);
        let X = X0;

        for (let j = 0; j < N; j++) {
            X = (A * X + C) % M;
        }

        results.push(X);
    }

    console.log(results.join(" "));
}

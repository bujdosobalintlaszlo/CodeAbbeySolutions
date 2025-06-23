const fs = require('fs');

fs.readFile('inp.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(`Err.: ${err}`);
        return;
    }
    processData(data);
});

function processData(data) {
    let dataSplit = data.split("\n").map(x => x.trim()).filter(Boolean);
    let testCaseCount = parseInt(dataSplit[0]);
    let results = [];

    for (let i = 1; i <= testCaseCount; ++i) {
        let [X, Y, N] = dataSplit[i].split(" ").map(Number);
        let result = MinPrintTime(X, Y, N);
        results.push(result);
    }

    console.log(results.join(" "));
}

function MinPrintTime(X, Y, N) {
    let low = 0;
    let high = N * Math.min(X, Y);
    let answer = high;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let printed = Math.floor(mid / X) + Math.floor(mid / Y);
        if (printed >= N) {
            answer = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return answer;
}

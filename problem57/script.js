const fs = require("fs");

fs.readFile("inp.txt", "utf-8", (err, data) => {
    if (err) {
        console.error(`Error: ${err}`);
        return;
    }
    processData(data);
});

function processData(data){
    let splitData = data.trim().split("\n");
    let itemCount = parseInt(splitData[0]);
    let dataStream = splitData[1].trim().split(" ").map(x => parseFloat(x));
    Smoothing(itemCount, dataStream);
}

function Smoothing(itemCount, dataStream){
    let vals = [];

    for (let i = 0; i < itemCount; i++) {
        if (i === 0 || i === itemCount - 1) {
            vals.push(dataStream[i].toFixed(10));
        } else {
            let avg = (dataStream[i - 1] + dataStream[i] + dataStream[i + 1]) / 3;
            vals.push(avg.toFixed(10));
        }
    }

    console.log(vals.join(" "));
}

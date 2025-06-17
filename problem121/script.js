const fs = require('fs');

fs.readFile('inp.txt', 'utf8', (err, inp) => {
    if (err) {
        console.log(err);
        return;
    }
    processData(inp);
});

function processData(inp) {
    var data = inp.split('\n');
    insertionSort(data[1].split(' ').map(Number));
}

function insertionSort(arr) {
    let shifts = [];
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        let shiftCount = 0;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
            shiftCount++;
        }
        arr[j + 1] = key;
        
        shifts.push(shiftCount);
    }
    ToClipBoard(shifts.join(' '));
}

async function ToClipBoard(str){
    const clipboardy = await import('clipboardy');
    clipboardy.default.writeSync(str);
}

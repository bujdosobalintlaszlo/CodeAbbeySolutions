const fs = require('fs');

fs.readFile('inp.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(`error: ${err}`);
        return;
    }
    dataProcess(data);
});

let arrSize = 0;
let array = [];
let indexArr = [];

function dataProcess(data) {
    const temp = data.split('\n');
    arrSize = parseInt(temp[0]);
    array = temp[1].split(' ').map(Number);
    selectionSort();
}

function selectionSort() {
    for (let i = arrSize - 1; i > 0; i--) {
        let maxIndex = 0;
        for (let j = 1; j <= i; j++) {
            if (array[j] > array[maxIndex]) {
                maxIndex = j;
            }
        }
        indexArr.push(maxIndex);
        let temp = array[maxIndex];
        array[maxIndex] = array[i];
        array[i] = temp;
    }
    console.log(indexArr.join(' '));
}

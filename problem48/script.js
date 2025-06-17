const fs = require('fs');

fs.readFile('inp.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    ProcessFile(data);
    console.log(steps.join(' '));
});
var steps = [];
function ProcessFile(data) {
    let lines = data.split('\n').slice(1);
    let numbers = lines.join(' ').split(' ').map(Number);
    numbers.forEach(x => {
        var step = 0;
        while (x != 1) {
            if (x % 2 == 0) {
                x = x / 2;
            } else {
                x = 3 * x + 1;
            }
            step++;
        }
        steps.push(step);
    });
}

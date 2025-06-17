const fs = require('fs');

fs.readFile('inp.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(`error: ${err}`);
        return;
    }
    processData(data);
});

var lineCount = 0;
var shift = 0;
var sentences = [];

function processData(data) {
    var temp = data.split('\n');
    var vals = temp[0].split(' ');
    lineCount = parseInt(vals[0], 10);
    shift = parseInt(vals[1], 10);

    for (var i = 1; i < temp.length; i++) {
        if (temp[i].trim() !== "") {
            sentences.push(temp[i].trim());
        }
    }
    CaesarShiftCipher();
}

var results = [];
function CaesarShiftCipher() {
    sentences.forEach(sentence => {
        var temp = "";
        for (var i = 0; i < sentence.length; ++i) {
            var char = sentence[i];
            if (char === ' ' || char === '.') {
                temp += char;
            } else {
                var newCharCode = ((char.charCodeAt(0) - 'A'.charCodeAt(0) - shift) % 26);
                if (newCharCode < 0) newCharCode += 26;
                temp += String.fromCharCode(newCharCode + 'A'.charCodeAt(0));
            }
        }
        results.push(temp);
    });
    console.log(results.join(' '));
}

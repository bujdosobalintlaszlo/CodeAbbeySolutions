const fs = require('fs');

fs.readFile('inp.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    ProcessFile(data);
});

var inline = 0;
var typeCount = 0;
var lines = [];
var counter = [];

function ProcessFile(data){
    let dataarr = data.split('\n');
    inline = parseInt(dataarr[0].split(' ')[0]);
    typeCount = parseInt(dataarr[0].split(' ')[1]);
    lines = dataarr[1].split(' ').map(Number);
    CountItems();
}

function CountItems(){
    var target = 1;
    while(target <= typeCount)
    {
        var temp = 0;
        for(var i = 0; i < lines.length; ++i){
            if(lines[i] === target){
                temp++;
                lines.splice(i, 1);
                i--;
            }
        }
        counter.push(temp);
        target++;
    } 
    console.log(counter.join('  '));
}

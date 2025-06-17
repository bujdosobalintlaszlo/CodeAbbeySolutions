const fs = require('fs');
fs.readFile('inp.txt','utf8',(err,inp)=>{
    if(err){
        console.log(err);
    }
    processData(inp);
});

function processData(inp){
    var temp = inp.split('\n');
    QuickSort(temp[1]);
}

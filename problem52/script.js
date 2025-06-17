const fs = require('fs');

fs.readFile('inp.txt','utf-8',(err,data) =>{
    if(err){
        console.log(`Err.:${err}`);
        return;
    }

    ProcessData(data);
});
var lineCount = 0;
async function ProcessData(data){
    var temp = data.split('\n');
    var ans = [];
    lineCount = parseInt(temp[0]);
    for(let i= 1;i<lineCount+1;++i){
        ans.push(PythagoreanTheorem(temp[i]));
    }
    const clipboardy = await import('clipboardy');
    clipboardy.default.writeSync(ans.join(' '));
    console.log("Kesz!");
}

function PythagoreanTheorem(data){
    var sides = data.split(' ');
    return Math.pow(sides[0],2) + Math.pow(sides[1],2) == Math.pow(sides[2],2) ? "R" : (Math.pow(sides[0],2) + Math.pow(sides[1],2) > Math.pow(sides[2],2) ? "A" : "O");
}
const fs = require('fs');

fs.readFile('inp.txt','utf-8',(err,data)=>{
    if(err){
        console.log("Error: "+err);
        return;
    }
    ProcessData(data);
});
var lineCount = 0;
async function ProcessData(data){
    var ans = [];
    var splitData = data.split('\n');
    lineCount = parseInt(splitData[0]);
    for(let i = 1;i<lineCount+1;++i){
        ans.push(Check(splitData[i]));
    }
    const clipboardy = await import('clipboardy');
    clipboardy.default.writeSync(ans.join(' '));
    console.log("A valasz a vagolapon!");
}

function Check(data) {
    var exp = /[^a-zA-Z0-9]/g;
    var procData = data.replace(exp, ''); 
    return procData.toLowerCase() === procData.split('').reverse().join('').toLowerCase() ? "Y" : "N";
} 
const fs = require('fs');
fs.readFile('inp.txt','utf-8',(err,data)=>{
    if(err){
        console.log(`Error:${err}`);
        return;
    }
    ProcessData(data);
});
const isCorrupted = byte => byte.toString(2).split('').reduce((count, bit) => count + (bit === '1'), 0) % 2 !== 0;
const decodeByte = byte => String.fromCharCode(byte & 0b01111111);

function ProcessData(data){
    const encodedBytes = data.trim().split(' ').map(Number);
    let decodedMessage = [];
    for (let byte of encodedBytes) {
        if (byte === 46) {
            decodedMessage.push('.');
            break;
        }
        if (!isCorrupted(byte)) {
            decodedMessage.push(decodeByte(byte));
        }
    }

    console.log(decodedMessage.join(''));
}
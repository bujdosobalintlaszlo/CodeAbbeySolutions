const fs = require('fs');
fs.readFile('inp.txt','utf8',(err,inp)=>{
    if(err){
        console.log(err);
        return;
    }
    processData(inp);
});
var notes = [];
async function processData(data){
    var itemCount = 0;
    var arr = data.split('\n');
    itemCount = parseInt(arr[0]);
    notes = arr[1].split(' ');
    const frequencies = notes.map(note => noteFrequency(note));
    const clipboardy = await import('clipboardy');
    clipboardy.default.writeSync(frequencies.join(' '));
}



function noteFrequency(note) {
    const noteToSemitone = {
        'C': -9, 'C#': -8, 'D': -7, 'D#': -6, 'E': -5,
        'F': -4, 'F#': -3, 'G': -2, 'G#': -1, 'A': 0,
        'A#': 1, 'B': 2
    };
    const name = note.slice(0, -1);
    const octave = parseInt(note.slice(-1));
    const semitone = noteToSemitone[name];
    const n = semitone + (octave - 4) * 12;
    const frequency = 440 * Math.pow(2, n / 12);
    return Math.round(frequency);
}


const fs = require('fs');

fs.readFile('inp.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    processData(data);
});

function processData(data) {
    const lines = data.trim().split('\n');
    const numMatches = parseInt(lines[0], 10);
    const results = [];

    for (let i = 1; i <= numMatches; i++) {
        results.push(RPS(lines[i]));
    }

    ToCutBoard(results);
}

async function ToCutBoard(arr) {
    const clipboardy = await import('clipboardy');
    clipboardy.default.writeSync(arr.join(' '));
    
}

function RPS(line) {
    const matches = line.split(' ');
    const players = [0, 0];

    matches.forEach(match => {
        const items = match.split('');
        if (items[0] === items[1]) return; // It's a draw, do nothing
        if ((items[0] === 'R' && items[1] === 'S') ||
            (items[0] === 'S' && items[1] === 'P') ||
            (items[0] === 'P' && items[1] === 'R')) {
            players[0]++;
        } else {
            players[1]++;
        }
    });

    return players[0] > players[1] ? 1 : 2;
}

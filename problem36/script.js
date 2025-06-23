const fs = require('fs');

fs.readFile('inp.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(`Err.: ${err}`);
        return;
    }
    processData(data);
});

function processData(data) {
    const splitData = data.split('\n').map(x => x.trim()).filter(x => x.length > 0);
    const caseCount = parseInt(splitData[0]);
    const guesses = [];

    for (let i = 1; i <= caseCount; ++i) {
        const [guess, correct] = splitData[i].split(" ");
        guesses.push({ guess: guess, correct: parseInt(correct) });

    }

    const secret = findSecret(guesses);
    console.log(secret);
}

function findSecret(guesses) {
    const digitLength = Math.max(...guesses.map(g => g.guess.length));
    const max = Math.pow(10, digitLength);

    for (let i = 0; i < max; i++) {
        let candidate = i.toString().padStart(digitLength, '0');
        if (isValid(candidate, guesses)) {
            return candidate;
        }
    }
    return null;
}


function isValid(candidate, guesses) {
    for (let { guess, correct } of guesses) {
        let count = 0;
        for (let i = 0; i < candidate.length; i++) {
            if (candidate[i] === guess[i]) count++;
        }
        if (count !== correct) return false;
    }
    return true;
}

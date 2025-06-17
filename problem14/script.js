const fs = require('fs');

fs.readFile('inp.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(`error: ${err}`);
        return;
    }
    processData(data);
});

function processData(data) {
    const lines = data.trim().split('\n');
    let starter = parseInt(lines[0], 10);
    console.log(`Initial starter value: ${starter}`);

    let modulus = 1;
    let operations = [];

    for (let i = 1; i < lines.length; ++i) {
        const line = lines[i].trim().split(' ');
        const operator = line[0];
        const value = parseInt(line[1], 10);

        if (operator === '%') {
            modulus = value;
        } else {
            operations.push({ operator, value });
        }
    }

    for (const { operator, value } of operations) {
        starter = operate(starter, value, operator, modulus);
        console.log(`After operation ${operator} ${value}: ${starter}`);
    }

    starter = starter % modulus;
    console.log(`Final result: ${starter}`);
}

function operate(a, b, op, mod) {
    switch (op) {
        case '+':
            return (a + b) % mod;
        case '-':
            return (a - b + mod) % mod;
        case '*':
            return (a * b) % mod;
        case '/':
            return Math.round(a / b) % mod;
        default:
            console.log(`Invalid operation: ${op}`);
            return a;
    }
}

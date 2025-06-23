const fs = require("fs");

fs.readFile("inp.txt", "utf-8", (err, data) => {
    if (err) {
        console.error(`Error: ${err}`);
        return;
    }
    processData(data);
});

function processData(data) {
    const lines = data.trim().split("\n");
    const testCount = parseInt(lines[0]);
    const results = [];

    for (let i = 1; i <= testCount; i++) {
        const line = lines[i].trim();
        results.push(matchBrackets(line));
    }

    console.log(results.join(" "));
}

function matchBrackets(line) {
    const stack = [];
    const opening = "([{<";
    const closing = ")]}>";

    const matches = {
        ')': '(',
        ']': '[',
        '}': '{',
        '>': '<'
    };

    for (let char of line) {
        if (opening.includes(char)) {
            stack.push(char);
        } else if (closing.includes(char)) {
            if (stack.length === 0 || stack.pop() !== matches[char]) {
                return 0;
            }
        }
    }

    return stack.length === 0 ? 1 : 0;
}

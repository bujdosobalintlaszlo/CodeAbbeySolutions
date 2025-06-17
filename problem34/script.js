const fs = require('fs');

fs.readFile('inp.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(`Error: ${err}`);
        return;
    }
    processData(data);
});

var lineCount = 0;
var lines = [];

function processData(data) {
    var temp = data.trim().split('\n');
    lineCount = parseInt(temp[0]);
    for (var i = 1; i <= lineCount; ++i) {
        lines.push(temp[i].split(' ').map(Number));
    }
    binarySearch();
}

function binarySearch() {
    let results = [];
    
    lines.forEach(coefficients => {
        let [A, B, C, D] = coefficients;
        let left = 0, right = 100;
        let precision = 1e-7;

        while (right - left > precision) {
            let mid = (left + right) / 2;
            let value = A * mid + B * Math.sqrt(Math.pow(mid, 3)) - C * Math.exp(-mid / 50) - D;
            
            if (value > 0) {
                right = mid;
            } else {
                left = mid;
            }
        }

        let root = (left + right) / 2;
        results.push(root.toFixed(15));
    });
    
    console.log(results.join(' '));
}

// Corrected Sieve of Eratosthenes function
function sieveOfEratosthenes(limit) {
    const sieve = new Array(limit + 1).fill(true);
    sieve[0] = sieve[1] = false; // 0 and 1 are not prime numbers

    for (let i = 2; i <= Math.sqrt(limit); i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= limit; j += i) {
                sieve[j] = false;
            }
        }
    }

    const primes = [];
    for (let i = 2; i <= limit; i++) {
        if (sieve[i]) {
            primes.push(i);
        }
    }
    console.log(primes);
    return primes;
}

// Example usage
const limit = 100; // Change the limit value as needed
const primes = sieveOfEratosthenes(limit);
console.log(primes);

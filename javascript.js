function sum (n) {
    if (n === 0) {
        return 0; 
    } else {
        return n + sum(--n);
    }
}

let newSum = sum(3);

console.log(newSum);
// Use rest parameter to accept any number of scores and return the total

// Solution

function totalScore (...scores) {
    let total = 0;
    scores.forEach(function(value) {
        total += value;
    });
    return total;
}
console.log(totalScore(10,12,15,99));  // output >> 136

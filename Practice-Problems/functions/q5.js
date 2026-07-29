// Convert the following function into a pure function

/*
let total = 0;
function addToTotal(num){
total += num;
}
*/
// solution

let total = 0;
function addToTotal(num) {
    let newTotal = total;
    newTotal += num;
}
// Create a counter

function counter() {
    count = 0;
    return function() {
        count++;
    };
}
let a = counter();
let b = counter();

console.log(a());
console.log(a());
console.log(a());
console.log(b());  // b is a different counter that starts again from 0
console.log(b()); 
console.log(a());  // value of a does not chnage due to b as both are different counters
console.log(a());



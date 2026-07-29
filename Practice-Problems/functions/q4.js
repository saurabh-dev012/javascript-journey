// Fix the following using early return function

/*
function checkAge(age) {
    if (age < 18) {
    console.log("Too young"); 
    } else {
        console.log("Allowed");
    }
}
    */

// solution

function checkAge(age) {
    if (age < 18) return "Too young";
    return "Allowed";
}
console.log(checkAge(23));  // output >> "Allowed"
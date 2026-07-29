// Create a Reusable Discount Calculator

function discountCalculator(discount) {
    return function(price) {
        return price - price*( discount / 10 );
    };
}
let ten = discountCalculator(10);
let fifty = discountCalculator(50);

console.log(ten(250));  // output >> 225
console.log(fifty(300));  // output >> 150

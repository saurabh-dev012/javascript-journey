// Write a BMI Calculator



function BMI ( weight , height ) {
    return weight / (height*height);
}
console.log(BMI( 55 , 1.70 ).toFixed(2));  // output >> 19.03
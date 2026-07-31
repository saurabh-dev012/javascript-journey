let count = 10;
let countdown = setInterval(function() {
if ( count >= 0 ) {
    console.log(count);
    count--;
}
else{
    clearInterval(countdown);
}
} , 2000);
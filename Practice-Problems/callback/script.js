function kuchhDerBaadChalunga(fnc) {
    setTimeout(fnc , Math.floor(Math.random() *20) * 1000);
}
kuchhDerBaadChalunga(function() {   //callback function
    console.log("I am a callback function");
});
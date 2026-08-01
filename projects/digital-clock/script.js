let currentTime = document.querySelector("#clock");
let greet = document.querySelector("#greeting");
const themeBtn = document.querySelector("#themeBtn");

themeBtn.addEventListener("click",function() {
    document.body.classList.toggle("light");

});

function updateTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    currentTime.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
updateTime();
setInterval(updateTime, 1000);

function updateGreeting() {
    const now = new Date();
    let hour = now.getHours();

    if (hour < 12) {
        greet.textContent = "Good Morning";
        } else if( hour < 16) {
        greet.textContent = "Good Afternoon";
        
    } else if( hour < 19) {
        greet.textContent = "Good Evening";
    } else {
        greet.textContent = "Good Night";
    }
}

updateGreeting();

function formatTime(value){
    if (value < 10) {
        return "0" + value;
    } else return value;

}
formatTime();
let count = 0;
let seconds = 10;
let progress = document.querySelector(".progress-box");
let percent = document.querySelector("#percent");

let interval = setInterval(function() {
    if (count <= 99) {
        count++;
        progress.style.width = `${count}%`;
        percent.textContent = `${count}%`;
    }
    else {
        document.querySelector("h2").textContent = "Downloaded";
        clearInterval(interval);
    }
} , (seconds * 1000) / 100 );
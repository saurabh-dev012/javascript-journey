// Select all <li> elements and print their text using a loop.

let list = document.querySelectorAll("li");
list.forEach(function(val){
    console.log(val.textContent);
});

// Create a new image element with a placeholder source and add it to the top of a div

let image = document.createElement("img");
image.setAttribute("src","https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png");
image.classList.add("placeholder");
document.querySelector("div").prepend(image);
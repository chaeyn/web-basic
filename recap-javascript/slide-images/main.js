let currentIndex = 0;
const images = ["alt.png", "b1nd.png", "chatty.png", "cns.png", "ducami.png", "louter.png", "modi.png", "samdi.png"];
const slideImage = document.getElementById('slideImage');
const previous = document.getElementById("previous");
const next = document.getElementById("next");

previous.addEventListener("click", () => {
    currentIndex = (currentIndex -1 + images.length) % images.length;
    slideImage.src = `./${images[currentIndex]}`;
})

next.addEventListener("click", () => {
    currentIndex = (currentIndex + 1 + images.length) % images.length;
    slideImage.src = `./${images[currentIndex]}`;
})

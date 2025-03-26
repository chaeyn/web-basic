let currentIndex = 0;
const images = ["./image/alt.png", "./image/b1nd.png", "./image/chatty.png", "./image/cns.png", "./image/ducami.png", "./image/louter.png", "./image/modi.png", "./image/samdi.png"];
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

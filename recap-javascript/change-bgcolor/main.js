const changeRed = document.getElementById("changeRed");
const changeGreen = document.getElementById("changeGreen");
const changeBlue = document.getElementById("changeBlue");
const changeYellow = document.getElementById("changeYellow");

changeRed.addEventListener("click", (e) => {
    document.body.style.backgroundColor = '#ff0000';
})
changeGreen.addEventListener("click", (e) => {
    document.body.style.backgroundColor = '#00ff00';
})
changeBlue.addEventListener("click", (e) => {
    document.body.style.backgroundColor = '#0058ff';
})
changeYellow.addEventListener("click", (e) => {
    document.body.style.backgroundColor = '#ffeb00';
})
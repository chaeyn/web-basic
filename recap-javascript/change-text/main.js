const changeText = document.getElementById('changeText');
const hello = document.getElementById('hello');

changeText.addEventListener('click', () => {
    hello.innerText = 'hello';
})
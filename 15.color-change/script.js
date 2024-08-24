const button = document.querySelector('button');
const hexCode = document.querySelector('h2');

function randomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for ( let i = 0; i <6; i ++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

button.onclick = function () {
    let color = randomColor();
    console.log(color);
    document.body.style.backgroundColor = color;
    hexCode.innerHTML = color;
}
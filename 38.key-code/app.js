const container = document.querySelector('.container');

document.addEventListener('keydown', (e)=> {
    const object = {
        "e.key": e.key,
        "e.keyCode": e.keyCode,
        "e.code": e.code
    };

    container.innerHTML = "";
    for (let key in object) {
        const div = document.createElement('div');
        div.className = "key";
        div.textContent = object[key] === " " ? "Space" : object[key];
        const small = document.createElement('div');
        small.className = "small";
        small.textContent = key;
        div.appendChild(small);
        container.appendChild(div);
    }
})
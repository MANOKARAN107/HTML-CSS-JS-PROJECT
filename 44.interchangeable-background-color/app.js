const divs = document.querySelectorAll('.container > div');

divs.forEach((div)=> {
    div.addEventListener('click', ()=> {
        const className = div.getAttribute('class');
        document.body.style.backgroundColor = className;
    })
})
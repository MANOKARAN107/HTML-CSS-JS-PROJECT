const btn = document.querySelector('.btn');
const span = document.querySelector('.content-container-2');

btn.addEventListener('click', ()=> {
    span.classList.toggle('toggle');
})
const nav = document.querySelector('nav');
const menuIcon = document.querySelector('#toggle');

menuIcon.addEventListener('click', ()=> {
    nav.classList.toggle('active');
})
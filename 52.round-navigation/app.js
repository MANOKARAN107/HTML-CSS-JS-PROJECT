const toggler = document.querySelector('.navbar-btn');
const navbarWrapper = document.querySelector('.navbar-wrapper');

toggler.addEventListener('click', ()=> {
    navbarWrapper.classList.toggle('change');
})
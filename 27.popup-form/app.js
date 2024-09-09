const signUp = document.querySelector('#open');
const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('.close-btn');

signUp.onclick = function () {
    modal.classList.add('show-modal');
}

closeBtn.onclick = function() {
    modal.classList.remove('show-modal');
}

window.addEventListener('click', e => {
    e.target === modal ? modal.classList.remove('show-modal') : false;
})
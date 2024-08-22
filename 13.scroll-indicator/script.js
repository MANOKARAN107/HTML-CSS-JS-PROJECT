const progress = document.querySelector('.progress');
const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', scroll);

function scroll() {
    const scrolled = document.documentElement.scrollTop / scrollHeight * 100;
    progress.style.width = `${scrolled}%`;
}
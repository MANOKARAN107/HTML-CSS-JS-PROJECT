const copyBtn = document.querySelector('#copyBtn');
const moveBtn = document.querySelector('#moveBtn');
const copyTextArea = document.querySelector('#copy');
const moveTextArea = document.querySelector('#move');
const copiedContent = document.querySelector('.content-copied');

copyBtn.onclick = function () {
    copiedContent.classList.add('fade-in');
    setTimeout(()=> {
        copiedContent.classList.add('fade-out');
    }, 1000);
    setTimeout(()=> {
        copiedContent.classList.remove('fade-in');
        copiedContent.classList.remove('fade-out');
    }, 2000);
    copyTextArea.select();
    document.execCommand("copy");
}
moveBtn.onclick = function() {
    moveTextArea.value = copyTextArea.value;
}
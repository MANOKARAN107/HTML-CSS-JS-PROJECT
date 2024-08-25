const playBtn = document.querySelector('.play-button');
const videoPlayBox = document.querySelector('.video-player');
const closeBtn = document.querySelector('.close-button');
const video = document.querySelector('video');

playBtn.addEventListener('click', function() {
    videoPlayBox.classList.add('active');
});

closeBtn.addEventListener('click', function() {
    videoPlayBox.classList.remove('active');
    video.pause();
    video.currentTime = 0;
})
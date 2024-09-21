const wrapper = document.querySelector('#wrapper');
const wrapperImg = wrapper.querySelector('img');
const close = wrapper.querySelector('span');
const allImages = document.querySelector('.img-gallery').querySelectorAll('img');
let selectedSrc = allImages[0].getAttribute('src');

allImages.forEach((img)=> {
    img.addEventListener('click', ()=> {
        selectedSrc = img.getAttribute('src');
        wrapperImg.src = selectedSrc;
        wrapper.style.display = "flex";
    })
})

close.addEventListener('click', ()=> {
    wrapper.style.display = "none";
});
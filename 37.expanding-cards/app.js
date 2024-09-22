const allImages = document.querySelectorAll('.bg-image');
let activeImg = document.querySelector('.bg-image.active');

allImages.forEach((img)=> {
    img.addEventListener('click', ()=> {
        activeImg.classList.toggle('active');
        img.classList.toggle('active');
        activeImg = img;
    })
})

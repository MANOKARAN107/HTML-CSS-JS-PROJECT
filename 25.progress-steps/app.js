const progress = document.querySelector('#progress');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const circles = document.querySelectorAll('.circle');

let activeIndex = 1;

nextBtn.addEventListener('click', ()=> {
    activeIndex++;

    if (activeIndex > circles.length) {
        activeIndex = circles.length;
    }

    updateUI();
});

prevBtn.addEventListener('click', ()=> {
    activeIndex--;

    if (activeIndex < 1) {
        activeIndex = 1;
    }

    updateUI();
})

function updateUI() {
    circles.forEach((circle, index) => {
        if (index < activeIndex) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

    if (activeIndex == circles.length) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }

    if (activeIndex == 1) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }


}
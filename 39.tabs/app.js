const liElements = document.querySelectorAll('.tab-item');
let selectedTab = document.querySelector('.tab-item a.active');
let selectedContent = document.querySelector('.tab-content.content-visible');

liElements.forEach((li)=> {
    li.addEventListener('click', ()=> {
        const a = li.querySelector('a');
        selectedTab.classList.toggle('active');
        a.classList.toggle('active');
        selectedTab = a;
        const currentContent = document.querySelector(a.getAttribute('href'));
        selectedContent.classList.toggle('content-visible');
        currentContent.classList.toggle('content-visible');
        selectedContent = currentContent;
    })
})
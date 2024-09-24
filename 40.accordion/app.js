const accordions = document.querySelectorAll('.accordion-item');
let activeAccordion = document.querySelector('.accordion-item.active');

accordions.forEach((accordion) => {
    const header = accordion.querySelector('.accordion-item-header');
    header.addEventListener('click', ()=> {

        if (activeAccordion && accordion !== activeAccordion) {
            activeAccordion.classList.toggle('active');
            activeAccordion.querySelector('.accordion-item-body')
                .style.maxHeight = 0;
        }

        accordion.classList.toggle('active');
        activeAccordion = accordion;

        const accordionItemBody = accordion.querySelector('.accordion-item-body');

        if (accordion.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
})
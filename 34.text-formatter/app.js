const input = document.querySelector('#word');
const result = document.querySelector('.result');

const buttons = document.querySelector('.formatter-buttons').querySelectorAll('button');

console.log({input, result, buttons});

input.addEventListener('keyup', ()=> {
    result.innerHTML = input.value;
});

buttons.forEach((button)=> {
    button.addEventListener('click', ()=> {
        const format = button.getAttribute('format');
        console.log(format);
        if (['lowercase', 'uppercase', 'capitalize'].includes(format)) {
            result.style.textTransform = format;
        }

        if (format === "bold") {
            result.style.fontWeight = format;
        }

        if (format === "italic") {
            result.style.fontStyle = format;
        }

        if (format === "underline") {
            result.style.textDecoration = format;
        }
    })
})
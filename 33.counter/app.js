const counter = document.querySelector('#counter');
const increment = document.querySelector('#increment');
const save = document.querySelector('#save');
const result = document.querySelector('.result');

const saved = [];
let count = 0;

increment.addEventListener('click', function() {
    count++;
    counter.textContent = count;
});

save.addEventListener('click', ()=> {
    saved.push(count);
    count = 0;
    counter.textContent = count;

    refreshEntries();
})

function refreshEntries() {
    result.innerHTML = saved.join(" ,");
}
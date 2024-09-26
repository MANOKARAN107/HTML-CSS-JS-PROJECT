const input = document.querySelector('#inputBox');
const form = document.querySelector('.mainForm');
const valid = document.querySelector('.valid');
console.log(input);

input.addEventListener('keyup', ()=> {
    const value = input.value;
    const pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;

    if (input.value.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
      } else {
        form.classList.add("invalid");
        form.classList.remove("valid");
      }

});
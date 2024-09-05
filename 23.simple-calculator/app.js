const result = document.getElementById("output");
const operator = document.querySelector('#operator');
const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');
const submitBtn = document.querySelector('#submit');

submitBtn.onclick = function () {
    const operation = operator.value;
    const n1 = number1.value;
    const n2 = number2.value;

    if (!n1 || !n2 || !operation) {
        alert('Please input numbers');
        return;
    }

    result.innerHTML = eval(n1 +  operation +  n2);
}
const selectParent = document.querySelector('.container');
const selectBox = document.querySelector('select');
const options = selectBox.querySelectorAll('option');
const select = getSelectContainer(selectBox);

selectParent.appendChild(select);

const optionsContainer = document.createElement('ul');
optionsContainer.className = "options-container";
select.appendChild(optionsContainer);

addOptions(optionsContainer, options);


function getSelectContainer(selectBox) {
    const selectContainer = document.createElement('div');
    selectContainer.className = "select-container";

    const placeholder = document.createElement('label');
    placeholder.className = "placeholder";
    placeholder.title = selectBox.getAttribute('placeholder');
    placeholder.textContent = selectBox.getAttribute('placeholder');
    selectContainer.appendChild(placeholder);

    const arrow = document.createElement('span');
    arrow.className = "arrow fa fa-chevron-down";
    arrow.title = "Open/Close";
    selectContainer.appendChild(arrow);

    selectContainer.onclick = () => {
        selectContainer.classList.toggle('active');
    }

    return selectContainer;
}

function addOptions(optionContainer, options) {
    options.forEach((element) => {
        addOption(optionContainer, element);
    });
}

function addOption(optionsContainer, option) {
    const li = document.createElement('li');
    const text = document.createElement('label');
    text.textContent = option.textContent;
    text.value = option.value;
    li.title = option.textContent;
    li.appendChild(text);
    optionsContainer.appendChild(li);

    li.onclick = ()=> {
        console.log(optionsContainer);
        let placeholder = optionsContainer.parentElement.querySelector('.placeholder');
        placeholder.textContent = text.textContent;
    }
}
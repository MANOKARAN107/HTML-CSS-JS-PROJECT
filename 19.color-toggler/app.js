const checkbox = document.querySelector('input');
const toggleBox = document.querySelector('.toggler');

toggleBox.addEventListener('click', () => {
    checkbox.checked = !checkbox.checked;
    if (checkbox.checked) {
        document.documentElement.style.setProperty('--bg-color', 'var(--dark-color)');
        document.documentElement.style.setProperty('--toggle-color', 'var(--light-color)');
    } else {
        document.documentElement.style.setProperty('--bg-color', 'var(--light-color)');
        document.documentElement.style.setProperty('--toggle-color', 'var(--dark-color)');
    }
})
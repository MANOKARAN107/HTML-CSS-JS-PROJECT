const allLables = document.querySelectorAll(".input .placeholder");

allLables.forEach((label) => {
  label.innerHTML = label.innerHTML
    .split("")
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 50}ms">${letter}</span>`
    )
    .join("");
});
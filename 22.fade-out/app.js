let arrow = document.getElementById("arrow");

window.addEventListener("scroll", () => {
  let position = window.scrollY;
//   console.log(position);
  if (position >= 100) {
    arrow.classList.add("fade-out");
  } else {
    arrow.classList.remove("fade-out");
  }
});
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

document.body.addEventListener("keypress", (e) => {
  if (e.key == "m") {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  }
});

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const test = document.querySelector(".test");
const main = document.querySelector("main");

test.style.display = "none";
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
  main.classList.toggle("blur");
});

document.body.addEventListener("keypress", (e) => {
  if (e.key == "m") {
    main.classList.toggle("blur");
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  }
});

main.addEventListener("click", () => {
  main.classList.remove("blur");
  hamburger.classList.remove("active");
  nav.classList.remove("active");
});
  
const test = document.querySelector(".test");
test.style.display = "none";
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const main = document.querySelector("main");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
  main.classList.toggle("blur");
});

document.body.addEventListener("keypress", (e) => {
  if (e.key == "m") {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
    main.classList.toggle("blur");
  }
});

main.addEventListener("click", () => {
  main.classList.remove("blur");
  hamburger.classList.remove("active");
  nav.classList.remove("active");
});

// merci à chat gpt qui m'a aidé dans la création de ce joli bout de code !
window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 0);
};

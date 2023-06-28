const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const test = document.querySelector(".test");
const main = document.querySelector("main");
const download = document.querySelector(".downloada");

test.style.display = "none";
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
  main.classList.toggle("blur");
});

nav.addEventListener("click", () => {
  main.classList.remove("blur");
  hamburger.classList.remove("active");
  nav.classList.remove("active");
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

download.addEventListener("click", () => {
  const notification = document.createElement("div");
  notification.textContent = "Powerpoint téléchargé";
  notification.style.position = "fixed";
  notification.style.bottom = "10px";
  notification.style.right = "10px";
  notification.style.borderRadius = "3px";
  notification.style.padding = "3px";
  notification.style.border = "1px solid white";
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
});

// merci à chat gpt qui m'a aidé dans la création de ce joli bout de code !
window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 0);
};

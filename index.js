const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const test = document.querySelector(".test");
const main = document.querySelector("main");
const download = document.querySelector(".download");

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

download.addEventListener("click", () => {
  const notification = document.createElement("div");
  notification.textContent = "Notification";
  notification.style.position = "fixed";
  notification.style.top = "10px";
  notification.style.right = "10px";
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000);
});

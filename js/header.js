const listSpanAccount = document.querySelectorAll("ul.account-menu>li>span");
listSpanAccount.forEach((span) => {
  span.addEventListener("click", () => {
    span.classList.toggle("show");
  });
});

const openNavMenuBtn = document.querySelector(".humberger-btn");
const closeNavMenuBtn = document.querySelector(".close-btn");
const navMenu = document.querySelector(".navigation");
openNavMenuBtn.addEventListener("click", () => {
  navMenu.classList.add("show");
});
closeNavMenuBtn.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

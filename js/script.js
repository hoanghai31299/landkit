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

const typingAnimate = (texts, element) => {
  let index = 0;
  let currentChar = 0;
  let time = 150;
  setInterval(() => {
    if (currentChar === texts[index].length + 30) {
      let str = element.innerHTML.split("");
      str.pop();
      element.innerHTML = str.join("");
      if (element.innerHTML.length == 0) {
        currentChar = 0;
        index = ++index % texts.length;
      }
    } else {
      if (currentChar >= texts[index].length) {
        currentChar++;
        return;
      }
      element.innerHTML += texts[index][currentChar];
      currentChar++;
    }
  }, 50);
};
window.onload = () => {
  const textArray = ["developers.", "founders.", "designers."];
  const spanAnimate = document.querySelector("span.type-writer");
  typingAnimate(textArray, spanAnimate);
};

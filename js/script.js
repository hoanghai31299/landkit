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

//Typing writer
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

const pricingPrice = document.querySelector(".standard-card .price span");
const checkbox = document.querySelector(".switch-button input");
checkbox.addEventListener("click", () => {
  const increaseNumber = setInterval(() => {
    let current = +pricingPrice.innerHTML;
    current += increase;
    pricingPrice.innerHTML = current;
    if (current <= min || current >= max) clearInterval(increaseNumber);
  }, 20);
  let increase = checkbox.checked ? 1 : -1;
  let min = 29,
    max = 49;
});
function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
}
let card = document.querySelector(".form-card");
let text = document.querySelector(".sample-text");
let boostrapLeft = document.querySelector(".boostrap-left");
let boostrapRight = document.querySelector(".boostrap-right");
boostrapLeft.classList.add("show-from-left");
boostrapRight.classList.add("show-from-right");
let spanNumbers = document.querySelectorAll(".increase-number");
let hundred = 80;
let twenty = 4;
let ran = false;
window.onscroll = (e) => {
  let scrollTop = window.pageYOffset;
  console.log(scrollTop);
  if (scrollTop >= 399) {
    card.classList.add("left-to-right");
    text.classList.add("right-to-left");
  }
  if (scrollTop >= 1199) {
    boostrapLeft.classList.add("left-to-right");
    boostrapRight.classList.add("right-to-left");
  }
  if (scrollTop >= 1199) {
    if (!ran) {
      let run = setInterval(() => {
        spanNumbers[0].innerHTML = `${++hundred}%`;
        spanNumbers[1].innerHTML = `${++twenty}/7`;
        spanNumbers[2].innerHTML = `${hundred}k+`;
        if (hundred >= 100) {
          ran = true;
          clearInterval(run);
        }
      }, 50);
    }
  }
};

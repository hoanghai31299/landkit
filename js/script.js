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
    checkbox.disabled = true;
    let current = +pricingPrice.innerHTML;
    current += increase;
    pricingPrice.innerHTML = current;
    if (current <= min || current >= max) {
      checkbox.disabled = false;
      clearInterval(increaseNumber);
    }
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
const cards = document.querySelectorAll(".pricing-cards .card");
cards[0].classList.add("show-from-bottom");
cards[1].classList.add("show-from-bottom");
window.onscroll = (e) => {
  let scrollTop = window.pageYOffset;
  if (scrollTop >= 399) {
    card.classList.add("left-to-right");
    text.classList.add("right-to-left");
  }
  if (scrollTop >= 1199) {
    boostrapLeft.classList.add("left-to-right");
    boostrapRight.classList.add("right-to-left");
  }
  if (scrollTop >= 3205) {
    cards[0].classList.add("bottom-up");
    cards[1].style = "animation-delay: 0.1s";
    cards[1].classList.add("bottom-up");
  }
};

//validate form
const inputsForm = document.querySelectorAll(".form-item input");
const formButton = document.querySelector(".sample-form>button");
inputsForm.forEach((el) => {
  el.addEventListener("keyup", (e) => {
    el.classList.remove("invalid");
    if (e.keyCode === 13) {
      e.preventDefault();
      formButton.click();
    }
  });
});
formButton.addEventListener("click", (e) => {
  e.preventDefault();
  const [name, email, password] = inputsForm;
  const errors = [];
  if (name.value.length === 0) {
    errors.push("name is not valid");
    name.classList.add("invalid");
  } else name.classList.remove("invalid");
  const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  if (!re.test(email.value)) {
    errors.push("email is not valid");
    email.classList.add("invalid");
  } else email.classList.remove("invalid");
  if (password.value.length < 8) {
    errors.push("password is not valid");
    password.classList.add("invalid");
  } else password.classList.remove("invalid");

  if (errors.length === 0) console.log(name.value, email.value, password.value);
});

///slider

const btnPrev = document.querySelector(".btn-prev.slide-btn");
const btnNext = document.querySelector(".btn-next.slide-btn");
const wrapper = document.querySelector(".slider-wrapper");
const slideItems = document.querySelectorAll(".slider-wrapper .slider-item");
const images = document.querySelectorAll(".image-slider img");
console.log(images);
function slide(wrapper, items, images, btnNext, btnPrev) {
  //clone first and last slide;
  let imgIndex = false;
  const fisrtSlide = items[0].cloneNode(true);
  // const secondSlide = items[1].cloneNode(true);
  items[1].classList.add("current");
  items[0].classList.add("next");
  fisrtSlide.classList.add("prev");
  wrapper.appendChild(fisrtSlide);
  btnNext.addEventListener("click", (e) => {
    const currentSlide = document.querySelector(".slider-item.current");
    const nextSlide = document.querySelector(".slider-item.next");
    const prevSlide = document.querySelector(".slider-item.prev");

    //make next slide to the current slide
    nextSlide.classList.remove("next");
    nextSlide.classList.add("current");

    //make current slide to the prev slide
    currentSlide.classList.remove("current");
    //clone form this to make it no class
    const newSlide = currentSlide.cloneNode(true);
    currentSlide.classList.add("prev");

    //add next slide (it the current because 2 side of slide must be the same)
    newSlide.classList.add("next");
    wrapper.appendChild(newSlide);

    //remove prev (current is a prev now so...)
    prevSlide.remove();

    //animate image
    images[+imgIndex].classList.remove("current");
    imgIndex = !imgIndex;
    images[+imgIndex].classList.add("current");
  });
  btnPrev.addEventListener("click", (e) => {
    const currentSlide = document.querySelector(".slider-item.current");
    const nextSlide = document.querySelector(".slider-item.next");
    const prevSlide = document.querySelector(".slider-item.prev");
    //make prev slide to the current slide
    prevSlide.classList.remove("prev");
    prevSlide.classList.add("current");

    //make current slide to the next slide
    currentSlide.classList.remove("current");
    const newSlide = currentSlide.cloneNode(true);
    currentSlide.classList.add("next");

    // //add next slide (it the current because 2 side of slide must be the same)
    newSlide.classList.add("prev");

    //add new slide to slider
    wrapper.appendChild(newSlide);

    //remove next slide
    nextSlide.remove();

    //animate image
    images[+imgIndex].classList.remove("current");
    imgIndex = !imgIndex;
    images[+imgIndex].classList.add("current");
  });
}
slide(wrapper, slideItems, images, btnNext, btnPrev);

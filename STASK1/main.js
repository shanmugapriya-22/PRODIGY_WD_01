const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btn");
const close = document.querySelector(".icon-close");
registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});
const oemail = "shan@gmail.com";
const opass = "123456";

var state = true;

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

close.addEventListener("click", () => {
  if (state) {
    wrapper.classList.remove("active-popup");
  }
});

// make a count up from 0 to 100

const numberone = document.querySelector("#numberone");
const numbertwo = document.querySelector("#numbertwo");

let count = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

setInterval(() => {
  if (count < 24) {
    count++;
    numberone.innerText = count;
  }
}, 50);

setInterval(() => {
  if (count2 < 100) {
    count2++;
    numbertwo.innerText = count2;
  }
}, 50);

setInterval(() => {
  if (count3 < 30) {
    count3++;
    numberthree.innerText = count3;
  }
}, 30);

setInterval(() => {
  if (count4 < 500) {
    count4++;
    numberfour.innerText = count4;
  }
}, 0.5);





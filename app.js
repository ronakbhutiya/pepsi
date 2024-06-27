const body = document.querySelector("body");
const img = document.querySelector(".pepsi-img");
const btn2 = document.getElementById("pepsi-btn2");
const btn1 = document.getElementById("pepsi-btn1");
const btn3 = document.getElementById("pepsi-btn3");

btn1.addEventListener("click", function () {
  body.style.backgroundColor = "#0062be";
  img.src = "img/pepsi001.png";
});
btn2.addEventListener("click", function () {
  body.style.backgroundColor = "#e60c2c";
  img.src = "img/pepsi002.png";
});
btn3.addEventListener("click", function () {
  body.style.backgroundColor = "#1e1e1e";
  img.src = "img/pepsi003.png";
});

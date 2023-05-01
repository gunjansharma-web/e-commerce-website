const openlang = document.getElementById("openlang");
// console.log(openlang);
const langoption = document.getElementById("langoption");
const openusd = document.getElementById("openusd");
const usdoption = document.getElementById("usdoption");
openlang.addEventListener("click", () => {
  langoption.classList.toggle("flex");
  langoption.classList.toggle("hidden");
});
openusd.addEventListener("click", () => {
  usdoption.classList.toggle("flex");
  usdoption.classList.toggle("hidden");
});
const navlist = document.getElementById("navlist");

const navdropdown = document.getElementById("navdropdown");
navlist.addEventListener("click", () => {
  navdropdown.classList.toggle("max-lg:flex");
  navdropdown.classList.toggle("max-lg:hidden");

  // navdropdown.classList.toggle("hidden");
});


function validation() {
  if (document.formFill.userName.value == "") {
    document.getElementById("result").innerHTML = "Enter Username*";
    return false;
  } else if (document.formFill.userName.value.length < 6) {
    document.getElementById("result").innerHTML = "Atleast six letter*";
    return false;
  } else if (document.formFill.Email.value == "") {
    document.getElementById("result").innerHTML = "Enter your Email*";
    return false;
  } else if (document.formFill.Password.value == "") {
    document.getElementById("result").innerHTML = "Enter your Password*";
    return false;
  } else if (document.formFill.Password.value.length < 6) {
    document.getElementById("result").innerHTML = "Password must be 6-digits*";
    return false;
  } else if (document.formFill.CPassword.value == "") {
    document.getElementById("result").innerHTML = "Enter confirm Password*";
    return false;
  } else if (
    document.formFill.CPassword.value !== document.formFill.Password.value
  ) {
    document.getElementById("result").innerHTML = "Password does'nt matched*";
    return false;
  } else if (
    document.formFill.CPassword.value == document.formFill.Password.value
  ) {
    document.getElementById("welcome").classList.remove("hidden");
    document.getElementById("login").classList.add("hidden");
    document.querySelector(".userName").innerHTML=document.formFill.userName.value
    return false;
  }
}
function openLogin() {
  document.getElementById("login").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
}
function validation2() {
  if (document.lformFill.lEmail.value == "") {
    document.getElementById("lresult").innerHTML = "Enter your Email*";
    return false;
  } else if (document.lformFill.lPassword.value == "") {
    document.getElementById("lresult").innerHTML = "Enter your Password*";
    return false;
  }
}

const search = document.querySelector(".search");
const searchArea = document.querySelector(".searchArea");
search.addEventListener("click", () => {
  searchArea.classList.toggle("hidden");
});

const person = document.querySelector(".person");
const profile = document.querySelector(".profile");
person.addEventListener("click", () => {
  profile.classList.toggle("hidden");
});
const closeSearch = document.querySelector(".closeSearch");
closeSearch.addEventListener("click", () => {
  searchArea.classList.toggle("hidden");
});
const closeProfile = document.querySelector(".closeProfile");
closeProfile.addEventListener("click", () => {
  profile.classList.toggle("hidden");
});

const addMsg = document.querySelector(".addMsg");
const closeAddMsg = document.querySelector(".closeAddMsg");

function addtocart() {
  addMsg.classList.toggle("hidden");


};
console.log(document.getElementById("cartCount").innerText);
closeAddMsg.addEventListener("click", () => {
  addMsg.classList.toggle("hidden");
});

const fullview1btn = document.querySelector(".fullview1btn");
const fullview1 = document.querySelector(".fullview1");
fullview1btn.addEventListener("click", () => {
  fullview1.classList.remove("hidden");
});
fullview1.addEventListener("mouseleave", function () {
  fullview1.classList.add("hidden");
});

const fullview2btn = document.querySelector(".fullview2btn");
const fullview2 = document.querySelector(".fullview2");
fullview2btn.addEventListener("click", () => {
  fullview2.classList.remove("hidden");
});
fullview2.addEventListener("mouseleave", function () {
  fullview2.classList.add("hidden");
});

const fullview3btn = document.querySelector(".fullview3btn");
const fullview3 = document.querySelector(".fullview3");
fullview3btn.addEventListener("click", () => {
  fullview3.classList.remove("hidden");
});
fullview3.addEventListener("mouseleave", function () {
  fullview3.classList.add("hidden");
});
const fullview4btn = document.querySelector(".fullview4btn");
const fullview4 = document.querySelector(".fullview4");
fullview4btn.addEventListener("click", () => {
  fullview4.classList.remove("hidden");
});
fullview4.addEventListener("mouseleave", function () {
  fullview4.classList.add("hidden");
});
const fullview5btn = document.querySelector(".fullview5btn");
const fullview5 = document.querySelector(".fullview5");
fullview5btn.addEventListener("click", () => {
  fullview5.classList.remove("hidden");
});
fullview5.addEventListener("mouseleave", function () {
  fullview5.classList.add("hidden");
});

let slider = document.querySelector("#slider img");
// let next = document.querySelector(".bi-chevron-right");

console.log(slider);
let images = [
  "./images/img 1.jpg",
  "./images/img 2.jpg",
  "./images/img 3.jpg",
  "./images/img 4.jpg",
  "./images/img 5.jpg",
];

let num = 0;
function next() {
  num++;
  if (num >= images.length) {
    num = 0;
    slider.src = images[num];
  } else {
    slider.src = images[num];
  }
}
function back() {
  num--;
  if (num < 0) {
    num = images.length - 1;
    slider.src = images[num];
  } else {
    slider.src = images[num];
  }
}
const left = document.getElementById("left");
let right = document.getElementById("right");
let imgs1 = document.querySelector("#imgs1");
let imgs2 = document.querySelector("#imgs2");
let imgs3 = document.querySelector("#imgs3");
let imgs4 = document.querySelector("#imgs4");
console.log(imgs1);
left.addEventListener("click", () => {
  left.classList.add("text-fuchsia-700");
  right.classList.toggle("text-fuchsia-700");
  imgs1.classList.add("hidden");
  imgs2.classList.add("hidden");
  imgs3.classList.remove("hidden");
  imgs4.classList.remove("hidden");
});
right.addEventListener("click", () => {
  right.classList.toggle("text-fuchsia-700");

  left.classList.toggle("text-fuchsia-700");
  imgs1.classList.remove("hidden");
  imgs2.classList.remove("hidden");
  imgs3.classList.add("hidden");
  imgs4.classList.add("hidden");
});

let mybutton = document.getElementById("topbtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

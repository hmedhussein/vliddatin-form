let username = document.getElementById("username");
let usermassage = document.getElementById("usermassage");
let ccc = document.querySelector(".icon-check-circle");
let closea = document.getElementById("close");
let mainbtn = document.getElementById("mainbtn");
let parentofform = document.querySelector(".parent-of-form");

parentofform.style.zIndex = -10;

mainbtn.addEventListener("click", (eo) => {
  parentofform.style.opacity = 1;
  parentofform.style.zIndex = 1000;
  form.style.transform = "scale(1)"
});
closea.addEventListener("click", (eo) => {
  parentofform.style.opacity = 0;
  parentofform.style.zIndex = -10;
});

const activeRegsiter = () => {
  if (
    username.classList.contains("success") &&
    email.classList.contains("success") &&
    psw.classList.contains("success") &&
    pswrRepeat.classList.contains("success")
  ) {
    regbtn.removeAttribute("disabled");
  }
};

username.addEventListener("keyup", (eo) => {
  username.classList.remove("success");
  username.nextElementSibling.style.opacity = 0;
  username.classList.remove("error");

  if (username.value.length < 3) {
    username.classList.add("error");
    usermassage.style.display = "block";
  } else {
    username.classList.remove("error");
    username.classList.add("success");
    usermassage.style.display = "none";
    username.nextElementSibling.style.opacity = 1;
  }
  activeRegsiter();
});

let email = document.getElementById("email");

email.addEventListener("keyup", (eo) => {
  email.classList.add("error");
  emailMassage.style.display = "block";
  username.nextElementSibling.style.opacity = 0;

  let regEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regEmail.test(email.value)) {
    email.classList.add("success");
    emailMassage.style.display = "none";
    email.nextElementSibling.style.opacity = 1;
  } else {
    email.classList.remove("success");
    email.classList.add("error");
    emailMassage.style.display = "block";
    email.nextElementSibling.style.opacity = 0;
  }
  activeRegsiter();
});

let psw = document.getElementById("psw");

psw.addEventListener("keyup", (eo) => {
  psw.classList.add("error");
  pswMassage.style.display = "block";
  psw.nextElementSibling.style.opacity = 0;

  let regpsw =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;

  if (regpsw.test(psw.value)) {
    psw.classList.add("success");
    pswMassage.style.display = "none";
    psw.nextElementSibling.style.opacity = 1;
  } else {
    psw.classList.remove("success");
    psw.classList.add("error");
    pswMassage.style.display = "block";
    psw.nextElementSibling.style.opacity = 0;
  }
  activeRegsiter();
});

let pswrRepeat = document.getElementById("psw-repeat");
let RepeatMass = document.getElementById("RepeatMass");

pswrRepeat.addEventListener("keyup", (eo) => {
  pswrRepeat.classList.add("error");
  RepeatMass.style.display = "block";
  pswrRepeat.nextElementSibling.style.opacity = 0;

  if (psw.value == pswrRepeat.value) {
    pswrRepeat.classList.add("success");
    RepeatMass.style.display = "none";
    pswrRepeat.nextElementSibling.style.opacity = 1;
  } else {
    pswrRepeat.classList.remove("success");
    pswrRepeat.classList.add("error");
    RepeatMass.style.display = "block";
    pswrRepeat.nextElementSibling.style.opacity = 0;
  }
  activeRegsiter();
});

// 00aaAA@@
let regbtn = document.getElementById("regbtn");

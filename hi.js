const form = document.querySelector(".js-hiForm"),
  input = form.querySelector("input"),
  hi = document.querySelector(".js-hi");

const NAME_LS = "currentUser";

function SaveName(name) {
  localStorage.setItem(NAME_LS, name);
  paintGreeting(name);
  form.classList.add("displayNone");
}

function HandleSubmit(e) {
  e.preventDefault();
  console.log(input.value);
  SaveName(input.value);
  input.value = "";
}

function askforName() {
  //이름제출 감지함수
  form.addEventListener("submit", HandleSubmit);
}

function paintGreeting(name) {
  hi.innerText = `hello, ${name}.`;
}

function init() {
  const currentUser = localStorage.getItem(NAME_LS);

  if (!currentUser) {
    askforName();
    //    console.log("abcd");
  } else {
    paintGreeting(currentUser);
    form.classList.add("displayNone");
  }
}

init();

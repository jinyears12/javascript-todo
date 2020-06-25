const clockd = document.querySelector(".js-clockd");
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function paintTime(result) {
  clockd.innerText = result;
}

function getTime() {
  const date = new Date();
  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const today = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const result = `${day} ${month} ${today} ${
    hours < 10 ? `0${hours}` : hours
  } : ${minutes < 10 ? `0${minutes}` : minutes} : ${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
  paintTime(result);
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();

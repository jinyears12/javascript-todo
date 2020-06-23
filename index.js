const title = document.getElementById("title");
const clicked = "clicked";

title.innerText = "Hello from ha...";

function handleClick() {
  const hassClass = title.classList.contains(clicked);
  if (!hassClass) {
    title.classList.add(clicked);
  } else {
    title.classList.remove(clicked);
  }
}

title.addEventListener("click", handleClick);
// console.log(title.innerText);

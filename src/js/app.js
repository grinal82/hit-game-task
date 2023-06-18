const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
const game = document.querySelector(".hole-game");

let holes = document.querySelectorAll(".hole");

let lastTarget = Math.floor(Math.random() * holes.length);
console.log(lastTarget);

const removeActiveByIndex = (index) =>
  holes[index].classList.remove("hole_active");
const appendActiveByIndex = (index) =>
  holes[index].classList.add("hole_active");

const intervalHandler = () => {
  removeActiveByIndex(lastTarget);
  lastTarget = Math.floor(Math.random() * holes.length);
  appendActiveByIndex(lastTarget);
  timeout = setTimeout(intervalHandler, 1000);
};

let timeout = setTimeout(intervalHandler, 1000);

game.onclick = function (event) {
  let target = event.target;
  console.log(target);
  if (target.classList.contains("hole_active")) {
    removeActiveByIndex(lastTarget);
    dead.textContent = Number(dead.textContent) + 1;
    clearTimeout(timeout);
    timeout = setTimeout(intervalHandler, 1000);
  } else {
    removeActiveByIndex(lastTarget);
    lost.textContent = Number(lost.textContent) + 1;
    clearTimeout(timeout);
    timeout = setTimeout(intervalHandler, 1000);
  }
};

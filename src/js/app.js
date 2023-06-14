const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

let idArray = document.querySelectorAll(".hole");

for (let el of idArray) {
  let getHole = document.getElementById(el.id);
  let clicked = false; // флаг чтобы отслеживать что не было клика

  getHole.addEventListener("click", () => {
    if (getHole.className.includes("hole_active") && !clicked) {
      if (Number(dead.textContent) < 8) {
        dead.textContent = Number(dead.textContent) + 1;
        clicked = true; // переводим флаг в true
      } else {
        alert("You have won!!!");
        dead.textContent = 0;
        lost.textContent = 0;
      }
    } else if (getHole.className.includes("hole") && !clicked) {
      if (Number(lost.textContent) < 4) {
        lost.textContent = Number(lost.textContent) + 1;
        clicked = true; // переводим флаг в true
      } else {
        alert("Sorry, but you've LOST!\nTry again!");
        dead.textContent = 0;
        lost.textContent = 0;
      }
    }
  });
}

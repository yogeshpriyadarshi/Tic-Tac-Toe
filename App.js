const mode = document.querySelector("#mode");
const body = document.querySelector("body");
let modeNow = "light";
mode.addEventListener("click", () => {
  if (modeNow === "dark") {
    modeNow = "light";
    body.classList.add("light");
    body.classList.remove("dark");
    console.log(modeNow);
  } else {
    modeNow = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
    console.log(modeNow);
  }
});

// Game Logic

const gamebtns = document.querySelectorAll(".game-btn");
const winbox = document.querySelector("#win-box")
let turnO = true;
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

gamebtns.forEach((bt) => {
  bt.addEventListener("click", () => {
    if (turnO) {
      bt.innerText = "O";
      turnO = false;
    } else {
      bt.innerText = "X";
      turnO = true;
    }
    bt.disabled = true;
    checkWinning();
  });

  //  function for checking winning.
});

function checkWinning() {
  winningPattern.forEach((win) => {
    let va1 = gamebtns[win[0]].innerText;
    let va2 = gamebtns[win[1]].innerText;
    let va3 = gamebtns[win[2]].innerText;

    if (va1 != "" || va2 != "" || va3 != "") {
      if (va1 === va2 && va2 === va3) {
        console.log("winner",va1);
        winbox.innerText=`Congratulation! winner is ${va1}`;
        
      }
    }
  });
}

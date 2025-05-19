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
const winbox = document.querySelector("#win-box");
const winner = document.querySelector('.winner')
const reset = document.querySelector('#reset-btn');
const newgame = document.querySelector('#new-game-btn');

let count =0;
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
      count++;
    } else {
      bt.innerText = "X";
      turnO = true;
      count++
    }
    bt.disabled = true;
    checkWinning();
  });
});

function disableAll(){
  gamebtns.forEach((bt)=> {bt.disabled=true})

}
function enableAll(){
  gamebtns.forEach((bt)=> {bt.disabled=false;  bt.innerText=""; 
    winbox.innerText=''; count=0; 
    winner.classList.add("hide");
    } );
}
 
reset.addEventListener("click",()=>{ enableAll()});
newgame.addEventListener("click",()=>{ enableAll()});

function showWinner(va1){
console.log("winner",va1);
        winbox.innerText=`Congratulation! winner is ${va1}`;
        winner.classList.remove("hide") ;
}


function checkWinning() {

  winningPattern.forEach((win) => {
    let va1 = gamebtns[win[0]].innerText;
    let va2 = gamebtns[win[1]].innerText;
    let va3 = gamebtns[win[2]].innerText;

    if (va1 != "" || va2 != "" || va3 != "") {
      if (va1 === va2 && va2 === va3) {
        showWinner(va1);
        disableAll();
      }
    }

    if(count===9){
      winbox.innerText="Game is drawn."
      winner.classList.remove("hide");
    }
  });
}

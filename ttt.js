import { winPatterns } from './winningPattern.js';

let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-btn");
let newGameButton = document.querySelector("#new-game-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;


const disableBoxes = () =>{
    for(box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=> {
        console.log(winPatterns);
        console.log("Box was clicked..");
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled=true;
        checkWinner();

    });
});

const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");

}
const checkWinner = () =>{
            for(let pattern of winPatterns){
                let pos1 = boxes[pattern[0]].innerText;
                let pos2 = boxes[pattern[1]].innerText;
                let pos3 = boxes[pattern[2]].innerText;

                if(pos1 != "" && pos2 != "" && pos3 != ""){
                    if(pos1 === pos2 && pos2 === pos3){
                        console.log("The winner is Player: "+pos1);
                        showWinner(pos1);
                    }
                }
            }
        }
newGameButton.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);


const showWinner = (winner) =>{
    msg.innerText = `Congratulations!! The Winner is Player ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
/*
const board = Array(9).fill(""); // Represents cells 0 through 8

function checkWin(index, player) {
  const row = Math.floor(index / 3);
  const col = index % 3;

  // 1. Check current row
  if (board[row * 3] === player && board[row * 3 + 1] === player && board[row * 3 + 2] === player) {
    return true;
  }

  // 2. Check current column
  if (board[col] === player && board[col + 3] === player && board[col + 6] === player) {
    return true;
  }

  // 3. Check main diagonal (0, 4, 8)
  if (row === col) {
    if (board[0] === player && board[4] === player && board[8] === player) {
      return true;
    }
  }

  // 4. Check anti-diagonal (2, 4, 6)
  if (row + col === 2) {
    if (board[2] === player && board[4] === player && board[6] === player) {
      return true;
    }
  }

  return false;
}*/
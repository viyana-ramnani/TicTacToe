let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-btn");
let newGameButton = document.querySelector("#new-game-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPatterns = [
    [0,1,2], 
    [0,3,6], 
    [0,4,8], 
    [1,4,7], 
    [2,4,6], 
    [2,5,8], 
    [3,4,5], 
    [6,7,8]
];
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

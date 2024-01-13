let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX playerO

let count = 0;
let yes;

const winPatterns =
[
      [0,1,2],
      [0,3,6],
      [0,4,8],
      [1,4,7],
      [2,5,8],
      [2,4,6],
      [3,4,5],
      [6,7,8],

];

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turnO)  //player O turns
        {
            box.innerText="O";
            box.style.color = "red";
            turnO = false;
        }
        else  //player X turns
        {
            box.innerText="X";
            box.style.color = "green";
            turnO = true;
        }    
        box.disabled = true; //once box is clicked it will get disabled now user cannot change it
    
        checkWinner();
        count = count +1;
        Draw();
    });
});


const checkWinner = () =>{
    for(let pattern of winPatterns)
    {   
     let pos1Val = boxes[pattern[0]].innerText;
     let pos2Val = boxes[pattern[1]].innerText;
     let pos3Val = boxes[pattern[2]].innerText;
   

    if(pos1Val!="" && pos2Val!="" && pos3Val!="")
    {
        if(pos1Val === pos2Val && pos2Val === pos3Val)
        {
            
            showWinner(pos1Val);
        }
    }
    
  }
    yes = true;
};

const showWinner = (winner) => {
    msg.innerText =`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {
    for(let box of boxes)
    {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText="";
    }
};

const resetGame = () =>
{
    turnO =true;
    enableBoxes();
    msgContainer.classList.add("hide");
};


newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

const Draw = () => {
    if(count === 9 &&  (yes))
    {
        showDraw();
    }
};

const showDraw = () => {
   msg.innerText ="Match is DRAW!!";
   msgContainer.classList.remove("hide");
   count = 0;
   disableBoxes();
}
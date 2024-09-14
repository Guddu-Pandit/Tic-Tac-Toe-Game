let btns = document.querySelectorAll(".btn");
let rstbtn = document.querySelector(".rst-btn");
let newbtn = document.querySelector(".new-btn");
let  winmsg= document.querySelector(".win-msg");
let msg = document.querySelector(".msg");


let playerO = true;
count = 0;

const winPattern =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const rstgame = () => {
    playerO = true;
    enablebtns();
    winmsg.classList.add("hidden");
};

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(playerO){
        btn.innerText = "X";
        playerO = false;
        }
        else{
            btn.innerText = "O";
            playerO = true;
        }
        btn.disabled = true;
        // checkWinner();
        count++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
          gameDraw();
        }
    });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    winmsg.classList.remove("hidden");
    disableBoxes();
  };

const disablebtns = () => {
    for (let btn of btns) {
        btn.disabled = true;
    }
};

const enablebtns = () => {
    for (let btn of btns) {
        btn.disabled = false;
        btn.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    winmsg.classList.remove("hidden");
    disablebtns();
};

const checkWinner = () => {
    for(let pattern of winPattern){
       let val1 = btns[pattern[0]].innerText;
       let val2 = btns[pattern[1]].innerText;
       let val3 = btns[pattern[2]].innerText;

       if(val1 != "" && val2 !="" && val3 !="")
       {
          if(val1 === val2 && val2 === val3){ 
             showWinner(val1);
          }
       }
    }
};

newbtn.addEventListener("click", rstgame);
rstbtn.addEventListener("click", rstgame);
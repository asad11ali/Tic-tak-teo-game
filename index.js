let buttons = document.querySelectorAll('.btn');
let messageCon = document.querySelector('.meg');
let message = document.querySelector('h2');
let turno = true;

const winners = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const reset = () => {
    turno = true;
    gameStart();
}
buttons.forEach((btn) => {
    btn.addEventListener("click",()=>{
        if(turno===true){
            btn.innerText = "O";
            turno = false;
            
        }else{
            btn.innerText = "X";
            turno = true;
        }
        btn.disabled = true;
        checkWinner();
    })
});
let gameStart = () =>{
    for (btn of buttons) {
        btn.disabled = false; 
        btn.innerText = "";
        messageCon.classList.add("hide");
    }
}
let gameover = () =>{
    for (btn of buttons) {
        btn.disabled = true; 
    }
}

let showWinner = (winner) =>{
    message.innerText =`CONGRATULATIONS WINNER IS "${winner}"`
    messageCon.classList.remove("hide");
    gameover();
}
const checkWinner = () => {
    for (let patten of winners) {
        let pos1 = buttons[patten[0]].innerText;
        let pos2 = buttons[patten[1]].innerText;
        let pos3 = buttons[patten[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
        }
    }
}
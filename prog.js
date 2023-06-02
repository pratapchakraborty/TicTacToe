console.log("Tic Tac Toe");
// let bgmusic = new Audio("Media/gamemusic.mp3");
let newturn = new Audio("Media/turn.mp3");
// let gameover = new Audio("Media/GameOver.mp3");
let turn = "X";
let gameisover = false;

//turn changing function
const changeTurn = () => {
    return turn === "X" ? "O" : "X"; 
};

//winner checking function
const winnerCheck = () => {
    let btext = document.getElementsByClassName("text");
    let wins =[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    wins.forEach(e =>{
        if((btext[e[0]].innerText === btext[e[1]].innerText) && (btext[e[2]].innerText === btext[e[1]].innerText) && btext[e[0]].innerText !== ""){
            document.querySelector('.info').innerText = btext[e[0]].innerText + " Won";
            gameisover = true;
            document.querySelector('.imga').getElementsByTagName('img')[0].style.width = "200px";
        }
    });
};

//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.text');
    element.addEventListener('click', () =>{
       if(boxtext.innerText === ''){
        boxtext.innerText = turn;
        turn = changeTurn();
        newturn.play();
        winnerCheck();
        if(!gameisover){
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        };
       };
    });
});

//add a reset button

reset.addEventListener('click', () =>{
    let boxtext = document.querySelectorAll('.text');
    Array.from(boxtext).forEach(element =>{
        element.innerText = "";
    });
    turn = "X";
    gameisover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imga').getElementsByTagName('img')[0].style.width = "0px";
});
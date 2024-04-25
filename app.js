let gameseq = [];
let userseq = [];
let h3 = document.querySelector("h3");
let btns = ["red", "yellow", "green", "purple"];

let start = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function(){
    if (start == false){
        console.log("game started");
        start = true;
        
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);

}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);

}

function levelUp(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIndx = Math.floor(Math.random()*3);
    let randColor = btns[randIndx];
    let randbtn = document.querySelector(`.${randColor}`)
    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randbtn);
    // console.log(randIndx);
    // console.log(randColor);
    // console.log(randbtn);
}

function checkAns(idx){
    // console.log(`curr lev  : ${level}`);
    
    if (userseq[idx] === gameseq[idx]){
        if (userseq.length == gameseq.length){
           setTimeout( levelUp, 1000);
        }
    } else {
        h2.innerHTML=`Game Over! Your Score was <b>${level}<b> <br> Press any Key to Restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor="white";
        }, 150);
        restart();
    }
}

function btnPress(){
    let btn = this;
    // console.log(this);
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function restart() {
    start = false;
    gameseq = [];
    userseq = [];
    level= 0;
}

function highScore(){
    let highScore = 0;
    if(level>highScore){
        h3.innerText = `high score is ${level}` 
    }
}


let SCORE=0;
const picks= document.querySelectorAll(".picks")
const rpx=document.querySelector(".body-rpx")
const selected=document.querySelector(".the-selected")
const ref=document.getElementById('ref');


const computerChoice=[{
    choice:"Rock",
    img:"./img/Rock.png"
},{
    choice:"Paper",
    img:"./img/Paper.png"
},{
    choice:"Scissors",
    img:"./img/Scissors.png"
}]


const getComputerChoice =()=>{
    let num=Math.floor(Math.random()*3);
    return num;
}
getComputerChoice();

function playround(computerSelection, playerSelection){
   
    switch(true){
        case (playerSelection === computerSelection):
        ref.innerText= "It's a draw";
        scoreCounter(SCORE);
        break;
        case (playerSelection.includes("Rock") && computerSelection.includes("Scissors")):
        case (playerSelection.includes("Scissors") && computerSelection.includes("Paper")):
        case (playerSelection.includes("Paper") && computerSelection.includes("Rock")):
            ref.innerText="YOU WON";
            scoreCounter(SCORE + 1);
        break;
        default:
            ref.innerText ="YOU LOSE";
            scoreCounter(SCORE-1);
    }
}

picks.forEach((pick)=>{
    pick.addEventListener("click", (e)=>{
        let num=getComputerChoice();
        let computerSelection=computerChoice[num]
        let itemPicked=e.target
        rpx.style.display="none";
        selected.style.display="flex"
        if(itemPicked){
            document.getElementById("playerPicked").src=itemPicked.src;
            document.getElementById("compPicked").src=computerChoice[num].img;
          
              let playerSelection=itemPicked.id;
            let computerSelection=computerChoice[num].choice;
            playround(computerSelection, playerSelection);
        } 
    }
    
)
})

const playAgain=document.querySelector(".btn-playAgain")
playAgain.addEventListener("click", ()=>{
    rpx.style.display="flex";
    selected.style.display="none";

})

const scoreCounter=(score)=>{
    SCORE=score;
    let scoreText=document.querySelector("#scores");
    scoreText.innerHTML=score
}

let startingMinutes=2;
let time=startingMinutes *60;

const countdownEl= document.querySelector('#countdown')
const updateCount=()=>{
    let minutes = Math.floor(time/60);
    let seconds=time%60;
    if(seconds < 10){
        seconds= "0" + seconds;
    }
    countdownEl.innerHTML =`${minutes}: ${seconds}`;
    if(time>0){
        time--
    }
   if(time===0){
    setGameOver()
   }
}


const overlay = document.querySelector(".section-overlay");


const start =document.querySelector(".start")
start.addEventListener("click", ()=>{
    overlay.classList.add("hide")
    setInterval(updateCount,1000);

})
let win= document.querySelector(".the-winning")
const setGameOver =()=>{
     scoreCounter(SCORE);
     let amount=document.querySelector(".amount");
     if(SCORE <5){
        amount.innerHTML="$0"
        win.classList.add("transition")
        win.style.display="block"

     }
     if(SCORE >=5){
        amount.innerHTML="$100"
        win.classList.add("transition")
        win.style.display="block"
     }if(SCORE >=10){
        amount.innerHTML="$200"
        win.classList.add("transition")
        win.style.display="block"
     }if(SCORE >=15){
        amount.innerHTML="$500"
        win.classList.add("transition")
        win.style.display="block"
     }
}


// type of event listener change,input, click, transistioned 
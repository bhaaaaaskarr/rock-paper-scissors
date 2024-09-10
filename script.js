let userScore=0;
let compScore=0;
let userScoreDisp=document.querySelector('#user-score');
let compScoreDisp=document.querySelector('#comp-score');



let dispMsg=document.querySelector('#msg');
let choices = document.querySelectorAll('.icon');

let msg=dispMsg.innerText

let compChoice=()=>{
    return options[Math.floor(Math.random()*3)];
};

let draw=()=>{
    console.log('Game was a draw.');
    dispMsg.innerText='Game was a draw.';
    dispMsg.style.backgroundColor='#EDAE49'
};
const showWinner=(userWin,userChoice,cChoice)=>{
    if(userWin){
        userScore++;
        userScoreDisp.innerText=userScore;
        dispMsg.style.backgroundColor='green';
        dispMsg.innerText=`You won, your ${userChoice} beat ${cChoice}.`;
    }
    else{
        compScore++;
        compScoreDisp.innerText=compScore;
        dispMsg.style.backgroundColor='red';
        dispMsg.innerText=`You lose, ${cChoice} beats your ${userChoice}.`;
    }
};
const options=['rock','paper','scissor'];
let playGame=(userChoice)=>{
    console.log('user =', userChoice);
    const cChoice=compChoice();
    console.log('comp=',cChoice);
    
    if(userChoice===cChoice){
        draw();
    }else{
        let userWin=true;
        if(userChoice==='rock'){
            userWin= cChoice==='paper'?false:true;
        }else if(userChoice==='paper'){
            userWin=cChoice==='scissor'?false:true;
        }else{
            userWin=cChoice==='rock'?false: true;
        }
        showWinner(userWin,userChoice,cChoice);
    };

};

choices.forEach((i)=>{
    i.addEventListener('click',()=>{
       const userChoice=i.getAttribute("id");
        // console.log('comp = ', compChoice());
        playGame(userChoice);
        // check();
    }); 
// let check=()=>{
//     if(userChoice===compChoice()){
//         console.log('its a draw');
//     }else{
//         console.log('no draw')
//     }
// }

});

let userScore = 0;
let compScore=0;
let choices=document.querySelectorAll('.choice');
let choice=['Rock','Paper','Scissors'];
let msg=document.querySelector(".msg");
let userScoreboard=document.querySelector('#user-score');
let compScoreboard=document.querySelector('#computer-score');
const playgame=(userchoice) => {
    let compChoice=choice[Math.floor(Math.random()*3)];
    if(userchoice===compChoice){
        msg.innerText="It's a tie!. Try again";
        msg.style.backgroundColor='black';
    }
    else{
        let userwin=true;
        if(userchoice==='Rock'){
            userwin= compChoice==='Scissors'? true:false;
        }
        else if(userchoice==='Paper'){
            userwin= compChoice==='Rock'? true:false;
        }
        else if(userchoice==='Scissors'){
            userwin= compChoice==='Paper'? true:false;
        }
        if(userwin){
            msg.innerText=`You win! ${userchoice} beats ${compChoice}`;
            msg.style.backgroundColor='green';
            userScore++;
            userScoreboard.innerText=userScore;
        }
        else{
            msg.innerText=`You lose! ${compChoice} beats ${userchoice}`;
            msg.style.backgroundColor='red';
            compScore++;
            compScoreboard.innerText=compScore; 
        }
    }

};
choices.forEach((choice) =>{
   
     choice.addEventListener('click',()=>{
        let userChoice=choice.id;
        playgame(userChoice);
     });
});

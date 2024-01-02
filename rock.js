userScore=0;    //step 1
compScore=0;

let userScorepara=document.querySelector("#user-score");     //step 2
let compScorepara=document.querySelector("#comp-score");
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");

const gencompChoice=()=>{                             //  step 5
    const options=["rock","paper","scissors"];
   const randIndex= Math.floor( Math.random()*3);//computer can access any random number with help of math.random method
    return options[randIndex];

}
const drawGame=()=>{
    // console.log("game was draw");
    msg.innerText="Game was draw , play again";
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin)=>{                                           //step10
    if(userWin){
      userScore++;
      userScorepara.innerText=userScore;                               //11step11
        // console.log("you win!")
        msg.innerText="you Win!";
        msg.style.backgroundColor="green";
    }
    else{
      compScore++;
      compScorepara.innerText=compScore;                                  //step12           
        // console.log("computer is win");
        msg.innerText="computer Win!";
        msg.style.backgroundColor="red";
    }

}

const playGame=(userChoice)=>{                                    //step 4
        console.log("user choice=", userChoice);
        //to Generate computer choice
        const compChoice=gencompChoice();                         //step5
        console.log("computer choice=", compChoice);
      if(userChoice===compChoice){                                //step 7 
        //Draw Game
        drawGame();
      }  
      else{
        let userWin=true;                                       //step8
        if(userChoice==="rock"){
          userWin=  compChoice==="paper"? false:true;
        }
        else if(userChoice==="paper"){
          userWin=  compChoice==="scissors"? false:true;
        }
        else{
           userWin= compChoice==="rock"? false:true;
        }
        showWinner(userWin);                                        //  step9
      }

}

choices.forEach((choice) =>{                                         //step3
    console.log(choice);
    choice.addEventListener("click",() =>{                  
        const userChoice=choice.getAttribute("id");
       
           playGame(userChoice);
    });
});
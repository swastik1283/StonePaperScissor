let userScore=0;
let compscore=0;

document.addEventListener("DOMContentLoaded",()=>{
const choices=document.querySelectorAll(".choice img  ");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const genComp=()=>{
    const options=['rock','scissor','paper'];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}
const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="It's a Draw";
    msg.style.backgroundColor="#081b31";
}
const showwin=(userWin,Userchoice,compchoice)=>{
     if(userWin){
        userScore++;
        userscorepara.innerText=userScore;
        msg.innerText=`You win ${Userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
     }else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`You Lose ${compchoice} beats ${Userchoice}`;
        msg.style.backgroundColor="red";
     }
}
const playgame=(Userchoice)=>{
    const compchoice=genComp();
    if (Userchoice==compchoice){
        drawgame();

    }else{
    let userWin=true;
    if(Userchoice=="rock"){
        userWin=compchoice==="paper"?false:true;
    }else if(Userchoice=="scissors"){
        userWin=compchoice==="rock"?false:true;
        
    }else{
        userWin=compchoice==="scissors"?false:true;
    }

    showwin(userWin,Userchoice,compchoice);
        
    }
    
}
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => {
       const Userchoice=choice.getAttribute("id"); 
       playgame(Userchoice);
    });
 });
});
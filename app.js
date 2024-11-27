let userScore = document.querySelector("#user-score");
let comScore = document.querySelector("#com-score");

let Ucounter = 0;
let Ccounter = 0;

let msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");

const gameDraw = () => {
    msg.innerText = "Game is Drawn. Play Again";
    msg.style.backgroundColor = "#003049";
};

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        msg.innerText = `You Won. Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        Ucounter++;
        userScore.innerText = Ucounter;
    }else{
        msg.innerText = `You Lost. ${compChoice} Beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        Ccounter++;
        comScore.innerText = Ccounter;
    }
}

const playGame = (userChoice) => {

    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        gameDraw();
    }else{
        let userWin = false;

        if(userChoice === "Rock"){
            userWin = (compChoice === "Scissors");
        }
        else if(userChoice === "Paper"){
            userWin = (compChoice === "Rock");
        }else{
            userWin = (compChoice === "Paper");
        }

        showWinner(userWin,userChoice,compChoice);
    }
};

const genCompChoice = () => {
    const options = ["Rock","Paper","Scissors"];
    const idx=Math.floor(Math.random()*3);
    return options[idx];
};

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
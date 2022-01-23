function computerPlay(){
    let rand = Math.floor(Math.random() * 3);
    let compSelect = rand;
    // switch(rand){
    //     case 0:
    //         compSelect = "rock";
    //         break;
    //     case 1:
    //         compSelect = "paper";
    //         break;
    //     case 2:
    //         compSelect = "scissors";
    //         break;
    //     default:
    //         compSelect = null;
    // }
    // console.log(compSelect);
    return compSelect;
}

function playRound(playerSelection,computerSelection){
    playerSelection.toLowerCase();

    if(playerSelection === "rock") playerSelection = 0;
    if(playerSelection === "paper") playerSelection = 1;
    if(playerSelection === "scissors") playerSelection = 2;

    let computerString;
    if(computerSelection === 0) computerString = "rock";
    if(computerSelection === 1) computerString = "paper";
    if(computerSelection === 2) computerString = "scissors";

    let resultString;

    if(playerSelection - computerSelection === 1 || playerSelection - computerSelection === -2)
        resultString = "computer chose "+ computerString +", you win!";
    else if(playerSelection - computerSelection === 0)
        resultString = "computer chose " + computerString + ", it's a tie.";
    else
        resultString = "computer chose " + computerString + ", you lose :(";

    return resultString;
}

function game(){
    for (let index = 0; index < 5; index++) {
        const playerSelection = prompt("choose rock, paper or scissors!");
        const computerSelection = computerPlay();
        alert(playRound(playerSelection, computerSelection));
    }
}


game();





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

    let result

    if(playerSelection - computerSelection === 1 || playerSelection - computerSelection === -2)
        result = 1;
    else if(playerSelection - computerSelection === 0)
        result = 0;
    else
        result = -1;

    return result;
}

function convertToString(index){
    switch(index){
        case 0:
            index = "rock";
            break;
        case 1:
            index = "paper";
            break;
        case 2:
            index = "scissors";
            break;
        default:
            index = null;
    }

    return index;
}

function game(){
    let computerScore = 0, playerScore = 0;

    for (let index = 0; index < 5; index++) {
        const playerSelection = prompt("choose rock, paper or scissors!");
        const computerSelection = computerPlay();
        const computerSelectionString = convertToString(computerSelection);
        
        let result = playRound(playerSelection, computerSelection);

        if(result === 1) {
            alert("computer chose " + computerSelectionString + " ,you win!");
            playerScore++;
        }
        else if(result === -1) {
            alert("computer chose " + computerSelectionString + " ,you lose :(");
            computerScore++;
        }else
            alert("computer chose " + computerSelectionString + " ,it's a tie.");

    }

    alert("player score: " + playerScore + "computer score: " + computerScore);

    if(playerScore > computerScore)
        alert("you win!");
    else
        alert("you lose :(");
    
}


game();





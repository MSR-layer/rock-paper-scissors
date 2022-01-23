function computerPlay(){
    let rand = Math.floor(Math.random() * 3);
    let compSelect;
    switch(rand){
        case 0:
            compSelect = "rock";
            break;
        case 1:
            compSelect = "paper";
            break;
        case 2:
            compSelect = "scissors";
            break;
        default:
            compSelect = null;
    }
    console.log(compSelect);
    return compSelect;
}

function playRound(){

}

function game(){

}


const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

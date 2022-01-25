function computerPlay(){
    return Math.floor(Math.random() * 3);;
}

function playRound(playerSelection,computerSelection){
    
    let result;

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

function convertToInt(choice){
    choice.toLowerCase();

    switch(choice){
        case 'rock':
            choice = 0;
            break;
        case 'paper':
            choice = 1;
            break;
        case 'scissors':
            choice = 2;
            break;
        default:
            choice = null;
    }

    return choice;
}
let computerScore = 0, playerScore = 0;

function game(selection){
    if(playerScore === 5 || computerScore === 5) return;

    const playerSelection = selection;
    const computerSelection = computerPlay();
    const playerSelectionInt = convertToInt(playerSelection);
    const computerSelectionString = convertToString(computerSelection);
    
    let result = playRound(playerSelectionInt, computerSelection);

    if(result === 1) {
        alert("computer chose " + computerSelectionString + " ,you win!");
        playerScore++;
        playerNode.textContent = `${playerScore}`;
    }
    else if(result === -1) {
        alert("computer chose " + computerSelectionString + " ,you lose :(");
        computerScore++;
        computerNode.textContent = `${computerScore}`;
    }else
        alert("computer chose " + computerSelectionString + " ,it's a tie.");
    
}

let playerDiv = document.getElementById('playerScore');
let compDiv = document.getElementById('computerScore');

let playerNode = document.createElement('div');
let computerNode = document.createElement('div');

playerNode.textContent = `${playerScore}`;
computerNode.textContent = `${computerScore}`;

playerDiv.appendChild(playerNode);
compDiv.appendChild(computerNode);

const buttons = Array.from(document.querySelectorAll('.button'));
buttons.forEach(button => button.addEventListener('click', () => {
    
    game(button.id);

    
}));




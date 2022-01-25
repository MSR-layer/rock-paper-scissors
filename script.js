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
    
    
    

    


    const playerSelection = selection;
    const computerSelection = computerPlay();
    const playerSelectionInt = convertToInt(playerSelection);
    const computerSelectionString = convertToString(computerSelection);
    
    let result = playRound(playerSelectionInt, computerSelection);

    if(result === 1) {
        alert("computer chose " + computerSelectionString + " ,you win!");
        playerScore++;
        playerNode.textContent = `player score: ${playerScore}`;
    }
    else if(result === -1) {
        alert("computer chose " + computerSelectionString + " ,you lose :(");
        computerScore++;
        computerNode.textContent = `computer score: ${computerScore}`;
    }else
        alert("computer chose " + computerSelectionString + " ,it's a tie.");

    // alert("player score: " + playerScore + " computer score: " + computerScore);

    // if(playerScore > computerScore)
    //     alert("you win!");
    // else if(playerScore < computerScore)
    //     alert("you lose :(");
    // else
    //     alert("it's a tie :/.")
    
}

//const buttons = Array.from(document.querySelectorAll('.button'));

let resultNode = document.getElementById('results');
let playerNode = document.createElement('p');
let computerNode = document.createElement('p');

playerNode.textContent = `player score: ${playerScore}`;
computerNode.textContent = `computer score: ${computerScore}`;

resultNode.appendChild(playerNode);
resultNode.appendChild(computerNode);

const buttons = Array.from(document.querySelectorAll('.button'));
buttons.forEach(button => button.addEventListener('click', () => {
    
    game(button.id);
}));

// const rock = document.querySelector('#rock');
// rock.addEventListener("click", () => {
//     console.log(rock.id)
// });



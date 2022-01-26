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

function reloadGame(){
    computerScore = 0;
    playerScore = 0;

    playerNode.textContent = `${playerScore}`;
    computerNode.textContent = `${computerScore}`;

    const optionsDiv = document.getElementById('promptDiv');
    optionsDiv.parentNode.removeChild(optionsDiv);

    console.log('game reload');
}

function gameExit(){
    const optionsDiv = document.getElementById('promptDiv');
    optionsDiv.parentNode.removeChild(optionsDiv);
    buttons.forEach(button => button.removeEventListener('click',onClick));
    
}

function playagain(){
    const mainDiv = document.getElementById('results');
    const promptDiv = document.createElement('div');
    promptDiv.id = 'promptDiv';
    const yes = document.createElement('button');
    const no = document.createElement('button');
    const prompt = document.createElement('div');
    prompt.textContent = 'play Again?';

    yes.textContent = 'yes';
    no.textContent = 'no';

    yes.classList.add('option');
    no.classList.add('option');

    yes.setAttribute('id','yes');
    no.setAttribute('id','no');

    promptDiv.append(prompt, yes, no);

    mainDiv.appendChild(promptDiv);

    let choice;
    const options = Array.from(document.querySelectorAll('.option'));
    options.forEach(button => button.addEventListener('click', () =>{

        if(button.id === 'yes'){
            reloadGame();
        }else if(button.id === 'no')
        {
            gameExit();
            console.log('game Exit');
        }
        
    }));

}

let computerScore = 0, playerScore = 0;

function game(selection){
    
    const playerSelection = selection;
    const computerSelection = computerPlay();
    const playerSelectionInt = convertToInt(playerSelection);
    const computerSelectionString = convertToString(computerSelection);
    
    const result = playRound(playerSelectionInt, computerSelection);

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


function onClick(button){
    if(computerScore>=2||playerScore>=2) 
    {
        playagain();
    }

    game(button.id);
}

buttons.forEach(button => button.addEventListener('click', onClick(this)));
// buttons.forEach(button => button.addEventListener('click', function onClick(){

//     if(computerScore>=2||playerScore>=2) 
//     {
//     //     let choice = playagain();
//     //     if( choice === 'no') {
//     //         return;
//     //     }
//     //     else if(choice === 'yes'){
//     //         computerScore = 0;
//     //         playerScore = 0;
//     //     }

//     //    const promptDiv = document.getElementById('promptDiv');
//     //    promptDiv.parentNode.removeChild(promptDiv);
//             playagain();
//     }
    
//     game(button.id);

// }));








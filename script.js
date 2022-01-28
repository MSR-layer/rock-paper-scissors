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


function playagain(){
    const mainDiv = document.getElementById('results');
    const promptDiv = document.createElement('div');
    promptDiv.id = 'promptDiv';
    const yes = document.createElement('button');
    const no = document.createElement('button');
    const prompt = document.createElement('div');
    prompt.textContent = 'play Again?';

    prompt.classList.add('text');

    yes.textContent = 'yes';
    no.textContent = 'no';

    yes.classList.add('option');
    no.classList.add('option');

    yes.setAttribute('id','yes');
    yes.classList.add('yesNoButtons');
    yes.classList.add('text');

    no.setAttribute('id','no');
    no.classList.add('yesNoButtons');
    no.classList.add('text');

    const yesNoDiv = document.createElement('div');
    yesNoDiv.setAttribute('id','yesNoDiv');

    yesNoDiv.append(yes, no);

    promptDiv.append(prompt, yesNoDiv);

    mainDiv.appendChild(promptDiv);

    const options = Array.from(document.querySelectorAll('.option'));
    options.forEach(button => button.addEventListener('click', () =>{

        if(button.id === 'yes'){
            reloadGame();
            playagainCall = 0;
            document.querySelector('.alert').textContent = '';
        }else if(button.id === 'no')
        {
            gameExit();
            console.log('game Exit');
        }
        
    }));

}
let stopGame = 0;
let computerScore = 0, playerScore = 0;

function game(selection){
    
    const playerSelection = selection;
    const computerSelection = computerPlay();
    const playerSelectionInt = convertToInt(playerSelection);
    const computerSelectionString = convertToString(computerSelection);
    
    const result = playRound(playerSelectionInt, computerSelection);

    const results = document.getElementById('results');

    let alertString = '';

    if(result === 1) {
        alertString = "computer chose " + computerSelectionString + " ,you win!"
        //alert("computer chose " + computerSelectionString + " ,you win!");
        playerScore++;
        playerNode.textContent = `${playerScore}`;
    }
    else if(result === -1) {
        alertString = "computer chose " + computerSelectionString + " ,you lose :("
        //alert("computer chose " + computerSelectionString + " ,you lose :(");
        computerScore++;
        computerNode.textContent = `${computerScore}`;
    }else
        alertString = "computer chose " + computerSelectionString + " ,it's a tie."
    
    //results.appendChild(alert);

    return alertString;
    
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

function gameExit(){
    const optionsDiv = document.getElementById('promptDiv');
    optionsDiv.parentNode.removeChild(optionsDiv);
    stopGame = 1;
}

let alert = document.createElement('div');
alert.classList.add('text','alert');

const one = document.querySelector('.one');
one.appendChild(alert);

let playagainCall = 0
buttons.forEach(button => button.addEventListener('click', function onClick() {

    if(stopGame !== 1 && playagainCall !== 1){
        
        alert.textContent = game(button.id);

        if(computerScore>=2||playerScore>=2){ 
            playagainCall = 1;    
            playagain();
        }
    }

}));








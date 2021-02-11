// initialize
let playerImageContainer = document.querySelector('.player-image');
let computerImageContainer = document.querySelector('.computer-image');
let playerScore = 0;
let computerScore = 0;
let player = document.querySelector('.player-score');
let computer = document.querySelector('.computer-score');
let body = document.querySelector('body');
let playerImage = document.querySelector('.player-image > img');
let computerImage = document.querySelector('.computer-image > img');
let startGame = document.querySelector('.welcome button');
let buttons = document.querySelectorAll('.btn');

// start game
startGame.addEventListener('click', (e) => {
    e.target.parentNode.style.display = "none";
    buttons.forEach((button) => {
        button.classList.add('btn-animation');
    })
})

// show the initial score
showScore(playerScore, computerScore);

// add event listeners to the buttons
buttons.forEach((button) => {
    button.addEventListener('click', playRound);
}) 


// define the selection of the computer
function computerPlay() {
    let option = ["rock", "paper", "scissors"];
    return option[Math.floor(Math.random()*3)];
}

// define the rules for the game

function playRound(e) {

    // get the user selection and show the image
    let playerSelection = e.target.textContent;
    // get the computer selection and show the image
    let computerSelection = computerPlay();

    showImage(playerSelection, computerSelection);
    let winner;
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            winner = "draw";
        } else if(computerSelection == "paper") {
            winner = "computer";
        } else {
            winner = "player";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            winner = "player";
        } else if (computerSelection == "paper") {
            winner = "draw";
        } else {
            winner = "computer";
        }
    } else if (playerSelection == "scissors"){
        if (computerSelection == "rock") {
            winner = "computer";
        } else if (computerSelection == "paper") {
            winner = "player";
        } else {
            winner = "draw";
        }
    } else {
        alert("Selection not recognized!!!");
    }

    if (winner == "player") {
        playerScore += 1;
    } else if (winner == "computer") {
        computerScore += 1;
    }
        
    // update the points on the screen
    showScore(playerScore, computerScore);
    
    if (playerScore == 5 || computerScore == 5) {
        let h1 = document.querySelector('h1');
        let winner = (playerScore == 5) ? "player" : "computer";
        let finalResult = document.createElement('div');
        finalResult.classList.add('winner');
        let restartButton = document.createElement('button');
        restartButton.classList.add('restart');
        restartButton.textContent = "restart"
        finalResult.appendChild(document.createTextNode(`${winner.toUpperCase()} WINS!!`));
        finalResult.appendChild(restartButton);
        restartButton.addEventListener('click', restartGame);
        body.insertBefore(finalResult,h1);
    }
}

// show the score
function showScore(playerScore, computerScore) {
    player.textContent = `player score: ${playerScore}`;
    computer.textContent = `computer score: ${computerScore}`;
}

//show the image
function showImage(playerSelection, computerSelection) {
    playerImage.src = `./images/${playerSelection}.png`;
    computerImage.src = `./images/${computerSelection}.png`;

    console.log(playerImageContainer.classList);
    playerImageContainer.classList.add('player-animation');

    playerImageContainer.addEventListener('animationend', (e) => {
    playerImageContainer.classList.remove('player-animation');
    console.log(playerImageContainer.classList);
    })

    computerImageContainer.classList.add('computer-animation');
    computerImageContainer.addEventListener('animationend', (e) => {
        computerImageContainer.classList.remove('computer-animation')
    });

}

// restart the game
function restartGame(e) {
    playerScore = 0;
    computerScore = 0;
    showScore(playerScore, computerScore);
    body.removeChild(e.target.parentNode);
    computerImage.src = "";
    playerImage.src = "";
}
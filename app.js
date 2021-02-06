// define the selection of the computer

function computerPlay() {
    let option = ["rock", "paper", "scissors"];
    return option[Math.floor(Math.random()*3)];
}

// define the rules for the game and the posible results
// 0, 1, 2 are beeing added to the returned messages to identify the winner
// 0 for draw, 1 if the player wins, 2 if the computer wins

function playGame(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return "0Draw";
        } else if(computerSelection == "paper") {
            return "2You lose! papers beats rock.";
        } else {
            return "1you win! rock beats scissors";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "1You win! paper beats rock.";
        } else if (computerSelection == "paper") {
            return "0Draw!";
        } else {
            return "2you lose! scissors beats paper";
        }
    } else if (playerSelection == "scissors"){
        if (computerSelection == "rock") {
            return "2you lose! rock beats scissors";
        } else if (computerSelection == "paper") {
            return "1You win! scissors beatas paper";
        } else {
            return "0Draw!";
        }
    } else {
        alert("Selection not recognized!!!");
    }
}

// exceute the game 5 times and save the score to find a winner

function game() {
    let gameFinalResume = document.getElementById('gameResume');
    let gameResume = '';
    let playerSelections = [];
    let computerSelections = [];
    let i = 1;
    let playerScore = 0;
    let computerScore = 0;
    let winner;
    while (i <= 5) {
        playerSelection = prompt("choose between ROCK, PAPER or SCISSORS: ").toLowerCase();
        playerSelections.push(playerSelection);
        computerSelection = computerPlay();
        computerSelections.push(computerSelection);
        let result = playGame(playerSelection, computerSelection);
        console.log(`the player selection was: ${playerSelection}
The computer selection was: ${computerSelection}`);
        console.log(result.slice(1,));
        if (parseInt(result) == 1) {
            playerScore += 1
        } else if (parseInt(result) == 2) {
            computerScore += 1
        }
        i += 1
    }
    if (playerScore > computerScore) {
        winner = `You win, you have ${playerScore} points and computer has ${computerScore} points.`;
    } else if(playerScore < computerScore) {
        winner = `You lose, you have ${playerScore} points and computer has ${computerScore} points.`;
    } else {
        winner = `Draw, you have ${playerScore} points and computer has ${computerScore} points.`;
    }
    console.log(winner);
    gameResume = `${winner}<br>your selections are >> ${playerSelections.join(" - ")}<br>the computer selections are >> ${computerSelections.join(" - ")}`

    gameFinalResume.innerHTML = gameResume;

}

game()

// console.log(playGame(playerSelection, computerSelection));

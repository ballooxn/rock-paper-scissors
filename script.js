
let humanScore = 0;
let computerScore = 0;

function playGame() {
    let humanChoice;
    let computerChoice;

    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
}


function playRound(humanChoice, computerChoice) {
    console.log(humanChoice, computerChoice);
    
    switch (humanChoice) {
        // rock vs scissors
        case 0:
            if (computerChoice === 2) {
                humanScore += 1;
                console.log("You win! Rock beats scissors.");
            } else if (computerChoice === 1) {
                computerScore += 1;
                console.log("You lose! Paper beats rock.");
            } else {
                console.log("TIE!");
            }
            break;
        case 1:
            if (computerChoice === 0) {
                humanScore += 1;
                console.log("You win! Paper beats rock.");
            } else if (computerChoice === 2) {
                computerScore += 1;
                console.log("You lose! Scissors beats paper.");
            } else {
                console.log("TIE!");
            }
            break;
        case 2:
            if (computerChoice === 0) {
                computerScore += 1;
                console.log("You lose! Rock beats scissors.");
            } else if (computerChoice === 1) {
                humanScore += 1;
                console.log("You win! Scissors beats paper.");
            } else {
                console.log("TIE!");
            }
            break;
        default:
            console.log("Invalid choice. Please choose Rock, 1 Paper, or 2 Scissors.");
    }
    console.log("Your score: " + humanScore + "    Computer Score: " + computerScore);
    return;
}
// 0 is rock, 1 is paper, 2 is scissors

// Generates a number that is either 0, 1, or 2.
function getComputerChoice() {
    // Generate a random number using math.floor and math.random
    // Return that random number
    let number = Math.floor(Math.random() * 3)
    return number;
}
function getHumanChoice() {
    // Use prompt to get the human's input and store it in a variable
    // Use a switch statement to return the correct value depending on what the user typed.

    let input = prompt("Choice: ");
    input = input.toLowerCase();
    switch (input) {
        case 'scissors':
            return 2;
        case 'rock':
            return 0;
        case 'paper':
            return 1;
        default:
            alert("Please type one of the following: Rock, Paper, or Scissors")
            return false;
    }
}

playGame();

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelector("#buttons-container");
const results = document.querySelector("#result");
const score = document.querySelector("#score");

buttons.addEventListener("click", (e) => {
    let humanChoice = getHumanChoice(e.target.textContent);
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});


function playRound(humanChoice, computerChoice) {
    console.log(humanChoice, computerChoice);

    switch (humanChoice) {
        // rock vs scissors
        case 0:
            if (computerChoice === 2) {
                humanScore += 1;
                results.textContent = "You win! Rock beats scissors.";
            } else if (computerChoice === 1) {
                computerScore += 1;
                results.textContent = "You lose! Paper beats rock.";
            } else {
                results.textContent = "TIE!";
            }
            break;
        case 1:
            if (computerChoice === 0) {
                humanScore += 1;
                results.textContent = "You win! Paper beats rock.";
            } else if (computerChoice === 2) {
                computerScore += 1;
                results.textContent = "You lose! Scissors beats paper.";
            } else {
                results.textContent = "TIE!";
            }
            break;
        case 2:
            if (computerChoice === 0) {
                computerScore += 1;
                results.textContent = "You lose! Rock beats scissors.";
            } else if (computerChoice === 1) {
                humanScore += 1;
                results.textContent = "You win! Scissors beats paper.";
            } else {
                results.textContent = "TIE!";
            }
            break;
        default:
            results.textContent = "Invalid choice. Please choose Rock, 1 Paper, or 2 Scissors.";
    }
    if (humanScore === 5) {
        score.textContent = "Human wins!";
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5) {
        score.textContent = "Computer wins!"
        humanScore = 0;
        computerScore = 0;
    }
    else {
        score.textContent = "Your score: " + humanScore + "    Computer Score: " + computerScore;
    }
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
function getHumanChoice(input) {
    // Use prompt to get the human's input and store it in a variable
    // Use a switch statement to return the correct value depending on what the user typed.
    switch (input) {
        case 'Scissors':
            return 2;
        case 'Rock':
            return 0;
        case 'Paper':
            return 1;
        default:
            alert("Please type one of the following: Rock, Paper, or Scissors")
            return false;
    }
}

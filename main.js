const moves = ["rock", "paper", "scissors"];

const computerPlay = () => {
  return moves[Math.floor(Math.random() * moves.length)];
};

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "scissors") {
        return "You win! Rock beats scissors.";
      } else if (computerSelection === "paper") {
        return "You lose! Paper beats rock.";
      } else {
        return "It's a tie!";
      }
      break;
    case "paper":
      if (computerSelection === "rock") {
        return "You win! Paper beats rock.";
      } else if (computerSelection === "scissors") {
        return "You lose! Scissors beats paper.";
      } else {
        return "It's a tie!";
      }
      break;
    case "scissors":
      if (computerSelection === "paper") {
        return "You win! Scissors beats paper.";
      } else if (computerSelection === "rock") {
        return "You lose! Rock beats scissors.";
      } else {
        return "It's a tie!";
      }
      break;
    default:
      return "Please choose a valid move.";
  }
};

const game = () => {
  const moveButtons = document.querySelectorAll(".move-btn");
  moveButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const playerSelection = button.id;
      const computerSelection = computerPlay();
      const result = playRound(playerSelection, computerSelection);
      document.getElementById("result").textContent = result;
    });
  });
};

document.getElementById("play-btn").addEventListener("click", game);
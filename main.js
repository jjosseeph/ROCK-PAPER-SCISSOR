const choices = ["rock","paper","scissor"];
const winners =[];
  
function game() {
    for (let i = 1; i <= 5; i++) {
      playRound(i);
    }
    document.querySelection('button').textContent = 'Play new game';
    logWins();
}

function playRound(round) {
 const playerSelection = playerChoice();
 const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice() {
  let input = prompt("Type Rock, Paper, or scissors");
  while (input == null) {
    input = prompt("Type Rock, paper, or scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false){
    input = prompt("Type Rock, Paper, scissors. capitilization doesn't matter ");
    
    while(input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
    }  
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}
function validateInput(choice) {
    return choices.includes(choice);
    }

    function checkWinner(choiceP, choiseC){
        if(choiceP === choiseC){
            return "Tie";
      } else if (
          (choiceP === "rock" && choiceC == "scissors") ||
         (choiceP === "paper." && choiceC == "rock") ||
         (choiceP === "scissors" && choiceC == "paper")
         ) {
           return "Player";
        } else{
          return "Computer";
        }
     }

     function logWins(){
       let playerWins = winners.filter((items)=>item == "Player").length;
       let computerWins = winners.filter((items)=>item == "Computer").length;
       let tie = winners.filter((items)=>item == "Tie").length;
       console.log("Results:");
       console.log("Player Wins:",playerWins);
       console.log("Computer Wins:",computerWins);
       console.log("Ties:", ties);

  }
  function logRound(playerChoice,computerChoice,winner,round){
    console.log('Round:', round)
    console.log('Player choice:',playerChoice)
    console.log('Computer choice:',computerChoice)
    console.log(winner,'won the Round');
    console.log("...........................");
  }


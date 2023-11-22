function Computerplay () {
const choices = ["rock","paper","scissors"]
const Compchoice = choices[Math.floor(Math.random()*choices.length)]  
return Compchoice;
}
function playerplay () {
  let playerchoice = prompt("Do you choose 'Rock' (1), 'Paper' (2), 'Scissors' (3)?")
  if (playerchoice.toLowerCase() === 'rock' || parseInt(playerchoice) === 1) {
    playerchoice = 'Rock';
  }
  else if (playerchoice.toLowerCase() === 'paper' || parseInt(playerchoice) === 2) {
    playerchoice = 'Paper';
  }
  else if (playerchoice.toLowerCase() === 'scissors' || parseInt(playerchoice) === 3) {
    playerchoice = 'Scissors';
  }
  else if (playerchoice.toLowerCase() !== 'rock' || 'paper' || 'scissors' || parseInt(playerchoice) !== 1 ||2 || 3) {
       alert ('please enter your value again :)')
  }
  else {
    return 'not sure whats going on';
  }
  return playerchoice;
} 
let playerSelection = playerplay();
let computerSelection = Computerplay();

function playRound (playerSelection,computerSelection) {
    if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
        console.log("it's a draw!")
        //return the score so we can keep score and get winner at the end
        return computerscore +=1, playerscore +=1;
    }
    else if (computerSelection.toLowerCase() === 'rock' && playerSelection.toLowerCase() === 'scissors') {
        console.log("You lose! Rock beats scissors")
        return computerscore +=1;
    }
    else if (computerSelection.toLowerCase() === 'scissors' && playerSelection.toLowerCase() === 'rock') {
        console.log ("You win! Rock bats scissors :D")
        return playerscore +=1;

    } 
    else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "paper") {
        console.log("Scissors beats paper! You lose :(");
        return computerscore +=1;
     } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "scissors") {
        console.log("Scissors beats paper! You win :D");
        return playerscore +=1;
     } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock") {
        console.log("Paper beats rock! You lose :(");
        return computerscore +=1;
     } else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "paper") {
        console.log("Paper beats rock! You win :D");
        return playerscore +=1;
     } else {
        console.log("I'm not sure what, but something went worng :(");
     }
    }
    function game () {
        for (let i = 0; i < 5; i++) {
            const playerSelection = playerplay();
            const computerSelection = Computerplay();
            // Call playRound function, passing in newly returned values
            // from the playerPlay and computerPlay functions
            const currentRound = playRound(playerSelection, computerSelection);
            // Log our result
            console.log(currentRound);
       }}
       function getWinner() {
         playerscore = 0;
        computerscore = 0;
        const getWinner = game();
        if (playerscore>computerscore) {
            console.log('You win!     (You: ' + playerscore + '  Computer: ' + computerscore + 
                ')');}

        else {console.log('You lose...  (You: ' + playerscore + '  Computer: ' + computerscore + 
        ')');}
        }
      
       console.log(getWinner())
    





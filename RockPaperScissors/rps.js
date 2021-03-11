let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let roundNum = 0;
let buttons = document.querySelectorAll(".button");
let choices = ["Water", "Earth", "Fire", "Air"]

const computerPlay = () =>{
    return choices[~~(Math.random() * choices.length)];
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const img = button.querySelector("img");
        playerSelection = img.alt.toLocaleLowerCase();
        playRound(playerSelection, computerSelection)
    })
});

const playRound = (playerSelection, computerSelection) => {
    computerSelection = computerPlay().toLowerCase()
    const history = document.getElementById('history');
    if(
        computerSelection == playerSelection ||
        playerSelection == computerSelection ||
        playerSelection == "earth" && computerSelection == "air" ||
        playerSelection == "fire" && computerSelection == "water" ||
        playerSelection == "water" && computerSelection == "fire" ||
        playerSelection == "air" && computerSelection == "earth"
        ){
            roundNum++;
        history.innerHTML += `<p> ${roundNum} Tie Game (${playerSelection} vs ${computerSelection})</p>`
    } else if(
        playerSelection == "air" && computerSelection == "water" ||
        playerSelection == "water" && computerSelection == "earth" ||
        playerSelection == "earth" && computerSelection == "fire" ||
        playerSelection == "fire" && computerSelection == "earth"
        ){
            roundNum++;
            playerScore ++;
            history.innerHTML += `<p>${roundNum} You won (${playerSelection} vs ${computerSelection})</p>`
            winCondition(playerScore, computerScore)
        } else {
            
            roundNum++;
            computerScore ++;
            history.innerHTML += `<p>${roundNum} Computer won (${playerSelection} vs ${computerSelection})</p>`
            winCondition(playerScore, computerScore)
        }
        updateResults()
}

const updateResults = () =>{
    const ps = document.getElementById('playerScore')
    const cs = document.getElementById('computerScore')

    ps.innerHTML = playerScore;
    cs.innerHTML = computerScore;
}

const winCondition = (playerScore, computerScore) =>{
    const playerChoices = document.getElementById('playerChoices');
    const PA = document.getElementById('playAgain');
    const score = document.getElementById('score');
    if(playerScore == 5){
        playerChoices.style.display = "none";
        PA.style.display = "block";
        score.innerHTML = `<h2>You won!</h2>`
        score.style.color ="green"
    } else if(computerScore == 5){
        playerChoices.style.display = "none";
        PA.style.display = "block";
        score.innerHTML = `<h2>You lost!</h2>`
        score.style.color ="red"
    }
}



const reset = () =>{
    location.reload();
    playerSelection;
    computerSelection;
    playerScore = 0;
    computerScore = 0;
    roundNum = 0;
}
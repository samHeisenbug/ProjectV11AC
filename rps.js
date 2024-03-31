let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () => {
	//Rock, Paper, Scissors
	const options = ["rock", "paper", "scissors"];
	const randIdx = Math.floor(Math.random() * 3);
	return options[randIdx];
}

const drawGame = () => {
	msg.innerText = "Game was  Draw! Try again...";
	msg.style.backgroundColor = "#081b31"
}

const showWiner = (userWin, userChoice, CompChoice) => {
	if (userWin){
		userScore++;
		userScorePara.innerText = userScore;
		msg.innerText = `You Win...! Your ${userChoice} beats ${CompChoice}`;
		msg.style.backgroundColor = "Green";
	}else{
		compScore++;
		compScorePara.innerText = compScore;
		msg.innerText = `You  Loose...! ${CompChoice} beats your ${userChoice}`;
		msg.style.backgroundColor = "Red";
	}
}

const playGame = (userChoice) => {
	//Generate computer choice
	const CompChoice = genComputerChoice();

	if(userChoice === CompChoice) {
		drawGame();
	}else{
		let userWin = true;
		if(userChoice === "rock") {
			//scissors or paper
			userWin = CompChoice === "paper" ? false : true;
		}else if(userChoice === "paper") {
			//rock, scissors
			userWin = CompChoice === "rock" ? true : false;
		}
		else{// scissors
			//paper, rock
			userWin = CompChoice==="paper" ? true : false;
		}
		showWiner(userWin, userChoice, CompChoice);
	}
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
		playGame(userChoice);
  });
});

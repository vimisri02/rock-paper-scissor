import React, { useEffect, useState } from "react";

const Game = () => {
  const choices = ["Rock", "Paper", "Scissor"];
  const [computerChoice, setComputerChoice] = useState("");
  const [humanChoice, setHumanChoice] = useState("");
  const [result, setResult] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const handlePlayerChoice = (choice) => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    setComputerChoice(choices[randomIndex]);
    setHumanChoice(choice);
  };

  useEffect(() => {
    if (computerChoice && humanChoice) {
      let newResult = "";
      if (computerChoice === humanChoice) {
        newResult = "Tie";
      } else if (
        (computerChoice === "Rock" && humanChoice === "Paper") ||
        (computerChoice === "Paper" && humanChoice === "Scissor") ||
        (computerChoice === "Scissor" && humanChoice === "Rock")
      ) {
        newResult = "Human wins";
        setPlayerScore((prevScore) => prevScore + 1);
      } else {
        newResult = "Computer wins";
        setComputerScore((prevScore) => prevScore + 1);
      }
      setResult(newResult);
    }
  }, [computerChoice, humanChoice]);

  return (
    <div className="border border-3 border-warning rounded p-3 my-3">
      <div className="text-center">
        {" "}
        {/* Centering the content */}
        <h4>Welcome to Rock, Paper, Scissors Game</h4>
      </div>
      <div className="d-flex justify-content-center">
        {choices.map((choice) => (
          <button
            key={choice}
            type="button"
            className={`btn btn-warning m-3`} style={{color:'white'}}
            onClick={() => handlePlayerChoice(choice)}
          >
            {choice}
          </button>
        ))}
      </div>
      <div>
        <div>Computer: {computerChoice}</div>
        <div>Player: {humanChoice}</div>

        <div>{result && <span>Result: {result}</span>}</div>
        <div>
          <span>
            Computer Score: {computerScore}
            <br />
            Player Score: {playerScore}
          </span>
        </div>
      </div>
      <GameRules />
    </div>
  );
};

const GameRules = () => (
  <div className="border border-1 border-danger rounded p-3 my-4">
    <h6 className="ms-3">Game rules: </h6>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Rock vs. Rock: Tie</li>
      <li className="list-group-item">Rock vs. Paper: Paper wins</li>
      <li className="list-group-item">Rock vs. Scissors: Rock wins</li>
      <li className="list-group-item">Paper vs. Paper: Tie</li>
      <li className="list-group-item">Paper vs. Scissors: Scissors win</li>
      <li className="list-group-item">Scissors vs. Scissors: Tie</li>
    </ul>
  </div>
);

export default Game;

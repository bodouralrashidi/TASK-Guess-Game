import React, { useState } from "react";

function GuessNumber(number , attempt1) {
  const [guess, setGuess] = useState("");
  const [guessText, setGuessText] = useState("");
  number = number.number
  const [attempt, setAttempt] = useState(attempt1.attempt);
console.log(attempt1)

  const checkNumber = (guess) => {
      
      guess = parseInt(guess)
      number = parseInt(number)
      console.log("guess", number)
      console.log("my guess", guess)
    if (attempt > 0){
    if (guess === number) {
      setGuessText(`Guess is correct`);
     
    } else if (guess >= number) {
      setGuessText(`Guess is High`);
      setAttempt(--attempt)
    } else if (guess <= number) {
      setGuessText(`Guess is low`);
      setAttempt(--attempt)
    }
    else
    {lost()}
    

}

  };
const lost = ()=>
{
    setGuessText("YOU LOST")
 //disable 
}
  return (
    <div>
      <h1>Enter your number </h1>
      <input
      id = "guess"
        placeholder="Guess the number"
        onChange={(event) => {
          setGuess(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          checkNumber(guess);
        }}
      >
        Click
      </button>
      <h1>{guessText}</h1>
    </div>
  );
}

export default GuessNumber;

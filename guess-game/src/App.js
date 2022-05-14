import React, { useState } from "react";
import GuessNumber from "./Components/GuessNumber";
function App() {
  const [guessNumber, setguessNumber] = useState("");
  const [attempt, setAttempt] = useState(3);
  const randNumber = () => {
   let rand = Math.floor(Math.random() * 100);
   console.log("guess hggg",rand)
    return rand
  };

  return (
    <div>
      <GuessNumber  number = {randNumber()}  attempt1 = {attempt}/>
    </div>
  );
}

export default App;

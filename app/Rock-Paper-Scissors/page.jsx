'use client'

import { useState } from "react";
import Link from 'next/navigation'
import Image from 'next/image'

const RockPaperScissors = () => {
  const[playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const[computerChoiceImage, setComputerChoiceImage] = useState('');
  const[playerScoreColor, setPlayerScoreColor] = useState("text-black");
  const[computerScoreColor, setComputerScoreColor] = useState("text-black");
  const[playerScoreSize, setPlayerScoreSize] = useState("text-4xl");
  const[computerScoreSize, setComputerScoreSize] = useState("text-4xl");
  
  const handleChoice = (playerChoice) => {
    const options = ["Rock", "Paper", "Scissors"]
    const computerChoice = Math.floor(Math.random() * options.length)
    
    setComputerChoiceImage(`/RockPaperScissors/${options[computerChoice].toLowerCase()}.png`)
   
    console.log("Me " + playerChoice, options[playerChoice])
    console.log("Computer " + computerChoice, options[computerChoice])
   

    if (playerChoice === computerChoice) {
      setPlayerScoreColor("text-red-500");
      setComputerScoreColor("text-red-500");
      setPlayerScoreSize("text-6xl");
      setComputerScoreSize("text-6xl");
      console.log("Tied")
    } else if (
    (playerChoice === 0 && computerChoice === 2) ||
    (playerChoice === 1 && computerChoice === 0) ||
    (playerChoice === 2 && computerChoice === 1) 
    ) {
      setPlayerScore((prevScore) => prevScore + 1);
      setPlayerScoreColor("text-green-500");
      setComputerScoreColor("text-black");
      setPlayerScoreSize("text-6xl");
      setComputerScoreSize("text-4xl");
      console.log("You Win")
    } else {
      setComputerScore((prevScore) => prevScore + 1);
      setPlayerScoreColor("text-black");
      setComputerScoreColor("text-green-500");
      setPlayerScoreSize("text-4xl")
      setComputerScoreSize("text-6xl");
      console.log("You Lose")
    }
  }

  return (
    <div>
      <div className="h-screen text-center">
        <a href="/">
        <Image src="/back-arrow.png" alt="" width={50} height={50} className="absolute top-5 left-5 hover:size-14 cursor-pointer "/>
        </a>
        <h1 className="text-4xl mt-16">Rock, Paper, Scissors</h1>
        <h2 className="mt-2 text-gray-500">Attributions at bottom</h2>
        <p className="text-4xl mt-12 flex flex-row justify-center items-center bg-blue-400 mx-[520px] py-10 outline-4 outline rounded-md">Computer Choice: <img className="mx-4" src={computerChoiceImage} width={100} alt="" /></p>
        
        <div className="mt-16">
          <button className="mx-4 hover:scale-110" onClick={() => handleChoice(0)}><img src="/RockPaperScissors/rock.png" width={300}></img></button> 
          <button className="mx-4 hover:scale-110" onClick={() => handleChoice(1)}><img src="/RockPaperScissors/paper.png" width={300}></img></button>
          <button className="mx-4 hover:scale-110" onClick={() => handleChoice(2)}><img src="/RockPaperScissors/scissors.png" width={300}></img></button>
        </div>
        <div className="text-4xl mt-24 flex justify-center">
          <div className={`mx-60 ${playerScoreColor} ${playerScoreSize}`}>{playerScore}</div> 
          <div>Score</div>
          <div className={`mx-60 ${computerScoreColor} ${computerScoreSize}`}>{computerScore}</div>
        </div>
      </div>

      <footer className="bg-black text-white px-10 py-20">
      <h2 className="text-xl mb-5">Attributions</h2>
      <div className="flex flex-col">
        <a className="mt-2 hover:underline" href="https://www.flaticon.com/free-icons/rock" title="rock icons">Rock icons created by Freepik - Flaticon</a>
        <a className="mt-2 hover:underline" href="https://www.flaticon.com/free-icons/paper" title="paper icons">Paper icons created by Freepik - Flaticon</a>
        <a className="mt-2 hover:underline" href="https://www.flaticon.com/free-icons/scissors" title="scissors icons">Scissors icons created by Gulraiz - Flaticon</a>
        <a className="mt-2 hover:underline" href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by Kirill Kazachek - Flaticon</a>      
      </div>
      </footer>
    </div>
  )
}
export default RockPaperScissors
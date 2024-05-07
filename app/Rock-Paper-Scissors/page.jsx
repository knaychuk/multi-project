'use client'

const RockPaperScissors = () => {
  
  const handleChoice = (playerChoice) => {
    const options = ["Rock", "Paper", "Scissors"]
    const computerChoice = Math.floor(Math.random() * options.length)

    console.log("Me " + playerChoice, options[playerChoice])
    console.log("Computer " + computerChoice, options[computerChoice])
   

    if (playerChoice === computerChoice) {
      console.log("Tied")
    } else if (playerChoice === 0 && computerChoice === 2) {
      console.log("You Win")
    } else if (playerChoice === 1 && computerChoice === 0) {
      console.log("You Win")
    } else if (playerChoice === 2 && computerChoice === 1) {
      console.log("You Win")
    } else {
      console.log("You Lose")
    }
  }

  return (
    <div>
      <h1>Rock, Paper, Scissors</h1>
      <button onClick={() => handleChoice(0)}>Rock</button> 
      <button onClick={() => handleChoice(1)}>Paper</button>
      <button onClick={() => handleChoice(2)}>Scissors</button>
    </div>
  )
}
export default RockPaperScissors
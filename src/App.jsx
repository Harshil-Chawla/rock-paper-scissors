import React, { useState } from 'react'

const App = () => {
  const [playerMove, setPlayerMove] = useState(null)
  const [computerMove, setComputerMove] = useState(null)
  const [playerScore, setPlayerScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [tie, setTie] = useState(0)

  const [playerEmoji, setPlayerEmoji] = useState("")
  const [computerEmoji, setComputerEmoji] = useState("")

  function CM() {
    const randomValue = Number(Math.random().toFixed(2))
    setComputerMove(randomValue)

    if (randomValue >= 0.7) {
      setComputerEmoji("🪨")
    } else if (randomValue >= 0.4) {
      setComputerEmoji("📄")
    } else {
      setComputerEmoji("✂️")
    }

    return randomValue
  }

  function rock() {
    const pMove = 0.7
    setPlayerMove(pMove)
    setPlayerEmoji("🪨")

    const cMove = CM()
    Score(pMove, cMove)
  }

  function paper() {
    const pMove = 0.4
    setPlayerMove(pMove)
    setPlayerEmoji("📄")

    const cMove = CM()
    Score(pMove, cMove)
  }

  function scissors() {
    const pMove = 0.1
    setPlayerMove(pMove)
    setPlayerEmoji("✂️")

    const cMove = CM()
    Score(pMove, cMove)
  }

  function Score(playerMove, computerMove) {

    if ((playerMove === 0.7) && (computerMove >= 0.1 && computerMove < 0.4)) {
      setPlayerScore(prev => prev + 1)
    }
    else if ((playerMove >= 0.4 && playerMove < 0.7) && (computerMove >= 0.7)) {
      setPlayerScore(prev => prev + 1)
    }
    else if ((playerMove >= 0.1 && playerMove < 0.4) && (computerMove >= 0.4 && computerMove < 0.7)) {
      setPlayerScore(prev => prev + 1)
    }
    else if ((playerMove >= 0.7) && (computerMove >= 0.4 && computerMove < 0.7)) {
      setComputerScore(prev => prev + 1)
    }
    else if ((playerMove >= 0.4 && playerMove < 0.7) && (computerMove >= 0.1 && computerMove < 0.4)) {
      setComputerScore(prev => prev + 1)
    }
    else if ((playerMove >= 0.1 && playerMove < 0.4) && (computerMove >= 0.7)) {
      setComputerScore(prev => prev + 1)
    }
    else {
      setTie(prev => prev + 1)
    }
  }

  function reset() {
    setPlayerScore(0)
    setComputerScore(0)
    setTie(0)
    setComputerEmoji("")
    setPlayerEmoji("")
    setPlayerMove(null)
    setComputerMove(null)
  }

  return (
    <>
      <h1>Rock-Paper-Scissors</h1>

      <div>
        <button onClick={rock}>🪨</button>
        <button onClick={paper}>📄</button>
        <button onClick={scissors}>✂️</button>
        <button onClick={reset}>Reset</button>
      </div>

      <br />

      <h2>You: {playerEmoji}</h2>
      <h2>Computer: {computerEmoji}</h2>

      <h1>
        Computer: {computerScore} - You: {playerScore} - Tie: {tie}
      </h1>
    </>
  )
}

export default App



// import React,{ useState } from 'react'

// const App = () => {
//   const [playerMove,setPlayerMove]=useState(null)
//   const [computerMove,setComputerMove]=useState(null)
//   const [playerScore,setPlayerScore]=useState(0)
//   const [computerScore,setComputerScore]=useState(0)
//   const[tie,setTie]=useState(0)

//   const [playerEmoji, setPlayerEmoji] = useState("")
//   const [computerEmoji, setComputerEmoji] = useState("")

//   function CM() {
//     const randomValue = Number(Math.random().toFixed(2))
//     setComputerMove(randomValue)
//     if (randomValue>=0.7) {
//       setComputerEmoji("🪨")
//     } else if (randomValue>=0.4) {
//       setComputerEmoji("📄")
//     } else{
//       setComputerEmoji("✂️")
//     }
//     return randomValue
//   }

//   function rock(){
//     setPlayerMove(0.7)
//     setPlayerEmoji("🪨")
//     CM()
//     Score()
//   }
//   function paper(){
//     setPlayerMove(0.4)
//     setPlayerEmoji("📄")
//     CM()
//     Score()
//   }
//   function scissors(){
//     setPlayerMove(0.1)
//     setPlayerEmoji("✂️")
//     CM()
//     Score()
//   }

//   function Score(){
//     console.log(playerScore)
//     if((playerMove==0.7) && (computerMove>=0.1 && computerMove<0.4)){
//       setPlayerScore(1+playerScore)
//     }
//     if((playerMove>=0.4 && playerMove<0.7) && (computerMove>=0.7)){
//       setPlayerScore(1+playerScore)
//     }
//     if((playerMove>=0.1 && playerMove<0.4) && (computerMove>=0.4 && computerMove<0.7)){
//       setPlayerScore(1+playerScore)
//     }
//     if((playerMove>=0.7) && (computerMove>=0.4 && computerMove<0.7)){
//       setComputerScore(1+computerScore)
//     }
//     if((playerMove>=0.4 && playerMove<0.7) && (computerMove>=0.1 && computerMove<0.4)){
//       setComputerScore(1+computerScore)
//     }
//     if((playerMove>=0.1 && playerMove<0.4) && (computerMove>=0.7)){
//       setComputerScore(1+computerScore)
//     }
//     if((playerMove>=0.7) && (computerMove>=0.7)){
//       setTie(1+tie)
//     }
//     if((playerMove>=0.4 && playerMove<0.7) && (computerMove>=0.4 && computerMove<0.7)){
//       setTie(1+tie)
//     }
//     if((playerMove>=0.1 && playerMove<0.4) && (computerMove>=0.1 && computerMove<0.4)){
//       setTie(1+tie)
//     }
//     console.log(playerScore)
//   }

//   function reset(){
//     setPlayerScore(0)
//     setComputerScore(0)
//     setTie(0)
//     setComputerEmoji(null)
//     setPlayerEmoji(null)
//   }

//   return (
//     <>
//     <h1>Rock-Paper-Scissors</h1>
//     <div>
//       <button onClick={rock}>🪨</button>
//       <button onClick={paper}>📄</button>
//       <button onClick={scissors}>✂️</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//     <br></br>
//     <h2>You: {playerEmoji}</h2>
//     <h2>Computer: {computerEmoji}</h2>
//     <h1>Computer:{computerScore} - You:{playerScore} - tie:{tie}</h1>

//     </>
//   )
// }

// export default App




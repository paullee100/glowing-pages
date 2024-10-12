import React, { useState } from 'react'
import styles from './riddle.module.css'

const RiddlePage = () => {

  const riddles = [
    { riddle: "You go at red, but stop at green. What am I?", answer: "watermelon" },
    { riddle: "I help you from your head to your toes. The more I work the smaller I grow? What am I?", answer: "soap" },
    { riddle: "I can fly but I have no wings. I can cry but I have no eyes. Wherever I go, darkness follows me. What am I?", answer: "cloud" },
    { riddle: "What has a bed but never sleeps, can run but never walks, and has a bank but no money? What am I?", answer: "river" },
    { riddle: "I have keys but no locks, I have space but no room, You can enter but you can't go outside? What am I?", answer: "keyboard" }
  ]

  const [currentRiddleIndex, setRiddleIndex] = useState(0)
  const [userInput, setUserInput] = useState("")
  const [answerHistory, setAnswerHistory] = useState<String[]>([])
  const [revealAnswerIndex, incrementAnswerIndex] = useState(0)
  const [showKey, updateKey] = useState(false)

  const answerRiddle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (userInput === riddles[currentRiddleIndex].answer) {
      alert("Correct! Good Job!")
      if (currentRiddleIndex+1 < riddles.length) {
        const newVal = currentRiddleIndex + 1
        setRiddleIndex(newVal)
        incrementAnswerIndex(0)
        setAnswerHistory([])
      } else {
        updateKey(true)
      }
      
    } else {
      alert("Incorrect")
      if (revealAnswerIndex < riddles[currentRiddleIndex].answer.length) {
        const newVal = revealAnswerIndex + 1
        incrementAnswerIndex(newVal)
      }
      const addToHistory = answerHistory
      addToHistory.push(userInput)
      setAnswerHistory(addToHistory)
    }
    setUserInput("")
  }

  return (
    <div className={styles.container}>
        <form onSubmit={answerRiddle}>
            <div className={styles.question}>{riddles[currentRiddleIndex].riddle}</div>
            <div className={styles.revealAnswer}>{riddles[currentRiddleIndex].answer.slice(0,revealAnswerIndex)}</div>
            <input className={styles.input} type="text" onChange={e => setUserInput(e.target.value)} value={userInput} />
            <br />
            <button className={styles.button}>Submit</button>
        </form>
        <div className={styles.answerHistory}>
          {answerHistory.map((val) => (
            <div>{val}</div>
          ))}
        </div>
        {showKey && <div>The Special Key for this stage is: RDP32</div>}
    </div>
  )
}

export default RiddlePage
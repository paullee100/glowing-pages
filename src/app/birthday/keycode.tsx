import React, { useState } from 'react'
import styles from './keycode.module.css'

const KeycodePage = () => {

  const questions = [
    { question: "If a triangle consists of angles x, y, and z, where y = 90 degrees and z = 58 degrees, what is the angle of x?", answer: "32" },
    { question: "Solve for x: 8x + 72 = 200", answer: "16" },
    { question: "Solve this problem: 8 * (4 + 1) / 20", answer: "2"}
  ]

  const [questionIndex, setQuestionIndex] = useState(0)
  const [userInput, setUserInput] = useState("")
  const [showKey, updateKey] = useState(false)

  const answerQuestion = (e: any) => {
    e.preventDefault()

    if (userInput === questions[questionIndex].answer) {
      alert("Correct! Remember the answer " + questions[questionIndex].answer)
      if (questionIndex+1 < questions.length) {
        const newVal = questionIndex + 1
        setQuestionIndex(newVal)
      } else {
        updateKey(true)
      }
    } else {
      alert("Incorrect")
    }
    setUserInput("")
  }

  return (
    <div>
      <div className={styles.reminder}>
        Remembers the answers to the numbers.
      </div>
      <form onSubmit={answerQuestion}>
        <div className={styles.question}>{questions[questionIndex].question}</div>
        <input type="text" onChange={e => setUserInput(e.target.value)} value={userInput} />
        <br />
        <button>Submit</button>
      </form>
      {showKey && <div>The lock combination is 32 16 2! The Special Key for this stage is: KCP1009</div>}
    </div>
  )
}

export default KeycodePage
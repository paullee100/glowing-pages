import React, { useState } from 'react'
import Image from 'next/image'
import styles from './trivia.module.css'

const TriviaPage = () => {

  const [userInput, setUserInput] = useState("")
  let [kpopIndex, setKpopIndex] = useState(0)
  const [revealAnswerIndex, incrementAnswerIndex] = useState(0)
  const [showKey, updateKey] = useState(false)

  const kpopGroup = [
    { source: "/glowing-pages/birthday-trivia/blackpink.jpg", width: 645, height: 475, answer: "blackpink" },
    { source: "/glowing-pages/birthday-trivia/aespa.jpg", width: 645, height: 475, answer: "aespa" },
    { source: "/glowing-pages/birthday-trivia/seventeen.jpg", width: 645, height: 475, answer: "seventeen" },
    { source: "/glowing-pages/birthday-trivia/girlsgeneration.png", width: 645, height: 475, answer: "girls generation" },
    { source: "/glowing-pages/birthday-trivia/newjeans.png", width: 645, height: 475, answer: "newjeans" },
    { source: "/glowing-pages/birthday-trivia/straykids.jpeg", width: 645, height: 475, answer: "stray kids" }
  ]

  const answerQuestion = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (userInput === kpopGroup[kpopIndex].answer) {
      alert("Correct!!! You got it right!")
      if (kpopIndex+1 < kpopGroup.length) {
        kpopIndex = kpopIndex + 1
        setKpopIndex(kpopIndex)
        incrementAnswerIndex(0)
      } else {
        updateKey(true)
      }
    } else {
      alert("Incorrect")
      const newVal = revealAnswerIndex + 1
      incrementAnswerIndex(newVal)
    }
    setUserInput("")
  }

  return (
    <div className={styles.container}>
        <form onSubmit={e => answerQuestion(e)}>

            <div className={styles.question}>Name the K-pop group</div>
            <div className={styles.revealAnswer}>{kpopGroup[kpopIndex].answer.slice(0,revealAnswerIndex)}</div>
            <Image 
                src={kpopGroup[kpopIndex].source}
                alt=""
                width={kpopGroup[kpopIndex].width}
                height={kpopGroup[kpopIndex].height}
                sizes="100%"
                className={styles.picture}
            />
            {/* <div className={styles.imgContainer}>
            </div> */}

            <input className={styles.input} type="text" onChange={e => setUserInput(e.target.value)} value={userInput}></input>
            <br />
            <button className={styles.button}>Submit</button>
        </form>
        {showKey && <div>The Special Key for this stage is: TVAP92</div>}
    </div>
  )
}

export default TriviaPage
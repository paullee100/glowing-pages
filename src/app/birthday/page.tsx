'use client'

import React, { useState } from 'react'
import TriviaPage from './trivia'
import RiddlePage from './riddle'
import KeycodePage from './keycode'

const BirthdayPage = () => {

  const [currentStage, updateStage] = useState(0)
  const pages = [<RiddlePage key={0}/>, <TriviaPage key={1}/>, <KeycodePage key={2}/>]

  const specialKeys = ["RDP32", "TVAP92", "KCP1009"]
  const [specialKeysIndex, setSpecialKeysIndex] = useState(0)
  const [userInput, setUserInput] = useState("")

  const checkKey = (e: any) => {
    e.preventDefault()
    if (userInput === specialKeys[specialKeysIndex]) {
      alert("Valid Code! Now entering into next stage!")
      const newVal = currentStage + 1
      updateStage(newVal)
      setSpecialKeysIndex(newVal)
    } else {
      alert("Invalid code")
    }
    setUserInput("")
  }

  return (
    <div>
      
      {pages[currentStage]}
      <div>
        <form onSubmit={checkKey}>
          <div>Input the Special Key by completing each section: </div>
          <input type="text" onChange={e => setUserInput(e.target.value)} value={userInput} />
          <br />
          <button>Submit</button>
        </form>
      </div>

    </div>
  )
}

export default BirthdayPage
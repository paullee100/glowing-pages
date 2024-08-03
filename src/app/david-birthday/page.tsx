"use client"

import React, { useState } from 'react'
import styles from './davidBirthday.module.css'
import Dialog from '@/components/dave/dialog'

const DavidBirthdayPage = () => {

    const [positions, updatePositions] = useState([0, 0, 0, 0])
    // Introduction
    // Riddles
    // Trivia
    // Buttons
    // ...
    // Reward!!!
    const [stages, updateStages] = useState(0)
    const [currentIntroduction, updateIntroduction] = useState(0)
    const [dialog, updateDialog] = useState(0)
    const [currentRiddle, updateRiddle] = useState(0)

    const introduction = [
        { speaker: "Hello David...", response: ["Who are you?", "Where am I?", "Say Nothing"]},
        { speaker: "You don't need to worry about that", response: []},
        { speaker: "Huh, you're not going to say anything?", response: []},


    ]

    const riddles = [
        { riddle: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?", answer: "map"},
        { riddle: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", answer: "echo"},
        { riddle: "Pronounced as one letter, And written with three, two letters there are, and two only in me. I'm double, I'm single, I'm black blue and gray, I'm read from both ends, and the same either way. What am I?", answer: "eye"}
    ]

    const trivia = [
        { trivia: "", answer: ""}
    ]

    // const animate = () => {
    //     const progressBar = document.querySelector(`.${styles.progress}`) as HTMLElement;
    //     const newProgress = currentProgress+1
    //     updateProgress(newProgress)
    //     progressBar.style.width = newProgress + '%'
    // }

    // setTimeout(() => {
    //     let intervalID = setInterval(() => {
    //         if (currentProgress === 100) {
    //             clearInterval(intervalID)
    //         } else {
    //             animate()
    //         }
    //     }, 100)
    // }, 2000)

    const dragMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event = event || window.Event
        event.preventDefault()

        const pos3 = event.clientX
        positions[2] = pos3
        const pos4 = event.clientY
        positions[3] = pos4
        updatePositions(positions)
        document.onmouseup = closeDragElement
        document.onmousemove = elementDrag
    }

    const elementDrag = (event: any) => {
        event = event || window.Event
        event.preventDefault()
        const pos1 = positions[2] - event.clientX
        const pos2 = positions[3] - event.clientY
        const pos3 = event.clientX
        positions[2] = pos3
        const pos4 = event.clientY
        positions[3] = pos4
        updatePositions(positions)

        const element = document.querySelector(`.${styles.light}`) as HTMLElement
        element.style.top = (element.offsetTop - pos2) + "px"
        element.style.left = (element.offsetLeft - pos1) + "px"
    }

    const closeDragElement = (_: any) => {
        document.onmouseup = null
        document.onmousemove = null
        document.ontouchend = null
        document.ontouchmove = null
    }

    const dragTouchDown = (event: React.TouchEvent<HTMLDivElement>) => {
        event = event || window.Event
        event.preventDefault()

        const touch = event.touches[0] || event.changedTouches[0]
        const pos3 = touch.clientX
        positions[2] = pos3
        const pos4 = touch.clientY
        positions[3] = pos4
        updatePositions(positions)
        document.ontouchend = closeDragElement
        document.ontouchmove = elementDrag

    }

    const checkAnswer = (event: React.KeyboardEvent<HTMLInputElement>, answer: string) => {
        if (event.key === "Enter") {
            if (event.currentTarget.value.toLowerCase().split(' ').indexOf(answer) > -1) {
                const nextRiddle = currentRiddle+1
                updateRiddle(nextRiddle)
                event.currentTarget.value = ''
            } else {
                console.log("NOPE!")
            }
        }
    }

    return (
        <div className={styles.container}>

            <Dialog text={introduction[1].speaker} />

            <div className={styles.light} onMouseDown={e => dragMouseDown(e)} onTouchStart={e => dragTouchDown(e)}>
            </div>

            <div className={styles.progressBar}>
                <div className={styles.progress}></div>
            </div>

            {stages === 1 ? <div className={styles.riddles}>

                <div className={styles.section}>
                    <div>{riddles[currentRiddle].riddle}</div>
                    <input type="text" onKeyDown={e => checkAnswer(e, riddles[currentRiddle].answer)}/>
                </div>

            </div> : 
            <div></div>}

            <div>
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
            </div>

            <button className={styles.btn}>Click Here</button>
        </div>
  )
}

export default DavidBirthdayPage
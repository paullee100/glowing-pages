"use client"

import React, { useEffect, useMemo, useState } from 'react'
import styles from "./dialog.module.css"

interface Prop {
    text: string;
    responses: any[] | undefined;
    updateIntroduction: Function | undefined;
    updateStages: Function | undefined;
    responsesExist: boolean;
}

const Dialog = ( { text, responses, updateIntroduction, updateStages, responsesExist }: Prop) => {

    const [index, setIndex] = useState(0)
    const words = useMemo(() => text.split(' '), [text])

    const placeholder = words.slice(0, index).join(' ')

    useEffect(() => {
        if (index >= words.length) return

        const timeout = setTimeout(() => setIndex(i => i + 1), 70)

        return () => {
            clearTimeout(timeout)
        }
    }, [setIndex, index, words])

    const respond = (reaction: number) => {
        if (!responsesExist) return

        if (reaction === -1) {
            updateStages!(1)
            return
        }
        console.log(reaction)
        updateIntroduction!(reaction)
        setIndex(0)
    }

    return (
        <div className={styles.container}>
            {placeholder}

            {responses && responses.length > 0 && index >= words.length ? 
                responses.map((response, index) => (
                    <button className={styles.dialogBtn} key={index} onClick={_ => respond(response.reaction)}>{response.dialog}</button>
                )) : <div></div>
            }
        </div>
    )
}

export default Dialog
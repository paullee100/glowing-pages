import React, { useEffect, useMemo, useState } from 'react'
import styles from "./dialog.module.css"

interface Prop {
    text: string;
}

const Dialog = ( { text }: Prop) => {

    console.log(text);

    const [index, setIndex] = useState(0)
    const words = useMemo(() => text.split(' '), [text])

    const placeholder = words.slice(0, index).join(' ')

    useEffect(() => {
        if (index >= words.length) return

        const timeout = setTimeout(() => setIndex(i => i + 1), 1000)

        return () => {
            clearTimeout(timeout)
        }
    }, [setIndex, index, words])

    return (
        <div className={styles.container}>
            {placeholder}
        </div>
    )
}

export default Dialog
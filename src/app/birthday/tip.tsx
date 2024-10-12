import React, { useState } from 'react'
import styles from './tip.module.css'

const TipPage = () => {

  const [isTipping, setTipping] = useState(true)
  
  const noTip = () => {
    setTipping(false)
  }

  const continueTip = () => {
    setTipping(true)
  }

  return (
    <div className={styles.container}>
        {!isTipping && 
        <div className={styles.notipcontainer}>
            <div className={styles.notip}>Are you sure about that?</div>
            <div className={styles.notipbuttons}>
                <button onClick={noTip}>Yes</button>
                <button onClick={continueTip}>No</button>
            </div>
        </div>
        }

        <div className={styles.title}>Leave a tip?</div>
        <div className={styles.tipBtn}>
            <button>15%</button>
            <button>20%</button>
            <button>25%</button>
        </div>
        <div className={styles.bottomBtn}>
            <button>Custom</button>
            <button onClick={noTip}>No Tip</button>
        </div>
    </div>
  )
}

export default TipPage
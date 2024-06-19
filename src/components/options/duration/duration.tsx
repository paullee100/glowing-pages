import React from 'react'
import styles from "./duration.module.css";

const DurationSearch = () => {
  return (
    <div className={styles.container}>
        <label><h1>Durations</h1></label>
        <div className={styles.duration_container}>
            <div>
                <input type="checkbox" name="" id="" disabled={true} />
                3
            </div>

            <div>
                <input type="checkbox" name="" id="" disabled={true} />
                {`> 20`}
            </div>
        </div>
    </div>
  )
}

export default DurationSearch
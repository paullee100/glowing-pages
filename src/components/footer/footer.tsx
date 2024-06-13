import React from 'react'
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Paul</div>
      <div className={styles.text}>
        All rights reserved to Paul
      </div>
    </div>
  )
}

export default Footer
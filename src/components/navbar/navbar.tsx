import Link from 'next/link'
import React from 'react'
import styles from "./navbar.module.css";
import Links from './links/links';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Logo</Link>
      <div className={styles.links}>
        <Links />
      </div>
    </div>
  )
}

export default Navbar
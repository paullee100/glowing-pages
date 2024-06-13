import Link from 'next/link'
import React from 'react'
import styles from "./navbar.module.css";
import Links from './links/links';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Logo</Link>
      <div>
        <Links />
      </div>
    </div>
  )
}

export default Navbar
"use client"

import React, { useState } from 'react'
import styles from './login.module.css'
import Link from 'next/link'

const LoginPage = () => {

  const [errorMsg, setErrorMsg] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const submitCredentials = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMsg(errorMsg => !errorMsg)
  }

  return (
    <div>
        <div className={styles.error}>{errorMsg ? "Incorrect credentials" : ""}</div>
        <form onSubmit={submitCredentials}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" autoComplete='off' />
            <label htmlFor="password">Password:</label>
            <input type={isVisible ? "text" : "password"} id="password" autoComplete='off' />
            <input type="checkbox" name="reveal_password" id="reveal_password" onClick={() => setIsVisible((prevState) => !prevState)} />
            <label htmlFor="reveal_password">Show Password</label>

            <button>Login</button>

        </form>
        <div><Link href="forgot-password" className={styles.link}>Forgot Password</Link></div>

        <div>
            Dont have an account? 
            <Link href="register" className={styles.link}>Register</Link>
        </div>
    </div>
  )
}

export default LoginPage
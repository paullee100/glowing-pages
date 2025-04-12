"use client"

import React, { useState } from 'react'
import styles from './login.module.css'
import Link from 'next/link'

const LoginPage = () => {

  const [errorMsg, setErrorMsg] = useState(false)

  const submitCredentials = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMsg(errorMsg => !errorMsg)
  }

  return (
    <div>
        <div className={styles.error}>{errorMsg ? "Incorrect credentials" : ""}</div>
        <form onSubmit={submitCredentials}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username"/>
            <label htmlFor="password">Password:</label>
            <input type="text" id="password"/>

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
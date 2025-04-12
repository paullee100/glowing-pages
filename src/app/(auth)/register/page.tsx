"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import styles from './register.module.css'
import { useRouter } from 'next/navigation'

const RegisterPage = () => {
  const [errorMsg, setErrorMsg] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
        
        const formData = new FormData(e.currentTarget)
    
        const username = formData.get('username')
        const email = formData.get('email')
        const password = formData.get('password')
        
        const response = await fetch(`/glowing-pages/api/register`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        });
    
        response.status === 201 && router.push('/')

    } catch (e: any) {
        console.error(e.message)
    }
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" id="username" />
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="email" />
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" id="password" />
            <label htmlFor="retype_password">Retype Password:</label>
            <input type="text" name="retype_password" id="retype_password" />

            <button>Register</button>
        </form>
        <div>Have an account? <Link href="login" className={styles.link}>Login</Link></div>
    </div>
  )
}

export default RegisterPage
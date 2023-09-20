'use client'
import 'dotenv/config'
import React, { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import axios from 'axios';
import { useRouter } from 'next/navigation';
function Register() {
  const [err,setErr] = useState(false)
  const router = useRouter()
  
  async function handleSubmit(e) {
    e.preventDefault()
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const {data,status} = await axios({
        method: 'post',
        url: `http://localhost:3000 /api/auth/register`,
        data: {
          name,
          email,
          password
        }
      });

      if (status === 201) {
        router.push('/dashboard/login?success=Account has been created')
      }
    } catch (error) {
      console.log(error);
      setErr(true)
    }
    
  }
  return (
    <div className={styles.container} onSubmit={handleSubmit}>
      <form className={styles.form}>
        <input
          type='text'
          placeholder='username' 
          className={styles.input}
        />
        <input 
          type='email' 
          placeholder='email' 
          className={styles.input}
        />
        <input 
          type='password' 
          placeholder='password' 
          className={styles.input}
        />
        <button className={styles.button}>Register</button>
      </form>
      {err && "something wrong"}
      <Link href='/dashboard/login'>Login existing account</Link>
    </div>
  )
}

export default Register
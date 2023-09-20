'use client'
import React, { useState } from 'react'
import styles from './page.module.css'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';


function Login() {
  const [err,setErr] = useState("");
  const session = useSession()
  const router = useRouter();
  if ((session.status === "loading")) {
    return <p>loading...</p>
  }

  if (session.status === "authenticated") {
    router.push("/dashboard")
  }
  async function handleLogin(e) {
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;
    
    signIn(
      "credentials",{
        email,
        password  
      }).catch((error)=> setErr(error))

  }
  return (
    <div className={styles.container} onSubmit={handleLogin}>
      <form className={styles.form}>
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
        <button className={styles.button} >Login</button>
      </form>
      <p>{err&&err}</p>
    </div>
  )
}

export default Login
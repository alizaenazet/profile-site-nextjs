"use client"
import React, { useContext } from 'react'
import styles from './page.module.css'
import { ThemeCotext } from '../../../context/ThemeContext'


function DarkModeToggle() {
    const {toggle,mode} = useContext(ThemeCotext)

  return (
    <div className={styles.container} onClick={toggle}>
        <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
        <div className={styles.ball} style={mode === 'light' ? {left:'2px'} : {right:'2px'}}/>
    </div>
  )
}

export default DarkModeToggle
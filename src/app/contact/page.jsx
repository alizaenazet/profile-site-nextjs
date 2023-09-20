import React from 'react'
import styles from "./page.module.css";
import Image from 'next/image';
import Button from '@/components/button/button';
function Contact() {
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>mari hubungi kami</h1>
    <div className={styles.content}>
      <div className={styles.imgContainer}>
        <Image
        src="/contact.png"
        fill={true}
        alt=''
        className={styles.image}
        />
      </div>
      <form className={styles.form}>
      <input type='text' placeholder='name' className={styles.input} />
      <input type='text' placeholder='email' className={styles.input} />
      <textarea 
      className={styles.textArea}
      placeholder='pesan'
      color='30'
      rows='10'
      ></textarea>
      <Button url="#" text="kirim"/>
      </form>
    </div>
    </div>
  )
}

export default Contact
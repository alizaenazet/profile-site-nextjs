import React from 'react'
import styles from './page.module.css';
import Image from 'next/image';

function Footer() {
  return (
    <div className={styles.container}>
        <div>@2023 Design by A-Z cmiw</div>
        <div className={styles.social}>
            <Image src='/1.png' alt='facebook logo' className={styles.icon} width={15} height={15}/>
            <Image src='/2.png' alt='instagram logo' className={styles.icon} width={15} height={15}/>
            <Image src='/3.png' alt='twitter logo' className={styles.icon} width={15} height={15}/>
            <Image src='/4.png' alt='youtube logo' className={styles.icon} width={15} height={15}/>
        </div>
    </div>
  )
}

export default Footer
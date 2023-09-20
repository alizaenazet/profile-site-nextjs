import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/components/button/button'
export default function Home() {
  return (
    <div className={styles.container} >
      <div className={styles.item} >
        <h1 className={styles.title} >bukan Jasa design majapahit</h1>
        <p className={styles.desc} >Buat website mu memiliki design sangat nasional 
          seperti website pemerintahan indonesia pada umumnya,
        </p>
        <Button url="about" text="see our Works"></Button>
      </div>
    <div className={styles.item}>
      <Image src={Hero} alt='' className={styles.img} ></Image>
    </div>
    </div>
  )
}

import React from 'react'
import styles from "./page.module.css";
import Image from 'next/image';
import Button from '@/components/button/button';
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
        src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
        fill={true} 
        alt=' '
        className={styles.img}
        />

        <div className={styles.imgText}>
          <h1 className={styles.imgTitle }>Designer handal</h1>
          <h2 className={styles.imgDesc} >Experts indonesian majapahit design goverment</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>siapakah kami ?</h1>
          <p className={styles.desc} > Kami, agensi luar biasa, bangga mempersembahkan 
            layanan pembuatan website yang buruk dan tidak berguna khusus untuk pemerintah!
             Kami dengan senang hati menerima pesanan website yang hanya akan digunakan
              sebagai laporan kerja, tanpa tujuan yang jelas atau manfaat yang nyata.
               Kami memastikan websitenya tidak berfungsi dengan baik, menyediakan tampilan yang membosankan,
                dan kesulitan penggunaan yang tak terhitung. 
                <br/>
                <br/>
                Jadi, jika Anda mencari website yang tidak akan 
                digunakan oleh siapapun dan hanya akan memenuhi lemari arsip, 
                Anda telah datang ke tempat yang tepat! Percayakan pada kami untuk memberikan hasil yang sesuai
                 dengan standar keputusan luar biasa dari pemerintah.
          </p>
        </div>
        <div className={styles.item}>
        <h1 className={styles.title}>apa yang kita lakukan ?</h1>
        <p>
          menciptakan mahakarya website
          tampilan yang rumit dan performa buruk dengan disertai bug yang 
          memanjakan pengguna kami ahlinya.
        </p>
        <br/>
        <ul>
          <li>Website design tahun 90s</li>
          <li>Website performa kentang</li>
        </ul>
        <Button url="contact" text="Contact"></Button>
        </div>
      </div>
    </div>
  )
}

export default About
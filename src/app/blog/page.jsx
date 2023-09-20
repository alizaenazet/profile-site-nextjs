import React from 'react'
import styles from "./page.module.css";
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';

async function getData() {
  const res = await axios.get(`${process.env.BASE_URL}/api/posts`)
  return res.data
}

async function Blog() {
  const data = await getData()
  return (
    <div className={styles.mainContainer}>
      {data.map((blog) => {
        return(
      <Link href={`/blog/${blog._id}`} className={styles.container} key={blog.id}>
      <div className={styles.imgContainer}>
        <Image
        className={styles.img}
        src={blog.img}
        width={400}
        height={250}
        alt=''
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{blog.title}</h1>
        <p className={styles.desc}>{blog.desc} </p>
      </div>
      </Link>)
      })}

    </div>
  )
}

export default Blog
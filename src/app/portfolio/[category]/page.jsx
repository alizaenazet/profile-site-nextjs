import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/button'
import Image from 'next/image'
import {items} from './data'
import {notFound} from 'next/navigation'

 function getData(cat) {
  const data = items[cat]
  if (!data) {
    return notFound()
  }

  return data;
}

function SubCategoryPortofolio({params}) {
  const {category} = params
  const data = getData(category)
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{category}</h1>
    {data.map((portfolio) => (
      <div className={styles.item} key={portfolio.id}>
        <div className={styles.content}>
          <h1 className={styles.title}>{portfolio.title}</h1>
          <p className={styles.desc}>{portfolio.desc}</p>
          <Button url="#" text="detail"></Button>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img}
          src={portfolio.image}
          fill={true}
          alt=''/>
        </div>
      </div>
    ))}
    </div>
  )
}

export default SubCategoryPortofolio
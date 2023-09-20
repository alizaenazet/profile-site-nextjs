'use client'
import React from 'react'
import styles from './page.module.css'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import useSWR from 'swr'
import Image from 'next/image';



function Dashboard() {
  const session = useSession()
  const router = useRouter();

  const fetcher = url => axios.get(url).then(res => res.data);
  const url = `api/posts?username=${session?.data?.user.name}`
  const {data, error, isLoading, mutate} = useSWR(
    url,
    fetcher)

    if (isLoading) {
      return <p>loading your posts...</p>
    }
    if (session.status === "loading") {
      return <p>loading...</p>
    }
    if (session.status === "unauthenticated") {
      router.push("/dashboard/login")
    }  

    async function handleSubmit(e) {
      e.preventDefault();
        const title = e.target[0].value;
        const desc = e.target[1].value;
        const img = e.target[2].value;
        const content = e.target[3].value;
        const postEndPointUrl = "/api/posts"
        try {
          await axios.post(postEndPointUrl,{
            title,
            desc,
            img,
            content,
            username: session.data.user.name,
          })
          mutate()
        } catch (error) {
          console.log(error);
        }
    }

    async function handleDelete(_id) {
      const postId = _id;
      const deletEndPointUrl = `/api/posts/${postId}`
      try {
        axios.delete(deletEndPointUrl,{
          method:'delete',
        })
        mutate()
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div className={styles.container}>
      <div className={styles.posts}>
      {!data ? <p>No post</p> : data.map((post) => (
        <div className={styles.post} key={post._id}>
        <div className={styles.imageContainer} >
          <Image 
          src={post.img}
          alt=''
          width={200} height={100}
          />
        </div>
        <h2 className={styles.postTitle}>{post.title}</h2>
        <span className={styles.delete} onClick={()=> handleDelete(post._id)}>X</span>
        </div>
      ))}
      </div>

      <form className={styles.new} onSubmit={handleSubmit}>
      <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea
            placeholder="Content"
            className={styles.textArea}
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.button}>Send</button>
      </form>
    </div>
  )
}

export default Dashboard
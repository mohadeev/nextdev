import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/About.module.css'
import Layout from '@/components/Layout';


export default function About() {
  return (
    <div className={styles.container}>
       <Layout title="About us">
    
     
      <main className={styles.main}>

    
        <h1 className={styles.title}>
         About us
        </h1>

        <p className={styles.description}>
          Site Under Maintenance{' '}
          <code className={styles.code}>Please come back soon.</code>
        </p>

  
      </main>
      </Layout>
    </div>
  )
}
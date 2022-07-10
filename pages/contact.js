import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Contact.module.css'
import Layout from '@/components/Layout';


export default function Contact() {
  return (
    <div className={styles.container}>
       <Layout>
      <Head>
        <title>Contact Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="" />
        <link rel="canonical" href=""/>
      </Head>
     
      <main className={styles.main}>

     
        <h1 className={styles.title}>
          FORM GOES HERE CONTACT ME
        </h1>

        <p className={styles.description}>
          Site Under Maintenance{' '}
          <code className={styles.code}>Please come back soon.</code>
        </p>

        <div className={styles.grid}>
          
          < Link href="/about"><a className={styles.card}>
            <h2>Decentralisation &rarr;</h2>
            <p>Find in-depth information about website features and API.</p>
          </a></Link>

          < Link href="/about"><a href="" className={styles.card}>
            <h2>Develop &rarr;</h2>
            <p>Learn about digital media in an interactive course!</p>
          </a></Link>

          < Link href="/about"><a
            href=""
            className={styles.card}
          >
            <h2>Discover &rarr;</h2>
            <p>Discover and deploy website app projects.</p>
          </a></Link>

          < Link href="/about"><a
            href=""
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your site to live with Xform.
            </p>
          </a></Link>
        </div>
      </main>



      </Layout>
    </div>
  )
}
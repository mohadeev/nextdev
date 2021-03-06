import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout';
import { news } from './api/news';
import NewsItem from "@/components/NewsItem"


export default function Home({news}) {
  return (
    <div className={styles.container}>
       <Layout>
   
      <main className={styles.main}>

     
        <h2 className={styles.title}>
          home of X
        </h2>

        <p className={styles.description}>
          Site Under Maintenance{' '}
          <code className={styles.code}>Please come back soon.</code>
        </p>

        <div className={styles.grid}>
          < Link href="/about"><a className={styles.card}>
            <h2>Decentralisation &rarr;</h2>
            <p>Find in-depth information about website features and API.</p>
          </a></Link>

          < Link href="/about"><a  className={styles.card}>
            <h2>Develop &rarr;</h2>
            <p>Learn about digital media in an interactive course!</p>
          </a></Link>

          < Link href="/about"><a className={styles.card}>
            <h2>Discover &rarr;</h2>
            <p>Discover and deploy website app projects.</p>
          </a></Link>

          < Link href="/about"><a className={styles.card}>
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your site to live with X.
            </p>
          </a></Link>
        </div> 
</main>
        {news.length === 0 && <h3>No News</h3>}
        {news.map((item) => (
          <NewsItem key={item.id} news={item} />
        ))}

        <Link href="/news">
          <a className={styles.back}>More News</a>
        </Link>
      </Layout>
    </div>
  )
}
 export async function getStaticProps() {

   return {
    props: { news: news.slice(0, 5) },
    revalidate: 1,
   };
  }

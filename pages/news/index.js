import Link from "next/link";
import Layout from "@/components/Layout";
import { news } from "../api/news";
import NewsItem from "@/components/NewsItem";
import styles from "@/styles/News.module.css";

export default function News({ news }) {
  return (
    <div>
      <Layout>
        <h1>News</h1>
        {news.length === 0 && <h3>No News</h3>}
        {news.map((item) => (
          <NewsItem key={item.id} news={item} />
        ))}
        <Link href="/">
          <a className={styles.back}>Go Back</a>
        </Link>
      </Layout>
    </div>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/api/news`);
//   const news = await res.json();

//   return {
//     props: { news },
//   };
// }

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASED_URL}/api/news`);
  // const news = await res.json();

  return {
    props: { news },
  };
}

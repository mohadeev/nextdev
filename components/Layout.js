import Head from 'next/head';
import styles from '@/styles/Layout.module.css';
import Header from './Header';
import Footer from './Footer';
import { useRouter } from "next/router";
import Hero from './Hero';

export default function Layouts({ title, description, keywords, children }) {
  const router = useRouter();

  return (
    <div>      
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="."/>
        <meta name="theme-color" content="#fff"></meta>
      </Head>
      <Header />
      {router.pathname === "/" && <Hero />}
      <main className={styles.container}>{children}</main>
      <Footer />
    </div>
  );
}

Layouts.defaultProps = {
  title: "Best Web3 Dev",
  description: "Best web3 Development",
  keywords: "Web3 Dev Next, developer, Web3, react, blockchain,",
};  

Layouts.defaultProps = {
  title: "Creative Next App",
  description: "Generated by create next app Best web3 Development",
  keywords: "Web3 Dev Next, developer, Web3, react, blockchain,",
};

<Head>




<title></title>
<meta name="description" content="Generated by create next app" />


</Head>
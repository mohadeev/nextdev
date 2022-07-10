import Head from 'next/head'
import Link from "next/link";
import styles from "@/styles/Header.module.css";
import React, { useState } from 'react'
export default function Header() {
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }
  return (
  
    <header className={styles.header}>
      <div >
        <Link href="/">
          <a>NextDev</a>
        </Link>
      </div>
      <nav className={styles.navdesk}>
            <ul className={styles.menu}>
                <li><Link href="/about"><a>About</a></Link></li>
                <li><Link href="/news"><a>News</a></Link></li>
                <li><Link href="/contact"><a>Contact</a></Link></li>
            </ul>
        </nav>
        <button className={styles.hamb} onClick={toggle}><span className={styles.hambline}></span></button>

        <div style={{
        display: showMe?"block":"none"
      }}>
        <nav className={styles.nav}>
            <ul className={styles.menu}>
                <li><Link href="/about"><a>About</a></Link></li>
                <li><Link href="/news"><a>News</a></Link></li>
                <li><Link href="/contact"><a>Contact</a></Link></li>
            </ul>
        </nav>
        </div>
      
    </header>
  );
}
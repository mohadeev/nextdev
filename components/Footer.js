import styles from "@/styles/Footer.module.css";
import Link from "next/link";
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright NextDev &copy; 2022</p>
    
        <a
          href="https://.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' X '}
      
        </a>
      
</footer>


  );
}
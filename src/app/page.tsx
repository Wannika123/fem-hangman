import Link from "next/link";
import Image from "next/image";
import logo  from '@/images/logo.svg';
import playIcon from '@/images/icon-play.svg';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.starter}>
        <Image 
          src={logo} 
          alt="logo icon" 
          className={styles.logo} 
        />
        <Link href='/pick-a-category' className={styles['play-btn']}>
          <Image src={playIcon} alt="play icon" />
        </Link>
        <Link href='/how-to-play' className={styles['how-btn']}>How to play</Link>
      </div>
    </main>
  );
}

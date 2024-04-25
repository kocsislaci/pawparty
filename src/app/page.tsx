'use client'

import styles from "./page.module.scss";


export default function Home() {

  const onClick = () => {
    window.open('https://forms.gle/8iH4sSYCWj2v2kkr8');
  };

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.block}>
          <p className={styles.name}>RÉKA</p>
          <p className={styles.fancy}>és</p>
          <p className={styles.name}>LACI</p>
          <p className={styles.fancy}>összehazasodik</p>
          <p className={styles.details}>Kattints ide a visszajelzéshez!</p>
          <button
            className={styles.button}
            onClick={onClick}
          >Ott leszek!</button>
        </div>
        <div className={styles.block}>
          <p className={styles.title}>RÉSZLETEK</p>
          <div className={styles.blockrow}>
            <div className={styles.card}>
              <p className={styles.title}>Mikor</p>
              <p className={styles.detail}>Szeptember 12, 2024</p>
              <p className={styles.detail}>16:00</p>
            </div>
            <div className={styles.card}>
              <p className={styles.title}>Hol</p>
              <p className={styles.detail}>Társa Pagony, Penc</p>
              <p className={styles.detail}>Penc 033, 2614</p>
            </div>
          </div>
          <p className={styles.fancy}>Varunk szeretettel, hogy együtt ünnepeljünk!</p>
        </div>
      </div>
    </main>
  );
}

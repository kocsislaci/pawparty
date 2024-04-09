import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.background}></div>
      <div className={styles.description}>
        <h1>Sziasztok!</h1>
        <p>Mi, Réka és László, várunk szeretettel, hogy megünnepeljük együtt az esküvönket :)</p>
      </div>
      <div className={styles.content}>
        <div className={styles.top}>
          <p></p>
        </div>

        <div className={styles.center}>
          <p>Egyelőre ennyi, részletek majd érkeznek...</p>
        </div>

        <div className={styles.grid}>

          <a
            href="https://tarsapagony.hu/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Társa Pagony <span>-&gt;</span>
            </h2>
            <p>A helyszínünk es szállásadónk</p>
          </a>

          <p className={styles.card}>
            <h2>
              2024.09.12.
            </h2>
            <a href="https://www.google.com/maps/place/T%C3%A1rsa+Pagony/@47.81972,19.231959,17z" target="_blank">2614, Penc</a>
          </p>

          <a
            href="https://sefkereken.hu/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Séf Keréken <span>-&gt;</span>
            </h2>
            <p>Catering szolgáltatónk</p>
          </a>

        </div>
      </div>
    </main>
  );
}

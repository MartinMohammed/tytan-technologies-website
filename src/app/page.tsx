import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2 /* className={styles.h2} */>Hello world</h2>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}

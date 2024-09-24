import styles from "./page.module.css";
import NavBar from "./ui/nav-bar/nav-bar";
import HeroSection from "./ui/sections/hero-section/hero-section";

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <HeroSection />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

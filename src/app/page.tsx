import styles from "./page.module.css";
import NavBar from "./ui/nav-bar/nav-bar";
import HeroSection from "./ui/sections/hero-section/hero-section";
import MissionSection1 from "./ui/sections/mission-section/mission-section-1";

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <HeroSection />
        <MissionSection1 />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

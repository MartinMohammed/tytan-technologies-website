import styles from "@/app/page.module.css";
import Footer from "@/app/ui/footer/footer";
import NavBar from "@/app/ui/nav-bar/nav-bar";
import HeroSection from "@/app/ui/sections/hero-section/hero-section";
import MissionSection1 from "@/app/ui/sections/mission-section-1/mission-section-1";
import MissionSection2 from "@/app/ui/sections/mission-section-2/mission-section-2";

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <HeroSection />
        <MissionSection1 />
        <MissionSection2 />
      </main>
      <Footer />
    </div>
  );
}

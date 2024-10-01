import styles from "@/app/page.module.css";
import Footer from "@/app/ui/footer/footer";
import NavBar from "@/app/ui/nav-bar/nav-bar";
import HeroSection from "@/app/ui/sections/hero-section/hero-section";
import MissionSection1 from "@/app/ui/sections/mission-section-1/mission-section-1";
import MissionSection2 from "@/app/ui/sections/mission-section-2/mission-section-2";
import TytanInterceptorSection2 from "@/app/ui/sections/tytan-interceptor-section-2/tytan-interceptor-section-2";
import TytanInterceptorSection1 from "./ui/sections/tytan-interceptor-section-1/tytan-interceptor-section-1";
import CareersSection from "./ui/sections/careers-section/careers";
import NewsSection from "./ui/sections/news-section/news-section";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* --- Navbar --- */}
      <NavBar />
      <main className={styles.main}>
        {/* --- Hero Section --- */}
        <HeroSection />
        {/* --- Mission Section 1 --- */}
        <MissionSection1 />
        {/* --- Mission Section 2 --- */}
        <MissionSection2 />
        {/* --- Tytan Interceptor Section 1 --- */}
        <TytanInterceptorSection1 />
        {/* --- Tytan Interceptor Section 2 --- */}
        <TytanInterceptorSection2 />
        {/* --- Careers Section --- */}
        <CareersSection />
        {/* --- News Section --- */}
        <NewsSection />
      </main>
      {/* --- Footer --- */}
      <Footer />
    </div>
  );
}

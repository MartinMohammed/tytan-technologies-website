import React from "react";
import styles from "@/app/ui/sections/hero-section/hero-section.module.css";
import { HeroSectionContent } from "@/app/lib/content"; // Ensure that the path to the content file is correct

function HeroSection() {
  return (
    <section className={styles.hero_section}>
      <div className={styles.hero_container}>
        {/* Todo: In the future add the possibility to add an image instead of video. */}
        <video
          src={HeroSectionContent.video.src}
          autoPlay
          muted
          loop
          className={`media_fit_container ${styles.hero_media_item}`}
        />
        <div className={styles.text_container}>
          <h3 className={`${styles.sub_heading} small_text_style`}>
            {HeroSectionContent.subHeading}
          </h3>
          <h2 className={`${styles.primary_heading} large_text_style`}>
            {HeroSectionContent.primaryHeading}
          </h2>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

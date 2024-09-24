import React from "react";
import styles from "@/app/ui/sections/hero-section/hero-section.module.css";
import Image from "next/image";
import { HeroSectionContent } from "../../../lib/content"; // Ensure that the path to the content file is correct

function HeroSection() {
  return (
    <section className={styles.hero_section}>
      <div className={styles.hero_container}>
        <Image
          src={HeroSectionContent.video.src}
          alt={HeroSectionContent.video.alt}
          width={HeroSectionContent.video.width}
          height={HeroSectionContent.video.height}
          unoptimized
          className={styles.hero_image}
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

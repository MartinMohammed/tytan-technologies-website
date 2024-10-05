import React from "react";
import styles from "@/app/ui/sections/hero-section/hero-section.module.css";
import { HeroSectionContent } from "@/app/lib/content"; // Ensure that the path to the content file is correct
import HeadingGroup from "@/app/ui/components/heading-group/heading-group";

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
        {/* Overlay */}
        <div className={styles.heading_group_container}>
          <HeadingGroup
            primaryHeading={HeroSectionContent.headingGroup.primaryHeading}
            primaryHeadingTextStyle={
              HeroSectionContent.headingGroup.primaryHeadingTextStyle
            }
            subHeading={HeroSectionContent.headingGroup.subHeading}
            subHeadingTextColor={
              HeroSectionContent.headingGroup.subHeadingTextColor
            }
            reverse={HeroSectionContent.headingGroup.reverse}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

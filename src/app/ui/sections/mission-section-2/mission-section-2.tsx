import React from "react";
import styles from "@/app/ui/sections/mission-section-2/mission-section-2.module.css";
import { MissionSection2Content } from "@/app/lib/content";
import FlexContainer from "@/app/ui/flex-container/flex-container";

function MissionSection2() {
  const leftContent = (
    <div>
      <h2 className={`${styles.primary_heading} medium_text_style`}>
        {MissionSection2Content.flexContainer.leftContainer.primaryHeading}
      </h2>
      <h3 className={`${styles.sub_heading} small_text_style`}>
        {MissionSection2Content.flexContainer.leftContainer.subHeading}
      </h3>
    </div>
  );

  const rightContent = (
    <div>
      <video
        src={MissionSection2Content.flexContainer.rightContainer.video.src}
        width={MissionSection2Content.flexContainer.rightContainer.video.width}
        autoPlay
        loop
        muted
      />
    </div>
  );

  return (
    <section className={styles.mission_section_2}>
      <FlexContainer
        leftFlexPercentage={
          MissionSection2Content.flexContainer.leftFlexPercentage
        }
        gap={MissionSection2Content.flexContainer.gap}
        leftComponent={leftContent}
        rightComponent={rightContent}
        padding={MissionSection2Content.flexContainer.padding}
        alignItems={MissionSection2Content.flexContainer.alignItems}
      />
    </section>
  );
}

export default MissionSection2;

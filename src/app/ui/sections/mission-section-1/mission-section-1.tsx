import React from "react";
import styles from "@/app/ui/sections/mission-section-1/mission-section-1.module.css";
import { MissionSection1Content } from "@/app/lib/content";
import FlexContainer from "@/app/ui/flex-container/flex-container";

function MissionSection1() {
  const leftContent = (
    <div>
      <h3 className={`${styles.sub_heading} small_text_style`}>
        {MissionSection1Content.flexContainer.leftContainer.subHeading}
      </h3>
      <h2 className={`${styles.primary_heading} medium_text_style`}>
        {MissionSection1Content.flexContainer.leftContainer.primaryHeading}
      </h2>
    </div>
  );

  const rightContent = (
    <div>
      {MissionSection1Content.flexContainer.rightContainer.body.map(
        (bodyPart, index) => {
          return (
            <p
              key={`body-part-${index}`}
              className={`${styles.body} small_text_style`}
            >
              {bodyPart}
            </p>
          );
        }
      )}
    </div>
  );

  return (
    <section className={styles.mission_section_1}>
      <FlexContainer
        leftFlexPercentage={
          MissionSection1Content.flexContainer.leftFlexPercentage
        }
        gap={MissionSection1Content.flexContainer.gap}
        leftComponent={leftContent}
        rightComponent={rightContent}
        padding={MissionSection1Content.flexContainer.padding}
        alignItems={MissionSection1Content.flexContainer.alignItems}
      />
    </section>
  );
}

export default MissionSection1;

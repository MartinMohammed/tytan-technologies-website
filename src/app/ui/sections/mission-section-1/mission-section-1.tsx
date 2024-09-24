import React from "react";
import styles from "@/app/ui/sections/mission-section-1/mission-section-1.module.css";
import { MissionSection1Content } from "@/app/lib/content";
import FlexContainer from "@/app/ui/components/flex-container/flex-container";
import { TEXT_STYLES } from "@/app/lib/definition";

function MissionSection1() {
  const leftContent = (
    <div>
      <h3 className={`${styles.sub_heading} ${TEXT_STYLES.SMALL_TEXT_STYLE}`}>
        {MissionSection1Content.flexContainer.leftContainer.subHeading}
      </h3>
      <h2
        className={`${styles.primary_heading} ${TEXT_STYLES.MEDIUM_TEXT_STYLE}`}
      >
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
              className={`${styles.body} ${TEXT_STYLES.SMALL_TEXT_STYLE}`}
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
        justifyContent={MissionSection1Content.flexContainer.justifyContent}
      />
    </section>
  );
}

export default MissionSection1;

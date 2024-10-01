import React from "react";
import styles from "@/app/ui/sections/mission-section-1/mission-section-1.module.css";
import { MissionSection1Content } from "@/app/lib/content";
import FlexContainer from "@/app/ui/components/flex-container/flex-container";
import { TEXT_STYLES_ENUM } from "@/app/lib/definition";
import WrapperContainer from "@/app/ui/components/wrapper-container/wrapper-container";

function MissionSection1() {
  const leftContent = (
    <div className={styles.left_content_container}>
      <h3
        className={`${styles.sub_heading} ${TEXT_STYLES_ENUM.SMALL_TEXT_STYLE}`}
      >
        {MissionSection1Content.flexContainer.leftContainer.subHeading}
      </h3>
      <h2
        className={`${styles.primary_heading} ${TEXT_STYLES_ENUM.MEDIUM_TEXT_STYLE}`}
      >
        {MissionSection1Content.flexContainer.leftContainer.primaryHeading}
      </h2>
    </div>
  );

  const rightContent = (
    <div className={styles.right_content_container}>
      {MissionSection1Content.flexContainer.rightContainer.body.map(
        (bodyPart, index) => {
          return (
            <p
              key={`body-part-${index}`}
              className={`${styles.body} ${TEXT_STYLES_ENUM.SMALL_TEXT_STYLE}`}
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
      <WrapperContainer>
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
      </WrapperContainer>
    </section>
  );
}

export default MissionSection1;

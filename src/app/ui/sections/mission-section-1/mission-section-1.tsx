import React from "react";
import styles from "@/app/ui/sections/mission-section-1/mission-section-1.module.css";
import { MissionSection1Content } from "@/app/lib/content";
import FlexContainer from "@/app/ui/components/flex-container/flex-container";
import { TEXT_STYLES_ENUM } from "@/app/lib/definition";
import ContentWrapper from "@/app/ui/components/content-wrapper/content-wrapper";
import HeadingGroup from "@/app/ui/components/heading-group/heading-group";

function MissionSection1() {
  const leftContent = (
    <div className={styles.left_content_container}>
      <HeadingGroup
        reverse={
          MissionSection1Content.flexContainer.leftContainer.headingGroup
            .reverse
        }
        primaryHeading={
          MissionSection1Content.flexContainer.leftContainer.headingGroup
            .primaryHeading
        }
        subHeading={
          MissionSection1Content.flexContainer.leftContainer.headingGroup
            .subHeading
        }
      />
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
    <section className={styles.mission_section_1} id="mission-section-1">
      <ContentWrapper>
        <FlexContainer
          leftFlexPercentage={
            MissionSection1Content.flexContainer.leftFlexPercentage
          }
          leftComponent={leftContent}
          rightComponent={rightContent}
        />
      </ContentWrapper>
    </section>
  );
}

export default MissionSection1;

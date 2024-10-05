import React from "react";
import styles from "@/app/ui/sections/mission-section-2/mission-section-2.module.css";
import { MissionSection2Content } from "@/app/lib/content";
import FlexContainer from "@/app/ui/components/flex-container/flex-container";
import ContentWrapper from "@/app/ui/components/content-wrapper/content-wrapper";
import HeadingGroup from "@/app/ui/components/heading-group/heading-group";

function MissionSection2() {
  const leftContent = (
    <div className={styles.left_content_container}>
      <HeadingGroup
        primaryHeading={
          MissionSection2Content.flexContainer.leftContainer.headingGroup
            .primaryHeading
        }
        subHeading={
          MissionSection2Content.flexContainer.leftContainer.headingGroup
            .subHeading
        }
      />
    </div>
  );

  const rightContent = (
    <div className={styles.right_content_container}>
      <video
        src={MissionSection2Content.flexContainer.rightContainer.video.src}
        autoPlay
        loop
        muted
        className={`media_fit_container ${styles.right_content_container_media_item}`}
      />
    </div>
  );

  return (
    <section className={styles.mission_section_2} id="mission-section-2">
      <ContentWrapper>
        <FlexContainer
          leftFlexPercentage={
            MissionSection2Content.flexContainer.leftFlexPercentage
          }
          leftComponent={leftContent}
          rightComponent={rightContent}
        />
      </ContentWrapper>
    </section>
  );
}

export default MissionSection2;

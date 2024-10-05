import React from "react";
import styles from "@/app/ui/sections/careers-section/careers.module.css";
import ContentWrapper from "@/app/ui/components/content-wrapper/content-wrapper";
import { CareersSectionContent } from "@/app/lib/content";
import JobListContainer from "@/app/ui/sections/careers-section/job-list-container";
import HeadingGroup from "@/app/ui/components/heading-group/heading-group";

function CareersSection() {
  return (
    <section className={styles.careers_section} id="careers-section">
      <ContentWrapper>
        <div className={styles.careers_container}>
          <HeadingGroup
            marginBottom={CareersSectionContent.headingGroup.marginBottom}
            primaryHeading={CareersSectionContent.headingGroup.primaryHeading}
            subHeading={CareersSectionContent.headingGroup.subHeading}
          />
          <JobListContainer
            jobs={CareersSectionContent.jobs}
            icon={CareersSectionContent.icon}
            itemsPerPage={2}
          />
        </div>
      </ContentWrapper>
    </section>
  );
}

export default CareersSection;

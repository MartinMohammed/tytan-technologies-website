import React from "react";
import styles from "@/app/ui/sections/careers-section/careers.module.css";
import WrapperContainer from "@/app/ui/components/wrapper-container/wrapper-container";
import { CareersSectionContent } from "@/app/lib/content";
import JobListContainer from "@/app/ui/sections/careers-section/job-list-container";
import HeadingGroup from "@/app/ui/components/heading-group/heading-group";

function CareersSection() {
  return (
    <section className={styles.careers_section} id="careers-section">
      <WrapperContainer>
        <div className={styles.careers_container}>
          <HeadingGroup
            marginBottom={90}
            primaryHeading={CareersSectionContent.headingGroup.primaryHeading}
            subHeading={CareersSectionContent.headingGroup.subHeading}
          />
          <JobListContainer
            jobs={CareersSectionContent.jobs}
            icon={CareersSectionContent.icon}
            itemsPerPage={2}
          />
        </div>
      </WrapperContainer>
    </section>
  );
}

export default CareersSection;

import React from "react";
import styles from "@/app/ui/sections/careers-section/careers.module.css";
import WrapperContainer from "@/app/ui/components/wrapper-container/wrapper-container";
import { CareersSectionContent } from "@/app/lib/content";
import { TEXT_STYLES_ENUM } from "@/app/lib/definition";
import JobListContainer from "@/app/ui/sections/careers-section/job-list-container";

function CareersSection() {
  return (
    <section className={styles.careers_section}>
      <WrapperContainer>
        <div className={styles.careers_container}>
          <div className={styles.heading_container}>
            <h2
              className={`${TEXT_STYLES_ENUM.MEDIUM_TEXT_STYLE} ${styles.primary_heading}`}
            >
              {CareersSectionContent.primaryHeading}
            </h2>
            <h3
              className={`${TEXT_STYLES_ENUM.SMALL_TEXT_STYLE} ${styles.sub_heading}`}
            >
              {CareersSectionContent.subHeading}
            </h3>
          </div>
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

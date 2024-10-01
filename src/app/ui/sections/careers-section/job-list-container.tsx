"use client";
import React, { useState } from "react";
import styles from "@/app/ui/sections/careers-section/job-list-container.module.css";
import { IJob } from "@/app/lib/definition";
import { TEXT_STYLES_ENUM } from "@/app/lib/definition";
import Image from "next/image";
import { CareersSectionContent } from "@/app/lib/content";

interface IJobListContainerProps {
  jobs: IJob[];
  itemsPerPage?: number;
}

function JobListContainer({ jobs, itemsPerPage = 3 }: IJobListContainerProps) {
  const [jobPage, setJobPage] = useState(0);
  const numberOfPages = Math.ceil(jobs.length / itemsPerPage);

  const Pagination = (
    <div className={styles.pagination}>
      {[...Array(numberOfPages)].map((_, index) => (
        <span
          key={`job-item-${index}`}
          className={`${styles.page_number} ${
            jobPage === index ? styles.active : ""
          }`}
          onClick={() => {
            setJobPage(index);
          }}
        >
          {index + 1}
        </span>
      ))}
    </div>
  );

  return (
    <div className={styles.job_list_container}>
      <div className={styles.job_list}>
        {jobs
          .slice(jobPage * numberOfPages, (jobPage + 1) * itemsPerPage)
          .map((job, index) => (
            <div key={index} className={styles.job_item}>
              <span
                className={`${TEXT_STYLES_ENUM.SMALL_TEXT_STYLE} ${styles.job_title}`}
              >
                {job.title}
              </span>
              <span
                className={`${TEXT_STYLES_ENUM.SMALL_TEXT_STYLE} ${styles.job_department}`}
              >
                {job.department}
              </span>
              <span
                className={`${TEXT_STYLES_ENUM.SMALL_TEXT_STYLE} ${styles.job_product}`}
              >
                {job.product}
              </span>
              <div className={styles.job_item_right_section}>
                <span
                  className={`${TEXT_STYLES_ENUM.SMALL_TEXT_STYLE} ${styles.job_location}`}
                >
                  {job.location}
                </span>
                <Image
                  src={CareersSectionContent.icon.src}
                  alt={CareersSectionContent.icon.alt}
                  width={CareersSectionContent.icon.width}
                  height={CareersSectionContent.icon.height}
                  className={styles.arrow}
                />
              </div>
            </div>
          ))}
      </div>
      {Pagination}
    </div>
  );
}

export default JobListContainer;

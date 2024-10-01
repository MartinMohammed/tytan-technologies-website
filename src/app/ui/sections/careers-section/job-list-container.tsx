"use client";
import React, { useState } from "react";
import styles from "@/app/ui/sections/careers-section/job-list-container.module.css";
import { IJob } from "@/app/lib/definition";
import { CareersSectionContent } from "@/app/lib/content";
import Pagination from "@/app/ui/components/pagination/pagination";
import JobItem from "@/app/ui/sections/careers-section/job-item";

interface IJobListContainerProps {
  jobs: IJob[];
  itemsPerPage?: number;
}

function JobListContainer({ jobs, itemsPerPage = 3 }: IJobListContainerProps) {
  const [jobPage, setJobPage] = useState(0);
  const numberOfPages = Math.ceil(jobs.length / itemsPerPage);

  return (
    <div className={styles.job_list_container}>
      <div className={styles.job_list}>
        {jobs
          .slice(jobPage * numberOfPages, (jobPage + 1) * itemsPerPage)
          .map((job, index) => (
            <JobItem
              job={job}
              key={`job-item-${index}`}
              icon={CareersSectionContent.icon}
            />
          ))}
      </div>
      <Pagination
        numberOfPages={numberOfPages}
        currentPage={jobPage}
        onClick={(index) => setJobPage(index)}
      />
    </div>
  );
}

export default JobListContainer;

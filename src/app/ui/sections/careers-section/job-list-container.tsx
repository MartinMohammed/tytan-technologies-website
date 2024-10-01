"use client";
import React, { useState } from "react";
import styles from "@/app/ui/sections/careers-section/job-list-container.module.css";
import { IImage, IJobItem } from "@/app/lib/definition";
import Pagination from "@/app/ui/components/pagination/pagination";
import JobItem from "@/app/ui/sections/careers-section/job-item";

interface IJobListContainerProps {
  jobs: IJobItem[];
  icon: IImage;
  itemsPerPage?: number;
}

function JobListContainer({
  jobs,
  icon,
  itemsPerPage = 2,
}: IJobListContainerProps) {
  const [jobPage, setJobPage] = useState(0);
  const numberOfPages = Math.ceil(jobs.length / itemsPerPage);

  return (
    <div className={styles.job_list_container}>
      <div className={styles.job_list}>
        {jobs
          .slice(jobPage * numberOfPages, (jobPage + 1) * itemsPerPage)
          .map((jobItem, index) => (
            <JobItem jobItem={jobItem} key={`job-item-${index}`} icon={icon} />
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

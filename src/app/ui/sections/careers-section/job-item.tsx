import React from "react";
import styles from "@/app/ui/sections/careers-section/job-item.module.css";
import { IImage, IJobItem, TEXT_STYLES_ENUM } from "@/app/lib/definition";
import Image from "next/image";
import Link from "next/link";

interface IJobItemProps {
  jobItem: IJobItem;
  icon: IImage;
}

// Generalize it as component like "ListItem"
function JobItem({ jobItem, icon }: IJobItemProps) {
  return (
    <Link href={jobItem.href} target="_blank">
      <div className={styles.job_item}>
        <span
          className={`${TEXT_STYLES_ENUM.SMALL_TEXT_STYLE} ${styles.job_title}`}
        >
          {jobItem.title}
        </span>
        <span
          className={`${TEXT_STYLES_ENUM.SMALL_TEXT_STYLE} ${styles.job_department}`}
        >
          {jobItem.department}
        </span>
        <span
          className={`${TEXT_STYLES_ENUM.SMALL_TEXT_STYLE} ${styles.job_product}`}
        >
          {jobItem.employmentLevel}
        </span>
        <div className={styles.job_item_right_section}>
          <span
            className={`${TEXT_STYLES_ENUM.SMALL_TEXT_STYLE} ${styles.job_location}`}
          >
            {jobItem.location}
          </span>

          <Image {...icon} className={styles.arrow} />
        </div>
      </div>
    </Link>
  );
}

export default JobItem;

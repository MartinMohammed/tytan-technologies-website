import React from "react";
import styles from "@/app/ui/sections/careers-section/job-item.module.css";
import { IImage, IJob, TEXT_STYLES_ENUM } from "@/app/lib/definition";
import Image from "next/image";
import Link from "next/link";

interface IJobItemProps {
  job: IJob;
  icon: IImage;
}

function JobItem({ job, icon }: IJobItemProps) {
  return (
    <Link href={job.href} target="_blank">
      <div className={styles.job_item}>
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
            src={icon.src}
            alt={icon.alt}
            width={icon.width}
            height={icon.height}
            className={styles.arrow}
          />
        </div>
      </div>
    </Link>
  );
}

export default JobItem;

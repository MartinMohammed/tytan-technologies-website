"use client";
import React from "react";
import styles from "@/app/ui/components/pagination/pagination.module.css";

interface IPaginationProps {
  numberOfPages: number;
  currentPage: number;
  onClick: (pageNumber: number) => void;
}

function Pagination({
  numberOfPages,
  currentPage,
  onClick = () => {},
}: IPaginationProps) {
  return (
    <div className={styles.pagination}>
      {[...Array(numberOfPages)].map((_, index) => (
        <span
          key={`pagination-item-${index}`}
          className={`${styles.page_number} ${
            currentPage === index ? styles.active : ""
          }`}
          onClick={() => {
            onClick(index);
          }}
        >
          {index + 1}
        </span>
      ))}
    </div>
  );
}

export default Pagination;

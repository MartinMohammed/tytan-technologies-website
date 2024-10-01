"use client";
import React, { useState } from "react";
import styles from "@/app/ui/sections/news-section/news-list-container.module.css";
import { IImage, INewsItem } from "@/app/lib/definition";
import Pagination from "@/app/ui/components/pagination/pagination";
import NewsItem from "@/app/ui/sections/news-section/news-item";

interface INewsListContainerProps {
  news: INewsItem[];
  icon: IImage;
  itemsPerPage?: number;
}

function NewsListContainer({
  news,
  icon,
  itemsPerPage = 3,
}: INewsListContainerProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const numberOfPages = Math.ceil(news.length / itemsPerPage);

  return (
    <div className={styles.news_list_container}>
      <div className={styles.news_list}>
        {news
          .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
          .map((newsItem, index) => (
            <NewsItem key={index} newsItem={newsItem} icon={icon} />
          ))}
      </div>

      <Pagination
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        onClick={(pageNumber) => setCurrentPage(pageNumber)}
      />
    </div>
  );
}

export default NewsListContainer;

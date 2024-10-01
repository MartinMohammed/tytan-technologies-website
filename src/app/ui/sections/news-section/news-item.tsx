"use client";
import React from "react";
import styles from "@/app/ui/sections/news-section/news-item.module.css";
import Image from "next/image";
import { formatDate } from "@/app/lib/formatting"; // Helper function to format dates
import { IImage, INewsItem, TEXT_STYLES_ENUM } from "@/app/lib/definition";
import Link from "next/link";

interface INewsItemProps {
  newsItem: INewsItem;
  icon: IImage;
}

function NewsItem({ newsItem, icon }: INewsItemProps) {
  return (
    <Link href={newsItem.href} className={styles.link_element} target="_blank">
      <div className={styles.news_item}>
        <div className={styles.news_item_image_container}>
          <Image
            src={newsItem.image.src}
            alt={newsItem.image.alt}
            fill
            className={`media_fit_container ${styles.news_item_image_item}`}
          />
        </div>
        <p
          className={`${TEXT_STYLES_ENUM.SMALL_TEXT_STYLE} ${styles.news_date}`}
        >
          {formatDate(newsItem.date)}
        </p>

        <div className={styles.news_item_tail}>
          <h3
            className={`${TEXT_STYLES_ENUM.SMALL_TEXT_STYLE} ${styles.news_title}`}
          >
            {newsItem.title}
          </h3>
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

export default NewsItem;

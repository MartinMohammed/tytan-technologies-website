import React from "react";
import styles from "@/app/ui/sections/news-section/news-section.module.css";
import NewsListContainer from "@/app/ui/sections/news-section/news-list-container";
import { NewsSectionContent } from "@/app/lib/content";
import WrapperContainer from "@/app/ui/components/wrapper-container/wrapper-container";
import { TEXT_STYLES_ENUM } from "@/app/lib/definition";

function NewsSection() {
  return (
    <section className={styles.news_section}>
      <WrapperContainer>
        <div className={styles.news_container}>
          <div className={styles.heading_container}>
            <h1
              className={`${TEXT_STYLES_ENUM.MEDIUM_TEXT_STYLE} ${styles.primary_heading}`}
            >
              {NewsSectionContent.primaryHeading}
            </h1>
          </div>
          <NewsListContainer
            itemsPerPage={NewsSectionContent.itemsPerPage}
            news={NewsSectionContent.news}
            icon={NewsSectionContent.icon}
          />
        </div>
      </WrapperContainer>
    </section>
  );
}

export default NewsSection;

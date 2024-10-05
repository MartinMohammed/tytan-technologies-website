import React from "react";
import styles from "@/app/ui/sections/news-section/news-section.module.css";
import NewsListContainer from "@/app/ui/sections/news-section/news-list-container";
import { NewsSectionContent } from "@/app/lib/content";
import ContentWrapper from "@/app/ui/components/content-wrapper/content-wrapper";
import HeadingGroup from "@/app/ui/components/heading-group/heading-group";

function NewsSection() {
  return (
    <section className={styles.news_section} id="news-section">
      <ContentWrapper {...NewsSectionContent.ContentWrapper}>
        <div className={styles.news_container}>
          <HeadingGroup {...NewsSectionContent.headingGroup} />
          <NewsListContainer
            itemsPerPage={NewsSectionContent.itemsPerPage}
            news={NewsSectionContent.news}
            icon={NewsSectionContent.icon}
          />
        </div>
      </ContentWrapper>
    </section>
  );
}

export default NewsSection;

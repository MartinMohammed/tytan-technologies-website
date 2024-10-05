import React from "react";
import styles from "@/app/ui/sections/news-section/news-section.module.css";
import NewsListContainer from "@/app/ui/sections/news-section/news-list-container";
import { NewsSectionContent } from "@/app/lib/content";
import WrapperContainer from "@/app/ui/components/wrapper-container/wrapper-container";
import HeadingGroup from "@/app/ui/components/heading-group/heading-group";

function NewsSection() {
  return (
    <section className={styles.news_section} id="news-section">
      <WrapperContainer>
        <div className={styles.news_container}>
          <HeadingGroup
            primaryHeading={NewsSectionContent.headingGroup.primaryHeading}
            marginBottom={77}
          />
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

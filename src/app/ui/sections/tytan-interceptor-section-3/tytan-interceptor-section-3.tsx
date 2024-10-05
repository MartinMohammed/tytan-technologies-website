import React from "react";
import styles from "@/app/ui/sections/tytan-interceptor-section-3/tytan-interceptor-section-3.module.css";
import ContentWrapper from "@/app/ui/components/content-wrapper/content-wrapper";
import FlexContainer from "@/app/ui/components/flex-container/flex-container";
import { TytanInterceptorSection3Content } from "@/app/lib/content";
import Image from "next/image";
import HeadingGroup from "@/app/ui/components/heading-group/heading-group";
import { omit } from "@/app/lib/utils";

function TytanInterceptorSection3() {
  const leftContainer = (
    <div className={styles.left_content_container}>
      {TytanInterceptorSection3Content.flexContainer.leftContainerContent.headingGroups.map(
        (headingGroup, index) => {
          return (
            <HeadingGroup
              key={`tytan-interceptor-section-3-heading-group-${index}`}
              {...headingGroup}
            />
          );
        }
      )}
    </div>
  );
  const rightContainer = (
    <div className={styles.right_content_container}>
      <Image
        {...TytanInterceptorSection3Content.flexContainer.rightContainerContent
          .image}
        fill
        priority
        className={`media_fit_container ${styles.right_content_container_image_item}`}
      />
    </div>
  );
  return (
    <section
      className={styles.tytan_interceptor_section_3}
      id="tytan-interceptor-section-3"
    >
      <ContentWrapper {...TytanInterceptorSection3Content.ContentWrapper}>
        <FlexContainer
          {...omit(TytanInterceptorSection3Content.flexContainer, [
            "leftContainerContent",
            "rightContainerContent",
          ])}
          leftComponent={leftContainer}
          rightComponent={rightContainer}
        />
      </ContentWrapper>
    </section>
  );
}

export default TytanInterceptorSection3;

import React from "react";
import styles from "@/app/ui/sections/tytan-interceptor-section-3/tytan-interceptor-section-3.module.css";
import WrapperContainer from "@/app/ui/components/wrapper-container/wrapper-container";
import FlexContainer from "@/app/ui/components/flex-container/flex-container";
import { TytanInterceptorSection3Content } from "@/app/lib/content";
import Image from "next/image";
import HeadingGroup from "@/app/ui/components/heading-group/heading-group";

function TytanInterceptorSection3() {
  const leftContent = (
    <div className={styles.left_content_container}>
      {TytanInterceptorSection3Content.flexContainer.leftContainer.headingGroups.map(
        (headingGroup, index) => {
          return (
            <HeadingGroup
              key={`tytan-interceptor-section-3-heading-group-${index}`}
              primaryHeading={headingGroup.primaryHeading}
              subHeading={headingGroup.subHeading}
            />
          );
        }
      )}
    </div>
  );
  const rightContent = (
    <div className={styles.right_content_container}>
      <Image
        src={
          TytanInterceptorSection3Content.flexContainer.rightContainer.image.src
        }
        alt={
          TytanInterceptorSection3Content.flexContainer.rightContainer.image.alt
        }
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
      <WrapperContainer paddingBottom={0} paddingTop={0}>
        <FlexContainer
          leftFlexPercentage={
            TytanInterceptorSection3Content.flexContainer.leftFlexPercentage
          }
          gap={TytanInterceptorSection3Content.flexContainer.gap}
          leftComponent={leftContent}
          rightComponent={rightContent}
          padding={TytanInterceptorSection3Content.flexContainer.padding}
          alignItems={TytanInterceptorSection3Content.flexContainer.alignItems}
          justifyContent={
            TytanInterceptorSection3Content.flexContainer.justifyContent
          }
        />
      </WrapperContainer>
    </section>
  );
}

export default TytanInterceptorSection3;

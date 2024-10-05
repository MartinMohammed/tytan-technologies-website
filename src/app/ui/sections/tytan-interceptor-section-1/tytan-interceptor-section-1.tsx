import React from "react";
import styles from "@/app/ui/sections/tytan-interceptor-section-1/tytan-interceptor-section-1.module.css";
import Image from "next/image";
import ContentWrapper from "@/app/ui/components/content-wrapper/content-wrapper";
import { TytanInterceptorSection1Content } from "@/app/lib/content";
import CharacteristicItem from "@/app/ui/components/characteristic-item/characteristic-item";
import FlexContainer from "@/app/ui/components/flex-container/flex-container";
import HeadingGroup from "@/app/ui/components/heading-group/heading-group";

function TytanInterceptorSection1() {
  const leftContent = (
    <div className={styles.left_content_container}>
      <Image
        src={
          TytanInterceptorSection1Content.flexContainer.leftContainer.image.src
        }
        alt={
          TytanInterceptorSection1Content.flexContainer.leftContainer.image.alt
        }
        fill
        priority
        className={`media_fit_container ${styles.left_content_container_image_item}`}
      />
    </div>
  );

  {
    /* Right-hand side with the description */
  }
  const rightContent = (
    <div className={styles.right_content_container}>
      <HeadingGroup
        widthPct={
          TytanInterceptorSection1Content.flexContainer.rightContainer
            .headingGroup.widthPct
        }
        primaryHeading={
          TytanInterceptorSection1Content.flexContainer.rightContainer
            .headingGroup.primaryHeading
        }
        subHeading={
          TytanInterceptorSection1Content.flexContainer.rightContainer
            .headingGroup.subHeading
        }
      />

      {/* Specifications */}
      <div className={styles.characteristics}>
        {TytanInterceptorSection1Content.flexContainer.rightContainer.characteristicItems.map(
          (characteristicItem, index) => {
            return (
              <CharacteristicItem
                key={`characteristic-item-${index}`}
                {...characteristicItem}
              />
            );
          }
        )}
      </div>
    </div>
  );

  return (
    <section
      className={styles.tytan_interceptor_section_1}
      id="tytan-interceptor-section-1"
    >
      <ContentWrapper>
        <FlexContainer
          leftFlexPercentage={
            TytanInterceptorSection1Content.flexContainer.leftFlexPercentage
          }
          leftComponent={leftContent}
          rightComponent={rightContent}
        />
      </ContentWrapper>
    </section>
  );
}

export default TytanInterceptorSection1;

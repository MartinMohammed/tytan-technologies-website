import React from "react";
import styles from "@/app/ui/sections/tytan-interceptor-section-1/tytan-interceptor-section-1.module.css";
import Image from "next/image";
import ContentWrapper from "@/app/ui/components/content-wrapper/content-wrapper";
import { TytanInterceptorSection1Content } from "@/app/lib/content";
import CharacteristicItem from "@/app/ui/components/characteristic-item/characteristic-item";
import FlexContainer from "@/app/ui/components/flex-container/flex-container";
import HeadingGroup from "@/app/ui/components/heading-group/heading-group";
import { omit } from "@/app/lib/utils";

function TytanInterceptorSection1() {
  const leftContainer = (
    <div className={styles.left_content_container}>
      <Image
        {...TytanInterceptorSection1Content.flexContainer.leftContainer.image}
        fill
        priority
        className={`media_fit_container ${styles.left_content_container_image_item}`}
      />
    </div>
  );

  {
    /* Right-hand side with the description */
  }
  const rightContainer = (
    <div className={styles.right_content_container}>
      <HeadingGroup
        {...TytanInterceptorSection1Content.flexContainer.rightContainer
          .headingGroup}
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
      <ContentWrapper {...TytanInterceptorSection1Content.ContentWrapper}>
        <FlexContainer
          {...omit(TytanInterceptorSection1Content.flexContainer, [
            "leftContainer",
            "rightContainer",
          ])}
          leftComponent={leftContainer}
          rightComponent={rightContainer}
        />
      </ContentWrapper>
    </section>
  );
}

export default TytanInterceptorSection1;

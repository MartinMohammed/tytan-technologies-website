import React from "react";
import styles from "@/app/ui/sections/tytan-interceptor-section-1/tytan-interceptor-section-1.module.css";
import Image from "next/image";
import WrapperContainer from "@/app/ui/components/wrapper-container/wrapper-container";
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
        widthPct={140}
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
      <WrapperContainer>
        <FlexContainer
          leftFlexPercentage={
            TytanInterceptorSection1Content.flexContainer.leftFlexPercentage
          }
          gap={TytanInterceptorSection1Content.flexContainer.gap}
          leftComponent={leftContent}
          rightComponent={rightContent}
          padding={TytanInterceptorSection1Content.flexContainer.padding}
          alignItems={TytanInterceptorSection1Content.flexContainer.alignItems}
          justifyContent={
            TytanInterceptorSection1Content.flexContainer.justifyContent
          }
        />
      </WrapperContainer>
    </section>
  );
}

export default TytanInterceptorSection1;

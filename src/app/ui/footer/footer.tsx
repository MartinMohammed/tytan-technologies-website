// footer.tsx
import React from "react";
import styles from "@/app/ui/footer/footer.module.css";
import FlexContainer from "@/app/ui/components/flex-container/flex-container";
import { FooterContent } from "@/app/lib/content";
import LinkItem from "@/app/ui/components/link-item/link-item";
import ContentWrapper from "@/app/ui/components/content-wrapper/content-wrapper";
import LinkImage from "@/app/ui/components/link-image/link-image";
import { omit } from "@/app/lib/utils";

function Footer() {
  const leftContainer = (
    <div className={styles.left_content_container}>
      <LinkImage {...FooterContent.flexContainer.leftContainerContent.logo} />
    </div>
  );

  const rightContainer = (
    <div className={styles.right_content_container}>
      <div className={styles.footer_items}>
        {FooterContent.flexContainer.rightContainerContent.footerItems.map(
          (linkItem, index) => (
            <LinkItem key={`footer-item-${index}`} {...linkItem} />
          )
        )}
      </div>
      <div className={styles.footer_social_icons}>
        {FooterContent.flexContainer.rightContainerContent.footerSocialIcons.map(
          (footerSocialIcon, index) => (
            <LinkImage
              key={`footer-social-icon-${index}`}
              {...footerSocialIcon}
            />
          )
        )}
      </div>
    </div>
  );

  return (
    <footer className={styles.footer} id="footer">
      <ContentWrapper {...FooterContent.ContentWrapper}>
        <FlexContainer
          leftComponent={leftContainer}
          rightComponent={rightContainer}
          {...omit(FooterContent.flexContainer, [
            "leftContainerContent",
            "rightContainerContent",
          ])}
        />
      </ContentWrapper>
    </footer>
  );
}

export default Footer;

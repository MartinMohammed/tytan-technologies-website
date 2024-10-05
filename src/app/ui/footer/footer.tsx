// footer.tsx
import React from "react";
import styles from "@/app/ui/footer/footer.module.css";
import FlexContainer from "@/app/ui/components/flex-container/flex-container";
import { FooterContent } from "@/app/lib/content";
import Image from "next/image";
import LinkItem from "@/app/ui/components/link-item/link-item";
import Link from "next/link";
import ContentWrapper from "@/app/ui/components/content-wrapper/content-wrapper";
import LinkImage from "@/app/ui/components/link-image/link-image";

function Footer() {
  const leftContent = (
    <div className={styles.left_content_container}>
      <Link
        href={FooterContent.flexContainer.leftContainer.logo.href}
        className={styles.footer_logo}
      >
        <Image
          src={FooterContent.flexContainer.leftContainer.logo.src}
          width={FooterContent.flexContainer.leftContainer.logo.width}
          height={FooterContent.flexContainer.leftContainer.logo.height}
          alt={FooterContent.flexContainer.leftContainer.logo.alt}
        />
      </Link>
    </div>
  );

  const rightContent = (
    <div className={styles.right_content_container}>
      <div className={styles.footer_items}>
        {FooterContent.flexContainer.rightContainer.footerItems.map(
          ({ text, href, targetBlank }, index) => (
            <LinkItem
              key={`footer-item-${index}`}
              href={href}
              text={text}
              targetBlank={targetBlank}
            />
          )
        )}
      </div>
      <div className={styles.footer_social_icons}>
        {FooterContent.flexContainer.rightContainer.footerSocialIcons.map(
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
      <ContentWrapper
        paddingLeft={FooterContent.ContentWrapper.paddingLeft}
        paddingRight={FooterContent.ContentWrapper.paddingRight}
      >
        <FlexContainer
          leftFlexPercentage={FooterContent.flexContainer.leftFlexPercentage}
          gap={FooterContent.flexContainer.gap}
          leftComponent={leftContent}
          rightComponent={rightContent}
          justifyContent={FooterContent.flexContainer.justifyContent}
        />
      </ContentWrapper>
    </footer>
  );
}

export default Footer;

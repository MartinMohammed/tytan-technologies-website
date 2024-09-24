// footer.tsx
import React from "react";
import styles from "@/app/ui/footer/footer.module.css";
import FlexContainer from "@/app/ui/components/flex-container/flex-container";
import { FooterContent } from "@/app/lib/content";
import Image from "next/image";
import LinkItem from "../components/link-item/link-item";
import Link from "next/link";

function Footer() {
  const leftContent = (
    <div>
      <Image
        src={FooterContent.flexContainer.leftContainer.logo.src}
        width={FooterContent.flexContainer.leftContainer.logo.width}
        height={FooterContent.flexContainer.leftContainer.logo.height}
        alt={FooterContent.flexContainer.leftContainer.logo.alt}
      />
    </div>
  );

  const rightContent = (
    <div className={styles.footer_content_container}>
      <div className={styles.footer_items}>
        {FooterContent.flexContainer.rightContainer.footerItems.map(
          ({ text, href }, index) => (
            <LinkItem key={`footer-item-${index}`} href={href} text={text} />
          )
        )}
      </div>
      <div className={styles.footer_social_icons}>
        {FooterContent.flexContainer.rightContainer.footerSocialIcons.map(
          ({ src, alt, width, height, href }, index) => (
            <Link href={href} key={`footer-social-icon-${index}`}>
              <Image src={src} alt={alt} width={width} height={height} />
            </Link>
          )
        )}
      </div>
    </div>
  );

  return (
    <footer className={styles.footer}>
      <FlexContainer
        leftFlexPercentage={FooterContent.flexContainer.leftFlexPercentage}
        gap={FooterContent.flexContainer.gap}
        leftComponent={leftContent}
        rightComponent={rightContent}
        padding={FooterContent.flexContainer.padding}
        alignItems={FooterContent.flexContainer.alignItems}
        justifyContent={FooterContent.flexContainer.justifyContent}
      />
    </footer>
  );
}

export default Footer;

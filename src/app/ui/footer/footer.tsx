// footer.tsx
import React from "react";
import styles from "@/app/ui/footer/footer.module.css";
import FlexContainer from "@/app/ui/components/flex-container/flex-container";
import { FooterContent } from "@/app/lib/content";
import Image from "next/image";
import LinkItem from "@/app/ui/components/link-item/link-item";
import Link from "next/link";
import WrapperContainer from "@/app/ui/components/wrapper-container/wrapper-container";

function Footer() {
  const leftContent = (
    <div className={styles.left_content_container}>
      <Link href={FooterContent.flexContainer.leftContainer.logo.href}>
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
          ({ text, href, target_blank }, index) => (
            <LinkItem
              key={`footer-item-${index}`}
              href={href}
              target_blank={target_blank}
              text={text}
            />
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
    <footer className={styles.footer} id="footer">
      <WrapperContainer paddingLeft={40} paddingRight={40}>
        <FlexContainer
          leftFlexPercentage={FooterContent.flexContainer.leftFlexPercentage}
          gap={FooterContent.flexContainer.gap}
          leftComponent={leftContent}
          rightComponent={rightContent}
          padding={FooterContent.flexContainer.padding}
          alignItems={FooterContent.flexContainer.alignItems}
          justifyContent={FooterContent.flexContainer.justifyContent}
        />
      </WrapperContainer>
    </footer>
  );
}

export default Footer;

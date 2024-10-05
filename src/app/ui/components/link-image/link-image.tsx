import { DEFAULT_CONSTANTS } from "@/app/lib/content";
import { ILinkImage } from "@/app/lib/definition";
import Image from "next/image";
import Link from "next/link";
import React, { CSSProperties } from "react";
import styles from "@/app/ui/components/link-image/link-image.module.css";

interface ILinkImageProps extends ILinkImage {}

function LinkImage({
  src,
  href,
  alt,
  targetBlank = DEFAULT_CONSTANTS.LinkImage.targetBlank,
  width = DEFAULT_CONSTANTS.LinkImage.width,
  height = DEFAULT_CONSTANTS.LinkImage.height,
  hoverScaleEffect = DEFAULT_CONSTANTS.LinkImage.hoverScaleEffect,
}: ILinkImageProps) {
  const linkStyle: CSSProperties = {
    "--width": `${width}px`,
    "--height": `${height}px`,
  } as CSSProperties;

  return (
    <Link
      href={href}
      target={targetBlank ? "_blank" : "_self"}
      className={`${styles.link} ${
        hoverScaleEffect ? styles.hover_scale_effect : ""
      }`}
      style={linkStyle}
    >
      <Image src={src} alt={alt} fill className="media_fit_container" />
    </Link>
  );
}

export default LinkImage;

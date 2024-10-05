import { DEFAULT_CONSTANTS } from "@/app/lib/content";
import { ILinkImage } from "@/app/lib/definition";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ILinkImageProps extends ILinkImage {}

function LinkImage({
  src,
  href,
  alt,
  targetBlank = DEFAULT_CONSTANTS.LinkImage.targetBlank,
  width = DEFAULT_CONSTANTS.LinkImage.width,
  height = DEFAULT_CONSTANTS.LinkImage.height,
}: ILinkImageProps) {
  return (
    <Link href={href} target={targetBlank ? "_blank" : "_self"}>
      <Image src={src} alt={alt} width={width} height={height} />
    </Link>
  );
}

export default LinkImage;

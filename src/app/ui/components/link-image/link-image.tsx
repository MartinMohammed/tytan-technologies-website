import { DEFAULT_CONSTANTS } from "@/app/lib/content";
import { ILinkImage } from "@/app/lib/definition";
import Image from "next/image";
import Link from "next/link";
import React, { CSSProperties } from "react";

interface ILinkImageProps extends ILinkImage {}

function LinkImage({
  src,
  href,
  alt,
  targetBlank = DEFAULT_CONSTANTS.LinkImage.targetBlank,
}: ILinkImageProps) {
  return (
    <Link href={href} target={targetBlank ? "_blank" : "_self"}>
      <Image src={src} alt={alt} width={0} height={0} />
    </Link>
  );
}

export default LinkImage;

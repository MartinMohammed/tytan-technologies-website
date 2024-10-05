// nav-item.tsx
import React from "react";
import Link from "next/link";
import {
  TEXT_STYLES_ENUM,
  ANIMATIONS_ENUM,
  ILinkItem,
} from "@/app/lib/definition";
import { DEFAULT_CONSTANTS } from "@/app/lib/content";

interface ILinkItemProps extends ILinkItem {}

function LinkItem({
  text,
  href,
  targetBlank = DEFAULT_CONSTANTS.LinkItem.targetBlank,
  hover = DEFAULT_CONSTANTS.LinkItem.hover,
}: ILinkItemProps) {
  return (
    <Link
      href={href}
      target={targetBlank ? "_blank" : "_self"}
      className={`${TEXT_STYLES_ENUM.LINK_ITEM_TEXT_STYLE} ${
        hover ? ANIMATIONS_ENUM.HOVER_UNDERLINE : ""
      }`}
    >
      {text}
    </Link>
  );
}

export default LinkItem;

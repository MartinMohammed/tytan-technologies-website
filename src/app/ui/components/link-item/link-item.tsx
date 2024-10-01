// nav-item.tsx
import React from "react";
import Link from "next/link";
import {
  TEXT_STYLES_ENUM,
  ANIMATIONS_ENUM,
  ILinkItem,
} from "@/app/lib/definition";

interface ILinkItemProps extends ILinkItem {
  hover?: boolean;
}

function LinkItem({
  text,
  href,
  target_blank = false,
  hover = true,
}: ILinkItemProps) {
  return (
    <Link
      href={href}
      target={target_blank ? "_blank" : "_self"}
      className={`${TEXT_STYLES_ENUM.LINK_ITEM_TEXT_STYLE} ${
        hover ? ANIMATIONS_ENUM.HOVER_UNDERLINE : ""
      }`}
    >
      {text}
    </Link>
  );
}

export default LinkItem;

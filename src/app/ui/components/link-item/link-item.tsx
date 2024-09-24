// nav-item.tsx
import React from "react";
import Link from "next/link";
import { TEXT_STYLES, ANIMATIONS } from "@/app/lib/definition";

interface ILinkItemProps {
  text: string;
  href: string;
  hover?: boolean;
}

function LinkItem({ text, href, hover = true }: ILinkItemProps) {
  return (
    <Link
      href={href}
      className={`${TEXT_STYLES.LINK_ITEM_TEXT_STYLE} ${
        hover ? ANIMATIONS.HOVER_UNDERLINE : ""
      }`}
    >
      {text}
    </Link>
  );
}

export default LinkItem;

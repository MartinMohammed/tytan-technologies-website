// nav-item.tsx
import React from "react";
import Link from "next/link";
import { TEXT_STYLES_ENUM, ANIMATIONS_ENUM } from "@/app/lib/definition";

interface ILinkItemProps {
  text: string;
  href: string;
  hover?: boolean;
}

function LinkItem({ text, href, hover = true }: ILinkItemProps) {
  return (
    <Link
      href={href}
      className={`${TEXT_STYLES_ENUM.LINK_ITEM_TEXT_STYLE} ${
        hover ? ANIMATIONS_ENUM.HOVER_UNDERLINE : ""
      }`}
    >
      {text}
    </Link>
  );
}

export default LinkItem;

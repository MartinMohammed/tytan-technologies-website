// nav-item.tsx
import React from "react";
import Link from "next/link";
import styles from "@/app/ui/nav-bar/nav-item.module.css"; // Assuming a separate CSS module for NavItem

interface INavItemProps {
  text: string;
  href: string;
}

function NavItem({ text, href }: INavItemProps) {
  return (
    <Link href={href} className={`${styles.nav_item} nav_item_text_style`}>
      {text}
    </Link>
  );
}

export default NavItem;

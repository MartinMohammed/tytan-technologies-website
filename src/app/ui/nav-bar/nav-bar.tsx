// NavBar.tsx
import React from "react";
import styles from "@/app/ui/nav-bar/nav-bar.module.css";
import Image from "next/image";
import Link from "next/link";
import NavItem from "./nav-item";
import { NavBarContent } from "../../lib/content";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      {/* Flexbox container with space-between alignment */}
      <div className={styles.navbar_left}>
        <Link href={"#"}>
          <Image
            src={NavBarContent.logo.src}
            width={NavBarContent.logo.width}
            height={NavBarContent.logo.height}
            alt={NavBarContent.logo.alt}
          />
        </Link>
      </div>
      {/* Flexbox to group nav items and burger menu */}
      <div className={styles.navbar_right}>
        {/* Container for nav items with specified gap */}
        <div className={styles.nav_items}>
          {NavBarContent.navItems.map(({ text, href }, index) => {
            return (
              <NavItem key={`nav-item-${index}`} href={href} text={text} />
            );
          })}
        </div>
        <div className={styles.burger_menu}>
          <Image
            src={NavBarContent.burgerMenu.src}
            alt={NavBarContent.burgerMenu.alt}
            width={NavBarContent.burgerMenu.width}
            height={NavBarContent.burgerMenu.height}
          />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

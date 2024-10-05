// NavBar.tsx
import React from "react";
import styles from "@/app/ui/navbar/navbar.module.css";
import Image from "next/image";
import { NavbarContent } from "@/app/lib/content";
import LinkItem from "@/app/ui/components/link-item/link-item";
import LinkImage from "@/app/ui/components/link-image/link-image";

const SHOW_BURGER_MENU = false;

function NavBar() {
  return (
    <nav className={styles.navbar} id="navbar">
      {/* Flexbox container with space-between alignment */}
      <div className={styles.navbar_left}>
        <LinkImage {...NavbarContent.logo} />
      </div>
      {/* Flexbox to group nav items and burger menu */}
      <div className={styles.navbar_right}>
        {/* Container for nav items with specified gap */}
        <div className={styles.nav_items}>
          {NavbarContent.navItems.map((linkItem, index) => {
            return <LinkItem key={`nav-item-${index}`} {...linkItem} />;
          })}
        </div>
        {SHOW_BURGER_MENU && (
          <div className={styles.burger_menu}>
            <Image {...NavbarContent.burgerMenu} />
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;

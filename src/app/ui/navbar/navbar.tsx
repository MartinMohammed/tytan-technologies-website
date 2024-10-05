// NavBar.tsx
import React from "react";
import styles from "@/app/ui/navbar/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { NavbarContent } from "@/app/lib/content";
import LinkItem from "@/app/ui/components/link-item/link-item";

const SHOW_BURGER_MENU = false;

function NavBar() {
  return (
    <nav className={styles.navbar} id="navbar">
      {/* Flexbox container with space-between alignment */}
      <div className={styles.navbar_left}>
        <Link href={"#"} className={styles.navbar_logo}>
          <Image
            src={NavbarContent.logo.src}
            width={NavbarContent.logo.width}
            height={NavbarContent.logo.height}
            alt={NavbarContent.logo.alt}
          />
        </Link>
      </div>
      {/* Flexbox to group nav items and burger menu */}
      <div className={styles.navbar_right}>
        {/* Container for nav items with specified gap */}
        <div className={styles.nav_items}>
          {NavbarContent.navItems.map(({ text, href }, index) => {
            return (
              <LinkItem key={`nav-item-${index}`} href={href} text={text} />
            );
          })}
        </div>
        {SHOW_BURGER_MENU && (
          <div className={styles.burger_menu}>
            <Image
              src={NavbarContent.burgerMenu.src}
              alt={NavbarContent.burgerMenu.alt}
              width={NavbarContent.burgerMenu.width}
              height={NavbarContent.burgerMenu.height}
            />
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;

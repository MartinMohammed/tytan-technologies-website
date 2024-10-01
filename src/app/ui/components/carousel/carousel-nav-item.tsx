import React from "react";
import styles from "@/app/ui/components/carousel/carousel-nav-item.module.css";
import { TEXT_STYLES_ENUM } from "@/app/lib/definition";

interface ICarouselNavItemProps {
  label: string;
  onClick: () => void;
  isActive: boolean; // To track active item
}

function CarouselNavItem({ label, onClick, isActive }: ICarouselNavItemProps) {
  return (
    <div
      className={`${styles.carousel_nav_item} ${isActive ? styles.active : ""}`}
      onClick={onClick}
      aria-pressed={isActive}
    >
      <label
        className={`${styles.nav_label} ${TEXT_STYLES_ENUM.CAROUSEL_NAV_ITEM_TEXT_STYLE}`}
      >
        {label}
      </label>
    </div>
  );
}

export default CarouselNavItem;

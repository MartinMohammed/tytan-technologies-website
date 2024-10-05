"use client";

import React, { useEffect, useState } from "react";
import styles from "@/app/ui/components/carousel/carousel.module.css";
import { ICarouselItem } from "@/app/lib/definition";
import CarouselItem from "@/app/ui/components/carousel/carousel-item";
import CarouselNavItem from "@/app/ui/components/carousel/carousel-nav-item";

interface ICarouselProps {
  items: ICarouselItem[];
}

function Carousel({ items }: ICarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.carousel_container}>
      <div className={styles.carousel_content}>
        <CarouselItem item={items[activeIndex]} />
      </div>
      <div className={styles.carousel_nav}>
        {items.map((item, index) => (
          <CarouselNavItem
            key={`carousel-nav-item-${index}`}
            label={item.navLabel}
            onClick={() => setActiveIndex(index)}
            isActive={index === activeIndex} // Track the active nav item
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;

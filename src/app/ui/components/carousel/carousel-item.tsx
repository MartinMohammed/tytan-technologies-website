import React from "react";
import styles from "@/app/ui/components/carousel/carousel-item.module.css";
import {
  CAROUSEL_ITEM_TYPE_ENUM,
  ICarouselItem,
  TEXT_STYLES_ENUM,
} from "@/app/lib/definition";
import Image from "next/image";

interface ICaptionProps {
  title?: string;
  description?: string;
}

const Caption: React.FC<ICaptionProps> = ({ title, description }) => (
  <div className={styles.carousel_caption}>
    {title && (
      <h2
        className={`${styles.caption_title} ${TEXT_STYLES_ENUM.MEDIUM_TEXT_STYLE}`}
      >
        {title}
      </h2>
    )}
    {description && (
      <p
        className={`${styles.caption_description} ${TEXT_STYLES_ENUM.SMALL_TEXT_STYLE}`}
      >
        {description}
      </p>
    )}
  </div>
);

interface ICarouselItemProps {
  item: ICarouselItem;
  controls?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
}

const CAROUSEL_ITEM_DIMENSIONS = {
  height: 726,
  width: 1280,
};

// Memoize the component to prevent unnecessary re-renders
const CarouselItem = React.memo(
  ({
    item,
    controls = false,
    autoPlay = true,
    muted = true,
    loop = true,
  }: ICarouselItemProps) => {
    const videoControls = { controls, autoPlay, muted, loop };
    const hasCaption = Boolean(item.title || item.description);

    if (!item || !item.src) {
      console.error("CarouselItem: item or item.src is missing.");
      return null; // Return null to avoid rendering the error div
    }

    return (
      <div className={styles.carousel_item}>
        {/* Caption Container */}
        {hasCaption && (
          <Caption title={item.title} description={item.description} />
        )}

        {item.content_type === CAROUSEL_ITEM_TYPE_ENUM.IMAGE ? (
          <div className={styles.image_container}>
            <Image
              src={item.src}
              alt={item.alt || "Carousel Image"}
              className={styles.carousel_media}
              fill
              objectFit="cover"
              priority // Use only if high priority is necessary
            />
          </div>
        ) : (
          <video
            src={item.src}
            className={styles.carousel_media}
            width={CAROUSEL_ITEM_DIMENSIONS.width}
            height={CAROUSEL_ITEM_DIMENSIONS.height}
            {...videoControls}
          />
        )}
      </div>
    );
  }
);

export default CarouselItem;

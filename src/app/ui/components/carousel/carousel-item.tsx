import React from "react";
import styles from "@/app/ui/components/carousel/carousel-item.module.css";
import {
  MEDIA_TYPES_ENUM,
  ICarouselItem,
  TEXT_STYLES_ENUM,
} from "@/app/lib/definition";
import Image from "next/image";
import { DEFAULT_CONSTANTS } from "@/app/lib/content";

interface ICaptionProps {
  title?: string;
  description?: string;
}

const Caption: React.FC<ICaptionProps> = ({ title, description }) => (
  <div className={styles.carousel_item_caption}>
    {title && (
      <h3
        className={`${styles.caption_title} ${TEXT_STYLES_ENUM.MEDIUM_TEXT_STYLE}`}
      >
        {title}
      </h3>
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

interface ICarouselItemProps extends ICarouselItem {}

// Memoize the component to prevent unnecessary re-renders
function CarouselItem({
  title,
  src,
  alt,
  description,
  content_type = DEFAULT_CONSTANTS.CarouselItem.content_type,
  controls = DEFAULT_CONSTANTS.CarouselItem.controls,
  autoPlay = DEFAULT_CONSTANTS.CarouselItem.autoPlay,
  muted = DEFAULT_CONSTANTS.CarouselItem.muted,
  loop = DEFAULT_CONSTANTS.CarouselItem.loop,
}: ICarouselItemProps) {
  const videoControls = { controls, autoPlay, muted, loop };
  const hasCaption = Boolean(title || description);

  return (
    <div className={styles.carousel_item}>
      {/* Caption Container */}
      {hasCaption && <Caption title={title} description={description} />}

      <div className={styles.carousel_item_media_container}>
        {content_type === MEDIA_TYPES_ENUM.IMAGE ? (
          <Image
            src={src}
            alt={alt || "Carousel Image"}
            fill
            priority // Use only if high priority is necessary
            className={`media_fit_container ${styles.carousel_item_media_item}`}
          />
        ) : (
          <video
            src={src}
            {...videoControls}
            className={`media_fit_container ${styles.carousel_item_media_item}`}
          />
        )}
      </div>
    </div>
  );
}

export default CarouselItem;

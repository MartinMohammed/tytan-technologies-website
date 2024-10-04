import { ICharacteristicItem, TEXT_STYLES_ENUM } from "@/app/lib/definition";
import styles from "@/app/ui/components/characteristic-item/characteristic-item.module.css";
import React from "react";

interface ICharacteristicItemProps extends ICharacteristicItem {}

function CharacteristicItem({
  characteristic,
  value,
}: ICharacteristicItemProps) {
  return (
    <div className={styles.characteristic_item_row}>
      <span
        className={`${TEXT_STYLES_ENUM.SMALL_TEXT_STYLE} ${styles.characteristic_item_label}`}
      >
        {characteristic}
      </span>
      <span
        className={`${TEXT_STYLES_ENUM.SMALL_TEXT_STYLE} ${styles.characteristic_item_value}`}
      >
        {value}
      </span>
    </div>
  );
}

export default CharacteristicItem;

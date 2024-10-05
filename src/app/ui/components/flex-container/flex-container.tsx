// FlexContainer.jsx
import React, { CSSProperties, ReactNode } from "react";
import styles from "@/app/ui/components/flex-container/flex-container.module.css";
import { DEFAULT_CONSTANTS } from "@/app/lib/content";
import { IFlexContainerSettings } from "@/app/lib/definition";

interface IFlexContainerProps extends IFlexContainerSettings {
  leftComponent: ReactNode;
  rightComponent: ReactNode;
}

function FlexContainer({
  leftComponent,
  rightComponent,
  leftFlexPercentage = DEFAULT_CONSTANTS.FlexContainer.leftFlexPercentage,
  gap = DEFAULT_CONSTANTS.FlexContainer.gap,
  alignItems = DEFAULT_CONSTANTS.FlexContainer.alignItems,
  justifyContent = DEFAULT_CONSTANTS.FlexContainer.justifyContent,
}: IFlexContainerProps) {
  const rightFlexPercentage = 100 - leftFlexPercentage;
  const containerStyle: CSSProperties = {
    "--gap": `${gap}px`,
    "--align-items": alignItems, // Passing align-items value
    "--justify-content": justifyContent, // Passing justify-content value
  } as CSSProperties;

  const leftStyle: CSSProperties = {
    flex: `0 0 ${leftFlexPercentage}%`,
  };

  const rightStyle: CSSProperties = {
    flex: `0 1 ${rightFlexPercentage}%`,
  };

  return (
    <div className={styles.flexContainer} style={containerStyle}>
      <div className={styles.containerLeft} style={leftStyle}>
        {leftComponent}
      </div>
      <div className={styles.containerRight} style={rightStyle}>
        {rightComponent}
      </div>
    </div>
  );
}

export default FlexContainer;

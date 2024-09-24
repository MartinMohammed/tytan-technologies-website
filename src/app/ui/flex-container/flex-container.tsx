// FlexContainer.jsx
import React, { CSSProperties, ReactNode } from "react";
import styles from "@/app/ui/flex-container/flex-container.module.css";

interface IFlexContainerProps {
  leftFlexPercentage?: number;
  rightFlexPercentage?: number;
  leftComponent: ReactNode;
  rightComponent: ReactNode;
  gap?: number;
  padding?: string;
  alignItems?: string; // Optional align-items property
}

function FlexContainer({
  leftFlexPercentage = 50,
  leftComponent,
  rightComponent,
  gap = 0,
  padding = "75px 80px", // Default padding value
  alignItems = "start", // Default align-items value
}: IFlexContainerProps) {
  const rightFlexPercentage = 100 - leftFlexPercentage;
  const containerStyle: CSSProperties = {
    "--gap": `${gap}px`,
    "--padding": padding,
    "--align-items": alignItems, // Passing align-items value
  } as React.CSSProperties;

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

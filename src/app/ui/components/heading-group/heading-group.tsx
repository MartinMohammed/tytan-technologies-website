import React, { CSSProperties } from "react";
import styles from "@/app/ui/components/heading-group/heading-group.module.css";
import { IHeadingGroup, TEXT_STYLES_ENUM } from "@/app/lib/definition";

interface IHeadingGroupProps extends IHeadingGroup {
  gap?: number;
  widthPct?: number;
  reverse?: boolean;
  marginBottom?: number;
  marginTop?: number;
  primaryHeadingTextStyle?: TEXT_STYLES_ENUM;
  primaryHeadingTextColor?: string;
  subHeadingTextStyle?: TEXT_STYLES_ENUM;
  subHeadingTextColor?: string;
}

function HeadingGroup({
  primaryHeading,
  subHeading,
  gap = 25,
  reverse = false,
  widthPct = 100,
  marginBottom = 0,
  marginTop = 0,
  primaryHeadingTextStyle = TEXT_STYLES_ENUM.MEDIUM_TEXT_STYLE,
  primaryHeadingTextColor = "var(--text_primary)",
  subHeadingTextStyle = TEXT_STYLES_ENUM.SMALL_TEXT_STYLE,
  subHeadingTextColor = "var(--text_secondary)",
}: IHeadingGroupProps) {
  // If subheading is not defined then gap is 0
  gap = subHeading ? gap : 0;
  // Adjust the gap if reverse is activtated to 10px else geep it same
  gap = reverse ? 10 : gap;

  const containerStyle: CSSProperties = {
    "--gap": `${gap}px`,
    "--width": `${widthPct}%`,
    "--margin-top": `${marginTop}px`,
    "--margin-bottom": `${marginBottom}px`,
  } as React.CSSProperties;

  const primaryHeadingStyle: CSSProperties = {
    color: primaryHeadingTextColor,
  };

  const subHeadingStyle: CSSProperties = {
    color: subHeadingTextColor,
  };

  const headings = [
    <h2
      className={`${styles.primary_heading} ${primaryHeadingTextStyle}`}
      style={primaryHeadingStyle}
    >
      {primaryHeading}
    </h2>,
    <h3
      className={`${styles.sub_heading} ${subHeadingTextStyle}`}
      style={subHeadingStyle}
    >
      {subHeading}
    </h3>,
  ];
  return (
    <div className={styles.heading_group} style={containerStyle}>
      {reverse ? headings.reverse() : headings}
    </div>
  );
}

export default HeadingGroup;

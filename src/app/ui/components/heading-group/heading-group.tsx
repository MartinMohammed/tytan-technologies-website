import React, { CSSProperties } from "react";
import styles from "@/app/ui/components/heading-group/heading-group.module.css";
import { IHeadingGroup } from "@/app/lib/definition";
import { DEFAULT_CONSTANTS } from "@/app/lib/content";

interface IHeadingGroupProps extends IHeadingGroup {}

function HeadingGroup({
  primaryHeading,
  subHeading,
  gap = DEFAULT_CONSTANTS.HeadingGroup.gap,
  reverse = DEFAULT_CONSTANTS.HeadingGroup.reverse,
  widthPct = DEFAULT_CONSTANTS.HeadingGroup.widthPct,
  marginBottom = DEFAULT_CONSTANTS.HeadingGroup.marginBottom,
  marginTop = DEFAULT_CONSTANTS.HeadingGroup.marginTop,
  primaryHeadingTextStyle = DEFAULT_CONSTANTS.HeadingGroup
    .primaryHeadingTextStyle,
  primaryHeadingTextColor = DEFAULT_CONSTANTS.HeadingGroup
    .primaryHeadingTextColor,
  subHeadingTextStyle = DEFAULT_CONSTANTS.HeadingGroup.subHeadingTextStyle,
  subHeadingTextColor = DEFAULT_CONSTANTS.HeadingGroup.subHeadingTextColor,
}: IHeadingGroupProps) {
  // If subheading is not defined then gap is 0
  gap = subHeading ? gap : 0;
  // Adjust the gap if reverse is activtated to 10px else geep it same
  gap = reverse ? DEFAULT_CONSTANTS.HeadingGroup.reverseGap : gap;

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
      key={`primary-heading`}
      className={`${styles.primary_heading} ${primaryHeadingTextStyle}`}
      style={primaryHeadingStyle}
    >
      {primaryHeading}
    </h2>,
    <h3
      key={`sub-heading`}
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

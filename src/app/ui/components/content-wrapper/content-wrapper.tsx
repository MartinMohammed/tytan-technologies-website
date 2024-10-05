import React, { FC, ReactNode } from "react";
import styles from "@/app/ui/components/content-wrapper/content-wrapper.module.css";
import { DEFAULT_CONSTANTS } from "@/app/lib/content";
import { IContentWrapper } from "@/app/lib/definition";

interface IContentWrapperProps extends IContentWrapper {
  children: ReactNode;
}

const ContentWrapper: FC<IContentWrapperProps> = ({
  children,
  paddingTop = DEFAULT_CONSTANTS.ContentWrapper.paddingTop,
  paddingBottom = DEFAULT_CONSTANTS.ContentWrapper.paddingBottom,
  paddingLeft = DEFAULT_CONSTANTS.ContentWrapper.paddingLeft,
  paddingRight = DEFAULT_CONSTANTS.ContentWrapper.paddingRight,
}) => {
  // CSS variables defined via inline styles on a component are scoped exclusively to that component and its children. They do not pollute the global namespace or affect other parts of your application outside the component's hierarchy.
  const style = {
    "--padding-top": `${paddingTop}px`,
    "--padding-bottom": `${paddingBottom}px`,
    "--padding-left": `${paddingLeft}px`,
    "--padding-right": `${paddingRight}px`,
  } as React.CSSProperties;

  return (
    <div className={styles.content_wrapper} style={style}>
      {children}
    </div>
  );
};

export default ContentWrapper;

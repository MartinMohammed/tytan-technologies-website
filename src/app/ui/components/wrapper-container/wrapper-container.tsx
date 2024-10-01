import React, { FC, ReactNode } from "react";
import styles from "@/app/ui/components/wrapper-container/wrapper-container.module.css";

interface IWrapperContainerProps {
  children: ReactNode;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
}

const WrapperContainer: FC<IWrapperContainerProps> = ({
  children,
  paddingTop = 75,
  paddingBottom = 75,
  paddingLeft = 80,
  paddingRight = 80,
}) => {
  // CSS variables defined via inline styles on a component are scoped exclusively to that component and its children. They do not pollute the global namespace or affect other parts of your application outside the component's hierarchy.
  const style = {
    "--padding-top": `${paddingTop}px`,
    "--padding-bottom": `${paddingBottom}px`,
    "--padding-left": `${paddingLeft}px`,
    "--padding-right": `${paddingRight}px`,
  } as React.CSSProperties;

  return (
    <div className={styles.wrapper_container} style={style}>
      {children}
    </div>
  );
};

export default WrapperContainer;

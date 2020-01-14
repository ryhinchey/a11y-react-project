import React, { ReactChild } from "react";

import "./hidden.css";

interface HiddenProps {
  WrapperElement: keyof JSX.IntrinsicElements;
  isHidden: boolean;
  children: ReactChild;
}

const Hidden = ({ WrapperElement, isHidden, children }: HiddenProps) => {
  return (
    <WrapperElement className={isHidden ? "hidden" : ""}>
      {children}
    </WrapperElement>
  );
};

Hidden.defaultProps = {
  WrapperElement: "div"
};
export default Hidden;

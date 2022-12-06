import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IFocusProps {
  children?: ReactNode;
}

const Focus: FC<IFocusProps> = (props) => {
  return (
    <div>
      <div>关注</div>
    </div>
  );
};

export default memo(Focus);

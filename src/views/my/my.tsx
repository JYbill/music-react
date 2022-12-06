import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IMyProps {
  children?: ReactNode;
}

const My: FC<IMyProps> = (props) => {
  return (
    <div>
      <div>我的</div>
    </div>
  );
};

export default memo(My);

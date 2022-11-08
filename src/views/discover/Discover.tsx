/**
 * @time 2022/11/6 12:20
 * @author xiaoqinvar
 * @desc 发现页面
 * @dependence
 */
import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IDiscoverProps {
  children?: ReactNode;
}

const Discover: FC<IDiscoverProps> = (props) => {
  return (
    <div>
      <div>发现</div>
    </div>
  );
};

export default memo(Discover);

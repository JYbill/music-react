/**
 * @time 2022/11/16
 * @auth xiaoqinvar
 * @desc
 */
import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IFooterProps {
  children?: ReactNode;
}

const Footer: FC<IFooterProps> = (props) => {
  return <div>footer</div>;
};

export default memo(Footer);

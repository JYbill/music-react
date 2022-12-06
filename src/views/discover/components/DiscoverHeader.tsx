/**
 * @time 2022/11/22
 * @auth xiaoqinvar
 * @desc
 */
import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import NavHeader from "@/components/nav-header/nav-header";

interface IDiscoverHeaderProps {
  children?: ReactNode;
}

const DiscoverHeader: FC<IDiscoverHeaderProps> = (props) => {
  return <NavHeader />;
};

export default memo(DiscoverHeader);

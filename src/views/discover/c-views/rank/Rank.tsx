/**
 * @time 2022/11/8
 * @auth xiaoqinvar
 * @desc 排行榜子页面
 */
import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IRankProps {
  children?: ReactNode;
}

const Rank: FC<IRankProps> = (props) => {
  return <div>排行榜</div>;
};

export default memo(Rank);

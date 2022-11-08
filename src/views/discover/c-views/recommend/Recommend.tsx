/**
 * @time 2022/11/8
 * @auth xiaoqinvar
 * @desc 推荐子页面
 */
import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IRecommendProps {
  children?: ReactNode;
}

const Recommend: FC<IRecommendProps> = (props) => {
  return <div>推荐</div>;
};

export default memo(Recommend);

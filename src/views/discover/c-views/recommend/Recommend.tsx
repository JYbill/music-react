/**
 * @time 2022/11/8
 * @auth xiaoqinvar
 * @desc 推荐子页面
 */
import React, { memo, useEffect } from "react";
import type { FC, ReactNode } from "react";
import { useAppDispatch } from "@/store/index.store";
import { getBannerReq } from "@/store/recommend.store";

interface IRecommendProps {
  children?: ReactNode;
}

const Recommend: FC<IRecommendProps> = (props) => {
  // hooks
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBannerReq());
  }, []);

  // render
  return <div>推荐</div>;
};

export default memo(Recommend);

/**
 * @time 2022/11/8
 * @auth xiaoqinvar
 * @desc 推荐子页面
 */
import React, { memo, useEffect } from "react";
import type { FC, ReactNode } from "react";

import Swiper from "@/components/swiper/Swiper";
import { useAppDispatch } from "@/store/index.store";
import { getBannerReq } from "@/store/recommend.store";

interface IRecommendProps {
  children?: ReactNode;
}

const Recommend: FC<IRecommendProps> = (props) => {
  // hooks
  const dispatch = useAppDispatch();
  useEffect(() => {
    // 轮播图网络请求
    dispatch(getBannerReq());
  }, []);

  // render
  return (
    <div>
      <Swiper />
    </div>
  );
};

export default memo(Recommend);

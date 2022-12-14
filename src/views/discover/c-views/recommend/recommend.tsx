/**
 * @time 2022/11/8
 * @auth xiaoqinvar
 * @desc 推荐子页面
 */
import RecommendModule from "./components/recmd-m/recommend-module";
import { ContentWrapper } from "./style";

import React, { memo, useEffect } from "react";
import type { FC, ReactNode } from "react";

import Swiper from "@/components/swiper/swiper";
import { useAppDispatch } from "@/store/index.store";
import {
  getBannerReq,
  getNewDiscListReq,
  getSongListReq,
  getTopListReq,
} from "@/store/recommend.store";
import ModuleAside from "@/views/discover/c-views/recommend/components/m-aside/module-aside";

interface IRecommendProps {
  children?: ReactNode;
}

const Recommend: FC<IRecommendProps> = (props) => {
  // hooks
  const dispatch = useAppDispatch();
  useEffect(() => {
    // 轮播图网络请求
    dispatch(getBannerReq());
    dispatch(getSongListReq());
    dispatch(getNewDiscListReq());
    dispatch(getTopListReq());
  }, []);

  // render
  return (
    <div>
      <Swiper />
      <ContentWrapper className="wrap-v2">
        <RecommendModule />
        {/* 右侧侧边栏 */}
        <ModuleAside />
      </ContentWrapper>
    </div>
  );
};

export default memo(Recommend);

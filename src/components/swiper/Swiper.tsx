/**
 * @time 2022/11/24
 * @auth xiaoqinvar
 * @desc
 */
import { SwiperContent, SwiperRight, SwiperWrapper } from "./style";
import { Carousel } from "antd";

import type { ElementRef, FC, ReactNode } from "react";
import React, { memo, useRef, useState } from "react";
import { shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";

import { DOWNLOAD_ROUTER } from "@/enum/inde.enum";
import { useAppSelector } from "@/store/index.store";

interface ISwiperProps {
  children?: ReactNode;
}

const Swiper: FC<ISwiperProps> = (props) => {
  // 路由
  const nav = useNavigate();
  // 获取轮播图数据
  const { recommendReducer } = useAppSelector((state) => state, shallowEqual);

  const [bg, setBg] = useState<string>("");

  const swiperRef = useRef<ElementRef<typeof Carousel>>(null);

  // render
  return (
    <SwiperWrapper style={{ backgroundImage: `url(${bg})` }}>
      <SwiperContent>
        <Carousel effect="fade" autoplay={true} ref={swiperRef} beforeChange={changeSwiperBefore}>
          {renderBanner()}
        </Carousel>
        <SwiperRight>
          <div className="download-bg" onClick={() => nav(DOWNLOAD_ROUTER)} />
          <p className="download-info">PC 安卓 iPhone WP iPad Mac 六大客户端</p>
          <span className="shadow left spirit-shadow-bg-left" />
          <span className="shadow right spirit-shadow-bg-right" />
        </SwiperRight>
        <span
          className="opera left spirit-swiper-left spirit-swiper-left-dark"
          onClick={clickOperaPrev}
        />
        <span
          className="opera right spirit-swiper-right spirit-swiper-right-dark"
          onClick={clickOperaNext}
        />
      </SwiperContent>
    </SwiperWrapper>
  );

  /**
   * 操作轮播图事件
   */
  function clickOperaPrev() {
    swiperRef.current?.prev();
  }

  function clickOperaNext() {
    swiperRef.current?.next();
  }

  function changeSwiperBefore(before: number, nextSlide: number) {
    const bgUrl = recommendReducer.banners[nextSlide].imageUrl + "?imageView&blur=40x20";
    setBg(bgUrl);
  }

  /**
   * 渲染轮播图
   */
  function renderBanner() {
    return recommendReducer.banners.map((item) => {
      return (
        <div className="item" key={item.imageUrl}>
          <img src={item.imageUrl} alt={item.typeTitle} />
        </div>
      );
    });
  }
};

export default memo(Swiper);

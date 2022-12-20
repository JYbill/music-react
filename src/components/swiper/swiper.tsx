/**
 * @time 2022/11/24
 * @auth xiaoqinvar
 * @desc
 */
import { SwiperContent, SwiperRight, SwiperWrapper } from "./style";
import { Carousel } from "antd";
import { ThemeProvider } from "styled-components";

import type { ElementRef, FC, ReactNode } from "react";
import React, { memo, useRef, useState } from "react";
import { shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";

import Theme from "@/assets/mixin/theme";
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
  const DEFAULT_SPEED = 3000;
  const [speed, setSpeed] = useState<number>(DEFAULT_SPEED);

  const swiperRef = useRef<ElementRef<typeof Carousel>>(null);

  // render
  return (
    <ThemeProvider theme={Theme}>
      <SwiperWrapper
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "9000px",
          backgroundPosition: "center",
        }}
      >
        {/* 轮播图 */}
        <SwiperContent className="wrap-v2">
          <Carousel
            effect="fade"
            dots={{ className: "dot" }}
            autoplay={true}
            ref={swiperRef}
            beforeChange={changeSwiperBefore}
            afterChange={changeSwiperAfter}
            easing="ease-in"
            speed={speed}
          >
            {renderBanner()}
          </Carousel>

          {/* 轮播图右侧logo */}
          <SwiperRight>
            <div className="download-bg" onClick={() => nav(DOWNLOAD_ROUTER)} />
            <p className="download-info">PC 安卓 iPhone WP iPad Mac 六大客户端</p>
            <span className="shadow left spirit-shadow-bg-left" />
            <span className="shadow right spirit-shadow-bg-right" />
          </SwiperRight>

          {/* 轮播图控制按钮 */}
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
    </ThemeProvider>
  );

  /**
   * 操作轮播图事件
   */
  function clickOperaPrev() {
    setSpeed(0);
    swiperRef.current?.prev();
  }

  function clickOperaNext() {
    setSpeed(0);
    swiperRef.current?.next();
  }

  function changeSwiperBefore(before: number, nextSlide: number) {
    const bgUrl = recommendReducer.banners[nextSlide]?.imageUrl + "?imageView&blur=40x20";
    setBg(bgUrl);
  }

  function changeSwiperAfter(current: number) {
    setTimeout(() => {
      setSpeed(DEFAULT_SPEED);
    }, 400);
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

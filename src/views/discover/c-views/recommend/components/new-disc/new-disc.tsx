/**
 * @time 2022/12/3
 * @auth xiaoqinvar
 * @desc
 */
import { Carousel } from "antd";
import { ThemeProvider } from "styled-components";

import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { shallowEqual } from "react-redux";

import Theme from "@/assets/mixin/theme";
import { useAppSelector } from "@/store/index.store";
import { Wrapper } from "@/views/discover/c-views/recommend/components/new-disc/style";

interface INewDiscProps {
  children?: ReactNode;
}

const NewDisc: FC<INewDiscProps> = (props) => {
  const newDiscList = useAppSelector((state) => state.recommendReducer.newDiscList, shallowEqual);

  return (
    <ThemeProvider theme={Theme}>
      <Wrapper>
        <Carousel dots={false}>
          <div>{renderSwiperPer5()}</div>
          <div>{renderSwiperPer5(5, 9)}</div>
        </Carousel>
      </Wrapper>
    </ThemeProvider>
  );

  /**
   * 新碟上架板块 - 轮播图每五个进行渲染
   * @param startIndex 起始索引
   * @param latestIndex 结束索引
   */
  function renderSwiperPer5(startIndex = 0, latestIndex = 4) {
    if (newDiscList.length <= 0) {
      return;
    }

    const resArr = [];
    for (let index = startIndex; index <= latestIndex; index++) {
      // console.log(newDiscList[index] === undefined, index);
      const id = newDiscList[index].id;
      const name = newDiscList[index].name;
      const url = newDiscList[index].picUrl;
      const artists: string = newDiscList[index].artists.reduce((curr, next) => {
        return curr + " " + next.name;
      }, "");
      console.log(url);
      resArr.push(
        <div className="new-disc-item" key={id || index}>
          <div className="bg sprite-cover-v1" style={{ backgroundImage: `url(${url})` }}></div>
          <p>{name}</p>
          <p className="artists">{artists}</p>
        </div>,
      );
    }
    return <div className="swiper-page">{resArr}</div>;
  }
};

export default memo(NewDisc);

/**
 * @time 2022/12/3
 * @auth xiaoqinvar
 * @desc
 */
import { Carousel } from "antd";

import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { shallowEqual } from "react-redux";

import { useAppSelector } from "@/store/index.store";
import { Wrapper } from "@/views/discover/c-views/recommend/components/new-disc/style";

interface INewDiscProps {
  children?: ReactNode;
}

const NewDisc: FC<INewDiscProps> = (props) => {
  const newDiscList = useAppSelector((state) => state.recommendReducer.newDiscList, shallowEqual);
  // console.log(newDiscList);

  return (
    <Wrapper>
      <Carousel>
        <div>{renderSwiperPer5()[0]}</div>
        <div>{renderSwiperPer5()[1]}</div>
      </Carousel>
    </Wrapper>
  );

  /**
   * 新碟上架板块 - 轮播图每五个进行渲染
   */
  function renderSwiperPer5() {
    // 第一页的5个
    const prevArr = [];
    for (let index = 0; index < 5; index++) {
      const id = newDiscList[index]?.id;
      const name = newDiscList[index]?.name;
      prevArr.push(<div key={id || index}>{name}</div>);
    }

    // 第二页的5个
    const nextArr = [];
    for (let index = 5; index < newDiscList.length; index++) {
      const id = newDiscList[index]?.id;
      const name = newDiscList[index]?.name;
      nextArr.push(<div key={id || index}>{name}</div>);
    }
    return [prevArr, nextArr];
  }
};

export default memo(NewDisc);

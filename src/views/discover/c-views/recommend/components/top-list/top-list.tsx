/**
 * @time 2023/1/7
 * @auth xiaoqinvar
 * @desc 推荐页 - 榜单模块
 */
import React, { Fragment, memo } from "react";
import type { FC, ReactNode } from "react";
import { shallowEqual } from "react-redux";

import Theme from "@/assets/mixin/theme";
import { useAppSelector } from "@/store/index.store";
import { Wrapper } from "@/views/discover/c-views/recommend/components/top-list/style";

interface ITopListProps {
  children?: ReactNode;
}

const topListProps: FC<ITopListProps> = (props) => {
  const topDetailList = useAppSelector(
    (state) => state.recommendReducer.topDetailList,
    shallowEqual,
  );

  // console.log("topDetailList", topDetailList);
  return <Wrapper theme={Theme}>{renderTopList()}</Wrapper>;

  function renderTopList() {
    return topDetailList.map((item) => (
      <div className="top-list-item" key={item.id}>
        {/* 顶部 */}
        <div className="header">
          <img src={item.coverImgUrl} width={80} height={80} alt="" />
          <div className="operation">
            <h4>{item.name}</h4>
            <a className="spirit-play-v2" href=""></a>
            <a className="spirit-collect" href=""></a>
          </div>
        </div>

        {/* 排行榜 */}
        <div className="container">
          {item.tracks.slice(0, 10).map((item, index) => {
            let top3ClassName = "";
            if (index < 3) {
              top3ClassName = "top3";
            }
            return (
              <Fragment key={item.id}>
                <div className="detail-item">
                  <span className={top3ClassName}>{index + 1}</span>
                  <span>{item.name}</span>
                </div>
              </Fragment>
            );
          })}
          <div className="detail-item more">查看更多&gt;</div>
        </div>
      </div>
    ));
  }
};

export default memo(topListProps);

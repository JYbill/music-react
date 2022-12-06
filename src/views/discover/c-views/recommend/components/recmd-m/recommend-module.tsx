/**
 * @time 2022/11/30
 * @auth xiaoqinvar
 * @desc
 */
import { hotTagList } from "./recommend-module.enum";
import { ModuleWrapper } from "./style";

import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { shallowEqual } from "react-redux";

import Theme from "@/assets/mixin/theme";
import ContentHeaderV1 from "@/components/content-header-v1/content-header-v1";
import SongMenuItem from "@/components/song-menu-item/song-menu-item";
import { useAppSelector } from "@/store/index.store";
import NewDisc from "@/views/discover/c-views/recommend/components/new-disc/new-disc";

interface IRecommendModuleProps {
  children?: ReactNode;
}

const RecommendModule: FC<IRecommendModuleProps> = (props) => {
  const songList = useAppSelector((state) => state.recommendReducer.songList, shallowEqual);

  return (
    <ModuleWrapper theme={Theme}>
      {/* 热门推荐 */}
      <div className="hot-recommend">
        <ContentHeaderV1 title="热门推荐" tagList={hotTagList} />
        <div className="song-ls">{renderRecommend()}</div>
      </div>

      {/* 新碟上架 */}
      <div className="new-disc">
        <ContentHeaderV1 title="新碟上架" />
        <NewDisc />
      </div>
    </ModuleWrapper>
  );

  function renderRecommend() {
    return songList.map((item) => {
      return <SongMenuItem itemProps={item} key={item.id} />;
    });
  }
};

export default memo(RecommendModule);

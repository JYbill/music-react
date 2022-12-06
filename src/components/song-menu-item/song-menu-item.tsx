/**
 * @time 2022/12/2
 * @auth xiaoqinvar
 * @desc
 */
import { Wrapper } from "./style";

import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import Theme from "@/assets/mixin/theme";
import type { IRecommendSong } from "@/service/api/module/recommend.service";
import ImgUtil from "@/utils/img.util";
import NormalUtil from "@/utils/normal.util";

interface ISongMenuItemProps {
  children?: ReactNode;
  itemProps: IRecommendSong;
}

const SongMenuItem: FC<ISongMenuItemProps> = (props) => {
  return (
    <Wrapper theme={Theme}>
      <div className="cover">
        <div className="mask bg-song-item"></div>
        <img src={ImgUtil.resize(props.itemProps.picUrl, 140)} alt="" />
        <span className="mask-bottom bg-song-bottom">
          <span className="count spirit-headset">
            {NormalUtil.formatByPlayCount(props.itemProps.playCount)}
          </span>
          <span className="icon spirit-play"></span>
        </span>
      </div>
      <p className="song-desc">{props.itemProps.name}</p>
    </Wrapper>
  );
};

export default memo(SongMenuItem);

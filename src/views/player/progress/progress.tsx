/**
 * @time 2023/1/8
 * @auth xiaoqinvar
 * @desc
 */
import { Wrapper } from "./style";
import { Slider } from "antd";

import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { shallowEqual } from "react-redux";

import Theme from "@/assets/mixin/theme";
import { useAppSelector } from "@/store/index.store";
import ImgUtil from "@/utils/img.util";

interface IProgressProps {
  children?: ReactNode;
}

const progress: FC<IProgressProps> = (props) => {
  // store
  const { currSong } = useAppSelector((state) => state.playerReducer, shallowEqual);
  // console.log("currSong", currSong);

  return (
    <Wrapper theme={Theme}>
      <img
        width={34}
        height={34}
        src={currSong && ImgUtil.resize(currSong.al.picUrl, 50, 50)}
        alt=""
      />
      <div className="info">
        <div className="top">
          <span className="title">{currSong?.name}</span>
          <div className="sprite-mv mv"></div>
          <span className="singer">Alec Benjamin</span>
          <div className="sprite-link"></div>
        </div>
        <div className="bottom">
          <Slider defaultValue={0} tooltip={{ formatter: null }} />
          <div className="time">
            <span>00:00</span>
            <span>/</span>
            <span>00:00</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default memo(progress);

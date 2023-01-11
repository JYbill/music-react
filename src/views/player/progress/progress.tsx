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
import NormalUtil from "@/utils/normal.util";
import PlayerUtil from "@/utils/player.util";

interface IProgressProps {
  children?: ReactNode;
  progressVal: number;
  setProgressVal: React.Dispatch<React.SetStateAction<number>>;
  currTime: number;
  setCurrTime: React.Dispatch<React.SetStateAction<number>>;
  setMusicTime: AnyFunction;
  setIsSliding: React.Dispatch<React.SetStateAction<boolean>>;
}

const progress: FC<IProgressProps> = (props) => {
  // init
  const { currSong, musicInfo } = useAppSelector((state) => state.playerReducer, shallowEqual);
  const { setProgressVal, setCurrTime, setMusicTime, setIsSliding } = props;

  // common 公共方法
  /**
   * 根据当前Slider发生变化的值，设置进度和当前事件
   * @param val
   * @return timeStamp 滑动后，歌曲跳转的时间戳
   */
  const handleTimeAndProgress = (val: number) => {
    if (!musicInfo) return;
    const time = musicInfo.time;
    val = val > time ? time : val;
    const timeStamp = (val / 100) * time;
    setCurrTime(timeStamp);
    setProgressVal(val);
    return timeStamp;
  };
  // events
  // 进度条改变事件
  const changeSlider = (val: number) => {
    setIsSliding(true);
    handleTimeAndProgress(val);
  };
  // 鼠标抬起事件
  const afterChangeSlider = (val: number) => {
    const time = handleTimeAndProgress(val);
    setMusicTime(time);
    setIsSliding(false);
    // console.log(time);
  };

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
          <span className="singer">{currSong && PlayerUtil.formatArtist(currSong.ar)}</span>
          <div className="sprite-link"></div>
        </div>
        <div className="bottom">
          <Slider
            defaultValue={0}
            value={props.progressVal}
            tooltip={{ formatter: null }}
            step={0.5}
            onChange={changeSlider}
            onAfterChange={afterChangeSlider}
          />
          <div className="time">
            <span>{NormalUtil.formatMusicTime(props.currTime)}</span>
            <span>/</span>
            <span>{musicInfo && NormalUtil.formatMusicTime(musicInfo.time)}</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default memo(progress);

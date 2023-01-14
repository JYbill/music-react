/**
 * @time 2023/1/8
 * @auth xiaoqinvar
 * @desc
 */
import { Wrapper } from "./style";

import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { shallowEqual } from "react-redux";

import { useAppDispatch, useAppSelector } from "@/store/index.store";
import { getSongReq, nextSong, setPlayIndexAction } from "@/store/player.store";

export interface IOperationLeftProps {
  children?: ReactNode;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

const operationLeft: FC<IOperationLeftProps> = (props) => {
  // init.
  const dispatch = useAppDispatch();
  const playIndex = useAppSelector((state) => state.playerReducer.playIndex, shallowEqual);
  const { setIsPlaying, isPlaying } = props;

  /**
   * 点击播放按钮
   */
  const clickPlayBtn = () => {
    setIsPlaying(!isPlaying);
  };

  /**
   * 点击切换歌曲，上一曲、下一曲
   */
  const clickChangeMusic = (changeMode: "pre" | "next") => {
    dispatch(nextSong(changeMode));
    props.setIsPlaying(true);
  };
  return (
    <Wrapper {...props}>
      <div className="sprite-pre" onClick={() => clickChangeMusic("pre")}></div>
      <div className="sprite-play play" onClick={clickPlayBtn}></div>
      <div className="sprite-next" onClick={() => clickChangeMusic("next")}></div>
    </Wrapper>
  );
};

export default memo(operationLeft);

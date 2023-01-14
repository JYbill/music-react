/**
 * @time 2023/1/8
 * @auth xiaoqinvar
 * @desc
 */
import { Wrapper } from "./style";

import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { shallowEqual } from "react-redux";

import { PlayMode } from "@/enum/index.enum";
import { useAppDispatch, useAppSelector } from "@/store/index.store";
import { setPlayModeAction } from "@/store/player.store";

interface IOperationRightProps {
  children?: ReactNode;
}

const operationLeft: FC<IOperationRightProps> = (props) => {
  const dispatch = useAppDispatch();
  const playMode = useAppSelector((state) => state.playerReducer.playMode, shallowEqual);
  const playModelClass = playMode;

  /**
   * 点击切换播放模式
   */
  const clickPlayMode = () => {
    const playModeEnumList = [];
    for (const key in PlayMode) {
      const value = PlayMode[key as keyof typeof PlayMode];
      playModeEnumList.push(value);
    }
    const modeIndex = playModeEnumList.findIndex((item) => playMode === item);
    let nextModeIndex = modeIndex;
    if (nextModeIndex === playModeEnumList.length - 1) {
      nextModeIndex = 0;
    } else {
      nextModeIndex += 1;
    }
    const nextPlayMode = playModeEnumList[nextModeIndex];
    dispatch(setPlayModeAction(nextPlayMode));
  };
  return (
    <Wrapper>
      <div className="sprite-lyric"></div>
      <div className="sprite-collect-v2"></div>
      <div className="sprite-share"></div>
      <div className="sprite-division"></div>
      <div className="sprite-voice"></div>
      <div className={`sprite-continuous ${playModelClass}`} onClick={clickPlayMode}></div>
      <div className="sprite-song-ls"></div>
    </Wrapper>
  );
};

export default memo(operationLeft);

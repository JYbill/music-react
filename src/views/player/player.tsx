/**
 * @time 2023/1/8
 * @auth xiaoqinvar
 * @desc
 */
import OperationLeft from "./operation-left/operation-left";
import Progress from "./progress/progress";

import React, { memo, useEffect, useRef } from "react";
import type { FC, ReactNode } from "react";
import { shallowEqual } from "react-redux";

import { useAppDispatch, useAppSelector } from "@/store/index.store";
import { getSongReq } from "@/store/player.store";
import OperationRight from "@/views/player/operation-right/operation-right";
import { Wrapper } from "@/views/player/style";

interface IPlayerProps {
  children?: ReactNode;
}

const player: FC<IPlayerProps> = (props) => {
  // hooks
  const dispatch = useAppDispatch();
  useEffect(() => {
    // 轮播图网络请求
    dispatch(getSongReq(347230));
  }, []);

  // init
  const { currSong, musicInfo } = useAppSelector((state) => state.playerReducer, shallowEqual);
  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    if (!audioRef?.current || !currSong || !musicInfo) {
      return;
    }
    audioRef.current.src = musicInfo.url;
    audioRef.current
      .play()
      .then(() => {
        console.log("播放音乐成功");
      })
      .catch((err) => {
        console.log("播放音乐错误", err);
      });
  }, [audioRef, currSong, musicInfo]);

  console.log();
  return (
    <Wrapper>
      <OperationLeft></OperationLeft>
      <Progress></Progress>
      <OperationRight></OperationRight>
      <audio ref={audioRef} />
    </Wrapper>
  );
};

export default memo(player);

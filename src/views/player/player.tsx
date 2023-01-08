/**
 * @time 2023/1/8
 * @auth xiaoqinvar
 * @desc
 */
import OperationLeft from "./operation-left/operation-left";
import Progress from "./progress/progress";

import React, { memo, useEffect, useRef, useState } from "react";
import type { FC, ReactNode } from "react";
import { shallowEqual } from "react-redux";

import { IMusic } from "@/service/api/module/player.service";
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
    dispatch(getSongReq(22821100));
  }, []);

  // init
  const [isPlaying, setIsPlaying] = useState(false);
  const { currSong, musicInfo } = useAppSelector((state) => state.playerReducer, shallowEqual);
  const audioRef = useRef<HTMLAudioElement>(null);

  // 监听切歌
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

  // 监听播放与暂停
  useEffect(() => {
    const audio = audioRef.current as HTMLAudioElement;
    if (!isPlaying) {
      audio.pause();
      return;
    }
    audio.play();
  }, [isPlaying]);

  console.log();
  return (
    <Wrapper>
      <OperationLeft isPlaying={isPlaying} setIsPlaying={setIsPlaying}></OperationLeft>
      <Progress></Progress>
      <OperationRight></OperationRight>
      <audio ref={audioRef} />
    </Wrapper>
  );
};

export default memo(player);

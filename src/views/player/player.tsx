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
  const [progress, setProgress] = useState(0);
  const [currTime, setCurrTime] = useState(0);
  const { currSong, musicInfo } = useAppSelector((state) => state.playerReducer, shallowEqual);
  const musicTimeTotal = musicInfo?.time; // 歌曲总长度(ms)
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
        console.log("受到浏览器自动播放策略阻碍", err);
      });
  }, [audioRef, currSong, musicInfo]);

  // 监听播放与暂停
  useEffect(() => {
    const audio = audioRef.current as HTMLAudioElement;
    if (!isPlaying) {
      audio.pause();
      return;
    }
    audio.play().catch((err) => {
      setIsPlaying(false);
      // 存在版权原因无法导致播放失败
      console.log("播放音乐失败，原因:", err);
    });
  }, [isPlaying]);

  // event
  // 音乐进度条移动触发
  const updTimeAudio = (event: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    if (!audioRef.current || !musicTimeTotal) {
      return;
    }
    const currTime = audioRef.current.currentTime * 1000;
    setCurrTime(currTime);
    let progress = (currTime / musicTimeTotal) * 100; // 百分比
    progress = parseFloat(progress.toFixed(2));
    setProgress(progress);
  };

  console.log();
  return (
    <Wrapper>
      <OperationLeft isPlaying={isPlaying} setIsPlaying={setIsPlaying}></OperationLeft>
      <Progress progressVal={progress} currTime={currTime}></Progress>
      <OperationRight></OperationRight>
      <audio ref={audioRef} onTimeUpdate={updTimeAudio} />
    </Wrapper>
  );
};

export default memo(player);

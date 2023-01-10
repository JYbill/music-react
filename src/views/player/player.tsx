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

import { useAppSelector } from "@/store/index.store";
import OperationRight from "@/views/player/operation-right/operation-right";
import { Wrapper } from "@/views/player/style";

interface IPlayerProps {
  children?: ReactNode;
}

const player: FC<IPlayerProps> = (props) => {
  // init
  const [isPlaying, setIsPlaying] = useState(false); // 播放状态
  // TODO: 滑动状态时audio播放进度回调不会影响Slider的进度
  const [isSliding, setIsSliding] = useState(false); // 是否处于slider滑动状态
  const [progress, setProgress] = useState(0); // 进度百分比
  const [currTime, setCurrTime] = useState(0); // 当前播放时间ms
  const { currSong, musicInfo } = useAppSelector((state) => state.playerReducer, shallowEqual);
  const musicTimeTotal = musicInfo?.time; // 歌曲总长度(ms)
  const audioRef = useRef<HTMLAudioElement>(null);

  // mounted
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

  const endAudio = (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    setIsPlaying(false);
  };

  /**
   * 音乐播放进度跳转
   * 注意：设置时间单位为s
   * @param time
   */
  const updAudioProgress = (time: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = time / 1000;
  };

  return (
    <Wrapper>
      <OperationLeft isPlaying={isPlaying} setIsPlaying={setIsPlaying}></OperationLeft>
      <Progress
        progressVal={progress}
        setProgressVal={setProgress}
        currTime={currTime}
        setCurrTime={setCurrTime}
        setMusicTime={updAudioProgress}
      />
      <OperationRight></OperationRight>
      <audio ref={audioRef} onTimeUpdate={updTimeAudio} onEnded={endAudio} />
    </Wrapper>
  );
};

export default memo(player);

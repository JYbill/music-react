/**
 * @time 2023/1/8
 * @auth xiaoqinvar
 * @desc
 */
import OperationLeft from "./operation-left/operation-left";
import Progress from "./progress/progress";
import { message } from "antd";

import React, { memo, useEffect, useRef, useState } from "react";
import type { FC, ReactNode } from "react";
import { shallowEqual } from "react-redux";

import { PlayMode } from "@/enum/index.enum";
import { useAppDispatch, useAppSelector } from "@/store/index.store";
import { nextSong } from "@/store/player.store";
import OperationRight from "@/views/player/operation-right/operation-right";
import { Wrapper } from "@/views/player/style";

interface IPlayerProps {
  children?: ReactNode;
}

const player: FC<IPlayerProps> = (props) => {
  // init
  const dispatch = useAppDispatch();
  const [isPlaying, setIsPlaying] = useState(false); // 播放状态
  const [isSliding, setIsSliding] = useState(false); // 是否处于slider滑动状态
  const [progress, setProgress] = useState(0); // 进度百分比
  const [currTime, setCurrTime] = useState(0); // 当前播放时间ms
  const [currLyric, setCurrLyric] = useState(""); // 当前歌词
  const { currSong, musicInfo, lyricList, playMode } = useAppSelector(
    (state) => state.playerReducer,
    shallowEqual,
  );
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
        const code = err.code;
        switch (code) {
          case 0:
            console.log("受到浏览器自动播放策略阻碍", err);
            break;
          case 20:
            console.log("同时触发多次播放", err);
            break;
          default:
            console.log("其他错误", err);
        }
      });
  }, [currSong, musicInfo]);

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
      console.log("音乐播放失败，原因:", err);
    });
  }, [isPlaying]);

  // event
  // 音乐进度条移动触发
  const updTimeAudio = (event: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    if (!audioRef.current || !musicTimeTotal) return;
    // 如果没有滑动才让Progress移动，让Progress的时间增加
    if (isSliding) return;
    const currTime = audioRef.current.currentTime * 1000; // 单位ms
    setCurrTime(currTime);
    let progress = (currTime / musicTimeTotal) * 100; // 百分比
    progress = parseFloat(progress.toFixed(2));
    setProgress(progress);

    // 当前歌词算法，未匹配到按最后一句歌词处理(默认，开始就有歌词)
    let currLyricInfo = lyricList.find((item) => item.time > currTime);
    if (!currLyricInfo) {
      currLyricInfo = lyricList[lyricList.length - 1];
    }
    // 重复的一句歌词不再渲染
    if (currLyric === currLyricInfo.content) return;
    const content = currLyricInfo.content;
    setCurrLyric(content);
    message.open({
      key: "lyric",
      content: content,
      duration: 0,
      className: "lyric-msg",
    });
  };

  // 音乐结束事件
  const endAudio = (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    switch (playMode) {
      case PlayMode.CONTINUOUS:
      case PlayMode.RANDOM:
        dispatch(nextSong("next"));
        return;
      case PlayMode.CYCLE:
        audioRef.current!.currentTime = 0;
        audioRef.current!.play();
        return;
    }

    // 保持继续播放状态
    if (!isPlaying) {
      setIsPlaying(true);
    }
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
        setIsSliding={setIsSliding}
      />
      <OperationRight />
      <audio ref={audioRef} onTimeUpdate={updTimeAudio} onEnded={endAudio} />
    </Wrapper>
  );
};

export default memo(player);

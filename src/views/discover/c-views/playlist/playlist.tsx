/**
 * @time 2022/11/22
 * @auth xiaoqinvar
 * @desc
 */
import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IPlaylistProps {
  children?: ReactNode;
}

const Playlist: FC<IPlaylistProps> = (props) => {
  return <div>歌单</div>;
};

export default memo(Playlist);

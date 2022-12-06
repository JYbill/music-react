/**
 * @time 2022/11/8
 * @auth xiaoqinvar
 * @desc 歌手子页面
 */
import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IArtistProps {
  children?: ReactNode;
}

const Artist: FC<IArtistProps> = (props) => {
  return <div>歌手</div>;
};

export default memo(Artist);

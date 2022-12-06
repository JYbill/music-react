/**
 * @time 2022/11/8
 * @auth xiaoqinvar
 * @desc 唱片子页面
 */
import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IAlbumProps {
  children?: ReactNode;
}

const Album: FC<IAlbumProps> = (props) => {
  return <div>唱片发布</div>;
};

export default memo(Album);

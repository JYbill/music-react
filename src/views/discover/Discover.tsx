/**
 * @time 2022/11/6 12:20
 * @author xiaoqinvar
 * @desc 发现页面
 * @dependence
 */
import React, { memo, Suspense } from "react";
import type { FC, ReactNode } from "react";
import { Link, Outlet } from "react-router-dom";

interface IDiscoverProps {
  children?: ReactNode;
}

const Discover: FC<IDiscoverProps> = (props) => {
  return (
    <div>
      <div>发现</div>
      <Link to="recommend">推荐</Link>
      <Link to="rank">排行榜</Link>
      <Link to="radio">电台</Link>
      <Link to="artist">歌手</Link>
      <Link to="album">新碟上架</Link>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  );
};

export default memo(Discover);

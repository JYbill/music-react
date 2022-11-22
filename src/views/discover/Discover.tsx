/**
 * @time 2022/11/6 12:20
 * @author xiaoqinvar
 * @desc 发现页面
 * @dependence
 */
import React, { memo, Suspense } from "react";
import type { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import DiscoverHeader from "./components/DiscoverHeader";

interface IDiscoverProps {
  children?: ReactNode;
}

const Discover: FC<IDiscoverProps> = (props) => {
  return (
    <div>
      {/* 发现页面header */}
      <DiscoverHeader />

      {/* header路由显示的内容 */}
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  );
};

export default memo(Discover);

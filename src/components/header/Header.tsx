/**
 * @time 2022/11/16
 * @auth xiaoqinvar
 * @desc
 */
import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { HeadWrapper } from "./style";
import { ThemeProvider } from "styled-components";
import them from "@/assets/mixin/them";

interface IHeaderProps {
  children?: ReactNode;
}

const Header: FC<IHeaderProps> = (props) => {
  return (
    <ThemeProvider theme={them}>
      <HeadWrapper>
        <div className="header">
          <div className="content">
            <Link to="/"></Link>
            <Link to="/discover">发现音乐</Link>
            <Link to="/my">我的音乐</Link>
            <Link to="/focus">关注</Link>
            <Link to="/download">下载客户端</Link>
            <input className="search" type="text" placeholder="音乐/视频/电台/用户" />
            <span className="search-icon"></span>
          </div>
        </div>
      </HeadWrapper>
    </ThemeProvider>
  );
};

export default memo(Header);

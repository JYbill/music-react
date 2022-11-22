/**
 * @time 2022/11/16
 * @auth xiaoqinvar
 * @desc
 */
import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { HeadWrapper } from "./style";
import { ThemeProvider } from "styled-components";
import them from "@/assets/mixin/them";
import { Button } from "antd";
import headerData from "@/config/header-data.config";

interface IHeaderProps {
  children?: ReactNode;
}

const Header: FC<IHeaderProps> = (props) => {
  /**
   * 渲染header路由与超链接选项
   */
  const renderHeaderItem = () => {
    return headerData.map((item, index) => {
      const className = "item";
      return item.type === "router" ? (
        <NavLink
          className={({ isActive }) => {
            return isActive ? className + " active spirit-active-arrow" : className;
          }}
          key={index}
          to={item.url}
        >
          {item.name}
        </NavLink>
      ) : (
        <a className={className} key={index} href={item.url} rel="noreferrer" target="_blank">
          {item.name}
        </a>
      );
    });
  };

  /**
   * 打开创作中心
   */
  const openCreatCenter = () => {
    window.open("https://music.163.com/#/login?targetUrl=%2Fcreatorcenter");
  };

  return (
    <ThemeProvider theme={them}>
      <HeadWrapper>
        <div className="header">
          <div className="content">
            {/* 路由渲染 */}
            {renderHeaderItem()}

            {/* 搜索框 */}
            <div className="search-continer">
              <input className="search" type="text" placeholder="音乐/视频/电台/用户" />
              <span className="search-icon"></span>
            </div>

            {/* header右侧 */}
            <Button className="creat-center" onClick={() => openCreatCenter()}>
              创作中心
            </Button>
            <a className="login" href="" onClick={(e) => e.preventDefault()}>
              登陆
            </a>
          </div>
        </div>
      </HeadWrapper>
    </ThemeProvider>
  );
};

export default memo(Header);
